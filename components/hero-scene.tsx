"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
  Text3D,
  MeshTransmissionMaterial,
  MeshDistortMaterial,
  RoundedBox,
} from "@react-three/drei"
import { useTheme } from "next-themes"

export function HeroScene() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return <div className="w-full h-full bg-muted/20 rounded-xl" />
  }

  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
        <color attach="background" args={[theme === "dark" ? "#030712" : "#ffffff"]} />
        <fog attach="fog" args={[theme === "dark" ? "#030712" : "#ffffff", 8, 30]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float rotationIntensity={0.4}>
            <Scene theme={theme || "light"} />
          </Float>
        </PresentationControls>
        <ContactShadows position={[0, -1.4, 0]} opacity={0.35} scale={10} blur={2.5} far={4} />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

function Scene({ theme }) {
  const group = useRef(null)

  return (
    <group ref={group} dispose={null} position={[0, -1, 0]}>
      <FloatingCube position={[-2, 0, 0]} color={theme === "dark" ? "#3b82f6" : "#2563eb"} />
      <FloatingSphere position={[2, 0, 0]} color={theme === "dark" ? "#8b5cf6" : "#6d28d9"} />
      <FloatingTorus position={[0, 2, 0]} color={theme === "dark" ? "#ec4899" : "#db2777"} />

      <Text3D
        font="/fonts/Inter_Bold.json"
        position={[0, 0, 0]}
        rotation={[0, -0.2, 0]}
        size={0.6}
        height={0.1}
        curveSegments={12}
      >
        ShadowGrow
        <MeshDistortMaterial
          color={theme === "dark" ? "#60a5fa" : "#3b82f6"}
          envMapIntensity={1}
          clearcoat={0.8}
          clearcoatRoughness={0}
          metalness={0.1}
          distort={0.2}
          speed={1.5}
        />
      </Text3D>

      <RoundedBox args={[10, 0.1, 5]} radius={0.1} position={[0, -1.5, 0]}>
        <meshStandardMaterial color={theme === "dark" ? "#1e293b" : "#f1f5f9"} metalness={0.2} roughness={0.8} />
      </RoundedBox>

      <group position={[0, -1.45, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[50, 50]} />
          <shadowMaterial transparent opacity={theme === "dark" ? 0.4 : 0.1} />
        </mesh>
      </group>

      <GridLines theme={theme} />
    </group>
  )
}

function FloatingCube({ position, color }) {
  const mesh = useRef(null)

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.x = Math.sin(t / 4) / 2
    mesh.current.rotation.y = Math.sin(t / 2) / 2
    mesh.current.position.y = position[1] + Math.sin(t / 1.5) / 3
  })

  return (
    <mesh ref={mesh} position={position} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <MeshTransmissionMaterial
        backside
        samples={4}
        thickness={0.5}
        color={color}
        distortion={0.5}
        distortionScale={0.5}
        temporalDistortion={0.1}
        anisotropy={1}
        roughness={0.2}
        metalness={0.1}
      />
    </mesh>
  )
}

function FloatingSphere({ position, color }) {
  const mesh = useRef(null)

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.getElapsedTime()
    mesh.current.position.y = position[1] + Math.sin(t / 2) / 3
  })

  return (
    <mesh ref={mesh} position={position} castShadow receiveShadow>
      <sphereGeometry args={[0.7, 32, 32]} />
      <MeshTransmissionMaterial
        backside
        samples={4}
        thickness={0.5}
        color={color}
        distortion={0.5}
        distortionScale={0.5}
        temporalDistortion={0.1}
        anisotropy={1}
        roughness={0.2}
        metalness={0.1}
      />
    </mesh>
  )
}

function FloatingTorus({ position, color }) {
  const mesh = useRef(null)

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.x = Math.sin(t / 3) / 2
    mesh.current.rotation.y = Math.sin(t / 2) / 2
    mesh.current.position.y = position[1] + Math.sin(t / 1.8) / 3
  })

  return (
    <mesh ref={mesh} position={position} castShadow receiveShadow>
      <torusGeometry args={[0.6, 0.2, 16, 32]} />
      <MeshTransmissionMaterial
        backside
        samples={4}
        thickness={0.5}
        color={color}
        distortion={0.5}
        distortionScale={0.5}
        temporalDistortion={0.1}
        anisotropy={1}
        roughness={0.2}
        metalness={0.1}
      />
    </mesh>
  )
}

function GridLines({ theme }) {
  const size = 20
  const divisions = 20
  const colorCenter = theme === "dark" ? "#4f46e5" : "#6366f1"
  const colorGrid = theme === "dark" ? "#1e293b" : "#e2e8f0"

  return (
    <group position={[0, -1.45, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper args={[size, divisions, colorCenter, colorGrid]} />
    </group>
  )
}
