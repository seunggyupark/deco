import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";

import Bedroom from "./Bedroom";

// Learn what those light settings mean
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[10, 20, 15]}
        intensity={.8}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={55}
        shadow-camera-left={-50}
        shadow-camera-right={20}
        shadow-camera-top={35}
        shadow-camera-bottom={-35}
      />
    </>
  );
};

export default function Room() {
  return (
    <Canvas shadowMap colorManagement camera={{ position: [35, 20, 35], fov: 75 }}>
      <Lights />
      <Suspense fallback={null}>
        <Bedroom />
      </Suspense>
      <OrbitControls
        minPolarAngle={Math.PI / 10}
        maxPolarAngle={Math.PI / 2.7 }
        maxAzimuthAngle={0.5* Math.PI}
        minAzimuthAngle={2* Math.PI}
        enablePan={false}
        enableZoom={false}
      />
    </Canvas>
  );
}
