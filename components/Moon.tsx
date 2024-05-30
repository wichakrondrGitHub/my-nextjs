// src/Moon.js
"use client";
import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

const Moon = () => {
  const [auraPosition, setAuraPosition] = useState([0, 0, 0]);

  useFrame(() => {
    // Update aura position
    setAuraPosition((prevPosition) => [
      prevPosition[0] + Math.sin(Date.now() * 0.001) * 0.05, // Adjust speed and distance here
      prevPosition[1] + Math.cos(Date.now() * 0.001) * 0.05,
      prevPosition[2],
    ]);
  });

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />

        {/* Moon Sphere */}
        <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            map={new THREE.TextureLoader().load("/moon.jpeg")}
          />
        </Sphere>

        {/* Gold Aura Sphere */}
        <Sphere args={[1.2, 32, 32]} position={auraPosition}>
          <meshBasicMaterial
            color={"gold"}
            opacity={0.5}
            transparent={true}
            side={THREE.DoubleSide}
          />
        </Sphere>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Moon;
