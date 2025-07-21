import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, SoftShadows } from '@react-three/drei';
// @ts-ignore
import * as THREE from 'three';

function GlowingCube() {
  return (
    <mesh rotation={[0.4, 0.4, 0]} castShadow receiveShadow>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#ff5fa2"
        emissive="#ff5fa2"
        emissiveIntensity={0.7}
        roughness={0.25}
        metalness={0.2}
      />
    </mesh>
  );
}

const ThreeCube = () => (
  <Canvas
    shadows
    style={{ width: 220, height: 220, background: 'transparent' }}
    camera={{ position: [2, 2, 4], fov: 40 }}
  >
    <ambientLight intensity={0.7} />
    <pointLight position={[5, 5, 5]} intensity={1.2} color="#ff5fa2" />
    <SoftShadows />
    <GlowingCube />
    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
  </Canvas>
);

export default ThreeCube; 