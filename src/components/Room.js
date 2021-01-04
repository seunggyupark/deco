import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, ContactShadows } from "drei";

import Bedroom from "./Bedroom";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight castShadow position={[0, 35, 35]} intensity={0.5} />
    </>
  );
};

const HTMLContent = () => {
  // const { nodes, materials } = useGLTF("chair.glb")
};

export default function Room() {
  return (
    <Canvas shadowMap colorManagement camera={{ position: [35, 35, 35], fov: 75 }}>
      <Lights />
      <Suspense fallback={null}>
        <Bedroom />
      </Suspense>
      <OrbitControls
        minPolarAngle={Math.PI / 3.3}
        maxPolarAngle={Math.PI / 3.3}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}
