"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { Suspense } from "react"

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.3} speed={1.5} roughness={0} />
    </Sphere>
  )
}

export function Canvas3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ height: "100vh", width: "100%" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </Canvas>
  )
}

export default Canvas3D
