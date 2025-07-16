"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  Environment,
  Float,
  ContactShadows,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  RoundedBox,
  Sphere,
  Torus,
  Box,
} from "@react-three/drei"
import { useTheme } from "next-themes"

export function FeatureModel({ type }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 35 }}>
        {mounted && (
          <>
            <color attach="background" args={[theme === "dark" ? "#111827" : "#f8fafc"]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <Float rotationIntensity={2} floatIntensity={2}>
              {type === "speed" && <SpeedModel theme={theme || "light"} />}
              {type === "globe" && <GlobeModel theme={theme || "light"} />}
              {type === "database" && <DatabaseModel theme={theme || "light"} />}
              {type === "code" && <CodeModel theme={theme || "light"} />}
            </Float>
            <ContactShadows position={[0, -1.5, 0]} opacity={0.35} scale={10} blur={2.5} far={4} />
            <Environment preset="city" />
          </>
        )}
      </Canvas>
    </div>
  )
}

function SpeedModel({ theme }) {
  const group = useRef(null)

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = t * 0.5
  })

  return (
    <group ref={group} dispose={null} position={[0, 0, 0]}>
      <Torus args={[1, 0.2, 16, 32]} position={[0, 0, 0]}>
        <MeshWobbleMaterial
          color={theme === "dark" ? "#60a5fa" : "#3b82f6"}
          factor={0.3}
          speed={2}
          metalness={0.8}
          roughness={0.2}
        />
      </Torus>

      <Sphere args={[0.3, 32, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color={theme === "dark" ? "#f472b6" : "#ec4899"}
          speed={2}
          distort={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
    </group>
  )
}

function GlobeModel({ theme }) {
  const group = useRef(null)

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = t * 0.2
  })

  return (
    <group ref={group} dispose={null} position={[0, 0, 0]}>
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color={theme === "dark" ? "#60a5fa" : "#3b82f6"}
          speed={1.5}
          distort={0.2}
          metalness={0.1}
          roughness={0.4}
          wireframe
        />
      </Sphere>

      <Torus args={[1.2, 0.05, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color={theme === "dark" ? "#f472b6" : "#ec4899"} metalness={0.8} roughness={0.2} />
      </Torus>

      <Torus args={[1.2, 0.05, 16, 32]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color={theme === "dark" ? "#f472b6" : "#ec4899"} metalness={0.8} roughness={0.2} />
      </Torus>
    </group>
  )
}

function DatabaseModel({ theme }) {
  const group = useRef(null)

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = t * 0.3
  })

  return (
    <group ref={group} dispose={null} position={[0, 0, 0]}>
      <Torus args={[0.7, 0.3, 16, 32]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color={theme === "dark" ? "#60a5fa" : "#3b82f6"} metalness={0.8} roughness={0.2} />
      </Torus>

      <Torus args={[0.7, 0.3, 16, 32]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <meshStandardMaterial color={theme === "dark" ? "#a78bfa" : "#8b5cf6"} metalness={0.8} roughness={0.2} />
      </Torus>

      <Torus args={[0.7, 0.3, 16, 32]} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color={theme === "dark" ? "#f472b6" : "#ec4899"} metalness={0.8} roughness={0.2} />
      </Torus>

      <Box args={[0.1, 1.5, 0.1]} position={[0.7, 0, 0]}>
        <meshStandardMaterial color={theme === "dark" ? "#f1f5f9" : "#0f172a"} metalness={0.8} roughness={0.2} />
      </Box>

      <Box args={[0.1, 1.5, 0.1]} position={[-0.7, 0, 0]}>
        <meshStandardMaterial color={theme === "dark" ? "#f1f5f9" : "#0f172a"} metalness={0.8} roughness={0.2} />
      </Box>
    </group>
  )
}

function CodeModel({ theme }) {
  const group = useRef(null)

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = t * 0.3
  })

  return (
    <group ref={group} dispose={null} position={[0, 0, 0]}>
      <RoundedBox args={[2, 1.2, 0.1]} radius={0.1} position={[0, 0, 0]}>
        <meshStandardMaterial color={theme === "dark" ? "#1e293b" : "#f8fafc"} metalness={0.2} roughness={0.8} />
      </RoundedBox>

      <Box args={[0.8, 0.1, 0.05]} position={[-0.5, 0.4, 0.1]}>
        <meshStandardMaterial color={theme === "dark" ? "#60a5fa" : "#3b82f6"} metalness={0.8} roughness={0.2} />
      </Box>

      <Box args={[1.2, 0.1, 0.05]} position={[0, 0.2, 0.1]}>
        <meshStandardMaterial color={theme === "dark" ? "#a78bfa" : "#8b5cf6"} metalness={0.8} roughness={0.2} />
      </Box>

      <Box args={[0.6, 0.1, 0.05]} position={[-0.6, 0, 0.1]}>
        <meshStandardMaterial color={theme === "dark" ? "#f472b6" : "#ec4899"} metalness={0.8} roughness={0.2} />
      </Box>

      <Box args={[1.0, 0.1, 0.05]} position={[0.2, -0.2, 0.1]}>
        <meshStandardMaterial color={theme === "dark" ? "#60a5fa" : "#3b82f6"} metalness={0.8} roughness={0.2} />
      </Box>

      <Box args={[0.4, 0.1, 0.05]} position={[-0.7, -0.4, 0.1]}>
        <meshStandardMaterial color={theme === "dark" ? "#a78bfa" : "#8b5cf6"} metalness={0.8} roughness={0.2} />
      </Box>
    </group>
  )
}
