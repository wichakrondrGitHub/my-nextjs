// src/Moon.js
"use client";
import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

const Moon = () => {
  const [auraPosition, setAuraPosition] = useState([0, 0, 0]);

  return (
    <div style={{ height: "100px" }}>
      <Canvas>
        <ambientLight intensity={1.4} />

        {/* Moon Sphere */}
        <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            map={new THREE.TextureLoader().load("/moon.jpeg")}
          />
        </Sphere>

        {/* Gold Aura Sphere */}
        <Sphere args={[1.2, 32, 32]} position={[0, 0, 0]}>
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
