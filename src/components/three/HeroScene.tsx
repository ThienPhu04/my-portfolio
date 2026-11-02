import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import type { Group } from 'three'

function OrbitalObject() {
  const group = useRef<Group>(null)
  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.16
    group.current.rotation.x = state.pointer.y * 0.14
  })
  return <group ref={group}><Float speed={1.2} rotationIntensity={0.32} floatIntensity={0.62}><mesh><icosahedronGeometry args={[1.35, 4]} /><MeshDistortMaterial color="#e8e4da" roughness={0.2} metalness={0.8} distort={0.22} speed={1} /></mesh><mesh rotation={[1.2, 0.4, 0.3]} scale={1.85}><torusGeometry args={[1, 0.012, 12, 80]} /><meshBasicMaterial color="#d9ff36" transparent opacity={0.92} /></mesh><mesh rotation={[-0.8, 1.1, 0.5]} scale={1.52}><torusGeometry args={[1, 0.01, 12, 80]} /><meshBasicMaterial color="#d9ff36" transparent opacity={0.5} /></mesh></Float><Sparkles count={30} scale={4.8} size={1.45} speed={0.18} color="#d9ff36" /></group>
}

export function HeroScene() {
  return <div className="orbital" aria-hidden="true"><Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}><ambientLight intensity={0.6} /><directionalLight position={[3, 2, 3]} intensity={2.4} color="#e8e4da" /><pointLight position={[-3, -2, 2]} intensity={7} color="#d9ff36" distance={8} /><OrbitalObject /></Canvas><span className="orb-label top">SYSTEM / 01</span><span className="orb-label bottom">INTERFACE + INFRASTRUCTURE</span></div>
}
