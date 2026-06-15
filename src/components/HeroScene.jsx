import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ------------------------------------------------------------------ *
 * Custom shader material — simplex-noise vertex displacement with
 * recomputed normals, a fresnel rim and a warm holographic palette.
 * ------------------------------------------------------------------ */
const glslNoise = /* glsl */ `
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
  float snoise(vec3 v){
    const vec2 C=vec2(1.0/6.0,1.0/3.0);
    const vec4 D=vec4(0.0,0.5,1.0,2.0);
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.0-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+1.0*C.xxx;
    vec3 x2=x0-i2+2.0*C.xxx;
    vec3 x3=x0-1.0+3.0*C.xxx;
    i=mod(i,289.0);
    vec4 p=permute(permute(permute(
      i.z+vec4(0.0,i1.z,i2.z,1.0))
      +i.y+vec4(0.0,i1.y,i2.y,1.0))
      +i.x+vec4(0.0,i1.x,i2.x,1.0));
    float n_=1.0/7.0;
    vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.0*floor(p*ns.z*ns.z);
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.0*x_);
    vec4 x=x_*ns.x+ns.yyyy;
    vec4 y=y_*ns.x+ns.yyyy;
    vec4 h=1.0-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy);
    vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.0+1.0;
    vec4 s1=floor(b1)*2.0+1.0;
    vec4 sh=-step(h,vec4(0.0));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x);
    vec3 p1=vec3(a0.zw,h.y);
    vec3 p2=vec3(a1.xy,h.z);
    vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
    vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
    m=m*m;
    return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }
`;

const BlobMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector3(0, 0, 0),
    uHover: 0,
  },
  /* vertex */ /* glsl */ `
    uniform float uTime;
    uniform vec3 uMouse;
    uniform float uHover;
    varying vec3 vNormal;
    varying vec3 vView;
    varying float vDisp;
    ${glslNoise}

    float fbm(vec3 p){
      float v = 0.0;
      float a = 0.5;
      for(int i=0;i<4;i++){ v += a*snoise(p); p*=2.0; a*=0.5; }
      return v;
    }

    float displace(vec3 p){
      float t = uTime * 0.28;
      float n = fbm(p * 1.15 + vec3(0.0, t, 0.0));
      float d = distance(normalize(p), normalize(uMouse + vec3(0.0001)));
      float bulge = smoothstep(1.1, 0.0, d) * uHover * 0.5;
      return n * (0.34 + 0.18 * uHover) + bulge;
    }

    void main(){
      vec3 pos = position;
      float disp = displace(pos);

      float eps = 0.08;
      vec3 tangent = normalize(cross(normal, vec3(0.0,1.0,0.0)) + vec3(0.0001));
      vec3 bitangent = normalize(cross(normal, tangent));
      vec3 pA = pos + tangent * eps;
      vec3 pB = pos + bitangent * eps;
      vec3 dispPos = pos + normal * disp;
      vec3 dispA = pA + normal * displace(pA);
      vec3 dispB = pB + normal * displace(pB);
      vec3 newNormal = normalize(cross(dispA - dispPos, dispB - dispPos));

      vDisp = disp;
      vNormal = normalize(normalMatrix * newNormal);
      vec4 mv = modelViewMatrix * vec4(dispPos, 1.0);
      vView = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv;
    }
  `,
  /* fragment */ /* glsl */ `
    precision highp float;
    uniform float uTime;
    varying vec3 vNormal;
    varying vec3 vView;
    varying float vDisp;

    vec3 palette(float t){
      vec3 a = vec3(0.62, 0.46, 0.52);
      vec3 b = vec3(0.42, 0.34, 0.38);
      vec3 c = vec3(1.0, 1.0, 1.0);
      vec3 d = vec3(0.0, 0.12, 0.30);
      return a + b * cos(6.28318 * (c * t + d));
    }

    void main(){
      vec3 N = normalize(vNormal);
      vec3 V = normalize(vView);
      float fres = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 2.4);

      float t = fres * 0.85 + vDisp * 0.55 + uTime * 0.02;
      vec3 col = palette(t);

      vec3 core = vec3(0.05, 0.04, 0.06);
      col = mix(core, col, smoothstep(0.05, 0.7, fres + 0.18));
      col += vec3(1.0, 0.55, 0.35) * pow(fres, 3.0) * 0.9;

      gl_FragColor = vec4(col, 1.0);
    }
  `
);
extend({ BlobMaterial });

function Blob({ pointer }) {
  const mat = useRef();
  const mesh = useRef();
  const target = useRef(new THREE.Vector3());
  const hover = useRef(0);

  useFrame((state, delta) => {
    const px = pointer.current.x;
    const py = pointer.current.y;
    if (mat.current) {
      mat.current.uTime = state.clock.elapsedTime;
      target.current.set(px, py, 0.6);
      mat.current.uMouse.lerp(target.current, 0.06);
      const moving = Math.hypot(px, py) > 0.02 ? 1 : 0;
      hover.current += (moving - hover.current) * 0.04;
      mat.current.uHover = hover.current;
    }
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.12;
      mesh.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.15 - py * 0.25;
      mesh.current.rotation.z = px * 0.2;
    }
  });

  return (
    <mesh ref={mesh} scale={1.55}>
      <icosahedronGeometry args={[1, 40]} />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <blobMaterial ref={mat} />
    </mesh>
  );
}

function Particles({ count = 1400, pointer }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.pow(Math.random(), 0.6) * 6.5;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      arr[i * 3 + 2] = r * Math.cos(p);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.015;
    ref.current.rotation.x = pointer.current.y * 0.08;
    ref.current.position.x = pointer.current.x * 0.4;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#ece7dd"
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Resize() {
  const { camera, size } = useThree();
  camera.position.z = size.width < 768 ? 4.6 : 3.7;
  camera.updateProjectionMatrix();
  return null;
}

const HeroScene = () => {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 3.7], fov: 100 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <Resize />
        <ambientLight intensity={0.6} />
        <Blob pointer={pointer} />
        <Particles count={1400} pointer={pointer} />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
