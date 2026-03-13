"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Shape() {
  const mesh = useRef<any>(null);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.003;
      mesh.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[1.3, 0.35, 120, 16]} />
      <meshStandardMaterial color="#00ffff" wireframe />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full">

      <Canvas
        camera={{ position: [0, 0, 5] }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />

        <Shape />

      </Canvas>

    </div>
  );
}