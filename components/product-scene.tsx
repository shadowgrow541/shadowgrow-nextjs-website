"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, PresentationControls, ContactShadows, Text, RoundedBox } from "@react-three/drei"
import { useTheme } from "next-themes"

export function ProductScene({ product }) {
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
            <color attach="background" args={[theme === "dark" ? "#030712" : "#ffffff"]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <PresentationControls
              global
              rotation={[0.13, 0.1, 0]}
              polar={[-0.4, 0.2]}
              azimuth={[-0.5, 0.5]}
              config={{ mass: 2, tension: 400 }}
              snap={{ mass: 4, tension: 400 }}
            >
              <Float rotationIntensity={0.2}>
                {product === "cloud" && <CloudProduct theme={theme || "light"} />}
                {product === "analytics" && <AnalyticsProduct theme={theme || "light"} />}
                {product === "security" && <SecurityProduct theme={theme || "light"} />}
              </Float>
            </PresentationControls>
            <ContactShadows position={[0, -1.5, 0]} opacity={0.35} scale={10} blur={2.5} far={4} />
            <Environment preset="city" />
          </>
        )}
      </Canvas>
    </div>
  )
}

function CloudProduct({ theme }) {
  const group = useRef(null)

  return (
    <group ref={group} dispose={null} position={[0, 0, 0]}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <RoundedBox args={[3, 2, 0.2]} radius={0.1} position={[0, 0, 0]}>
          <meshStandardMaterial color={theme === "dark" ? "#1e293b" : "#f8fafc"} metalness={0.2} roughness={0.8} />
        </RoundedBox>

        <group position={[0, 0, 0.15]}>
          <CloudIcon position={[0, 0.5, 0]} color={theme === "dark" ? "#60a5fa" : "#3b82f6"} />

          <Text
            position={[0, -0.2, 0]}
            fontSize={0.2}
            color={theme === "dark" ? "#f1f5f9" : "#0f172a"}
            font="/fonts/Inter_Regular.json"
            anchorX="center"
            anchorY="middle"
          >
            Cloud Platform
          </Text>

          <Text
            position={[0, -0.5, 0]}
            fontSize={0.1}
            color={theme === "dark" ? "#94a3b8" : "#64748b"}
            font="/fonts/Inter_Regular.json"
            anchorX="center"
            anchorY="middle"
            maxWidth={2}
            textAlign="center"
          >
            Deploy, scale, and manage with ease
          </Text>
        </group>
      </Float>

      <group position={[0, -1.5, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial transparent opacity={theme === "dark" ? 0.4 : 0.1} />
        </mesh>
      </group>
    </group>
  )
}

function AnalyticsProduct({ theme }) {
  const group = useRef()

  return (
    <group ref={group} dispose={null} position={[0, 0, 0]}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <RoundedBox args={[3, 2, 0.2]} radius={0.1} position={[0, 0, 0]}>
          <meshStandardMaterial color={theme === "dark" ? "#1e293b" : "#f8fafc"} metalness={0.2} roughness={0.8} />
        </RoundedBox>

        <group position={[0, 0, 0.15]}>
          <AnalyticsIcon position={[0, 0.5, 0]} color={theme === "dark" ? "#a78bfa" : "#8b5cf6"} />

          <Text
            position={[0, -0.2, 0]}
            fontSize={0.2}
            color={theme === "dark" ? "#f1f5f9" : "#0f172a"}
            font="/fonts/Inter_Regular.json"
            anchorX="center"
            anchorY="middle"
          >
            Analytics Platform
          </Text>

          <Text
            position={[0, -0.5, 0]}
            fontSize={0.1}
            color={theme === "dark" ? "#94a3b8" : "#64748b"}
            font="/fonts/Inter_Regular.json"
            anchorX="center"
            anchorY="middle"
            maxWidth={2}
            textAlign="center"
          >
            Real-time insights and performance monitoring
          </Text>
        </group>
      </Float>

      <group position={[0, -1.5, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial transparent opacity={theme === "dark" ? 0.4 : 0.1} />
        </mesh>
      </group>
    </group>
  )
}

function SecurityProduct({ theme }) {
  const group = useRef()

  return (
    <group ref={group} dispose={null} position={[0, 0, 0]}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <RoundedBox args={[3, 2, 0.2]} radius={0.1} position={[0, 0, 0]}>
          <meshStandardMaterial color={theme === "dark" ? "#1e293b" : "#f8fafc"} metalness={0.2} roughness={0.8} />
        </RoundedBox>

        <group position={[0, 0, 0.15]}>
          <ShieldIcon position={[0, 0.5, 0]} color={theme === "dark" ? "#f472b6" : "#ec4899"} />

          <Text
            position={[0, -0.2, 0]}
            fontSize={0.2}
            color={theme === "dark" ? "#f1f5f9" : "#0f172a"}
            font="/fonts/Inter_Regular.json"
            anchorX="center"
            anchorY="middle"
          >
            Security Platform
          </Text>

          <Text
            position={[0, -0.5, 0]}
            fontSize={0.1}
            color={theme === "dark" ? "#94a3b8" : "#64748b"}
            font="/fonts/Inter_Regular.json"
            anchorX="center"
            anchorY="middle"
            maxWidth={2}
            textAlign="center"
          >
            Advanced threat detection and prevention
          </Text>
        </group>
      </Float>

      <group position={[0, -1.5, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial transparent opacity={theme === "dark" ? 0.4 : 0.1} />
        </mesh>
      </group>
    </group>
  )
}

function CloudIcon({ position, color }) {
  const mesh = useRef(null)

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.z = Math.sin(t / 4) / 8
  })

  return (
    <group position={position}>
      <mesh ref={mesh}>
        <torusGeometry args={[0.3, 0.1, 16, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0, -0.2, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0.25, -0.1, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[-0.25, -0.1, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  )
}

function AnalyticsIcon({ position, color }) {
  const mesh = useRef(null)

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.z = Math.sin(t / 4) / 8
  })

  return (
    <group position={position} ref={mesh}>
      <mesh position={[-0.3, -0.1, 0]}>
        <boxGeometry args={[0.1, 0.2, 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[-0.1, 0, 0]}>
        <boxGeometry args={[0.1, 0.4, 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0.1, -0.15, 0]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0.3, 0.1, 0]}>
        <boxGeometry args={[0.1, 0.6, 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  )
}

function ShieldIcon({ position, color }) {
  const mesh = useRef(null)

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.z = Math.sin(t / 4) / 8
  })

  return (
    <group position={position} ref={mesh}>
      <mesh>
        <cylinderGeometry args={[0.3, 0.5, 0.7, 32, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color={color} side={2} />
      </mesh>

      <mesh position={[0, 0, 0.05]}>
        <torusGeometry args={[0.15, 0.03, 16, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0, 0, 0.05]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.3, 0.05, 0.02]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  )
}
