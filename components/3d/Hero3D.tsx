'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Edges, Float, Instance, Instances, Stars } from '@react-three/drei';
import * as THREE from 'three';

// --- CONSTANTS ---
const BLUEPRINT_COLOR = '#4db8ff'; // Light cyan/blue for lines
const BG_COLOR = '#001e36'; // Deep blue for blueprint paper
const SECONDARY_COLOR = '#1f4068'; // Darker blue for fills (optional)

// --- COMPONENTS ---

// 1. Procedural Building
function Building({ position, scale = [1, 1, 1], floors = 5, delay = 0 }: { position: [number, number, number], scale?: [number, number, number], floors?: number, delay?: number }) {
    const groupRef = useRef<THREE.Group>(null);

    // Animate building growth
    useFrame((state) => {
        if (groupRef.current) {
            const t = state.clock.elapsedTime - delay;
            if (t > 0) {
                // Simple ease-out scale Y
                const s = Math.min(1, Math.max(0, t));
                // Restore correct Y scale relative to the prop passed
                groupRef.current.scale.y = s * (scale ? scale[1] : 1);
            } else {
                groupRef.current.scale.y = 0;
            }
        }
    });

    return (
        <group ref={groupRef} position={position} scale={scale}>
            {/* Main structure */}
            <mesh position={[0, floors / 2, 0]}>
                <boxGeometry args={[1, floors, 1]} />
                <meshBasicMaterial color={SECONDARY_COLOR} transparent opacity={0.1} />
                <Edges color={BLUEPRINT_COLOR} threshold={15} />
            </mesh>

            {/* Floor lines details */}
            {Array.from({ length: floors }).map((_, i) => (
                <mesh key={i} position={[0, i + 0.5, 0]}>
                    <boxGeometry args={[1.02, 0.05, 1.02]} />
                    <meshBasicMaterial color={BLUEPRINT_COLOR} transparent opacity={0.3} />
                </mesh>
            ))}

            {/* Roof details */}
            <mesh position={[0, floors + 0.25, 0]}>
                <boxGeometry args={[0.8, 0.5, 0.8]} />
                <meshBasicMaterial color={SECONDARY_COLOR} transparent opacity={0.1} />
                <Edges color={BLUEPRINT_COLOR} />
            </mesh>
            <mesh position={[0.3, floors + 0.6, 0.3]}>
                <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
                <meshBasicMaterial color={BLUEPRINT_COLOR} />
            </mesh>
        </group>
    );
}

// 2. Construction Crane
// 2. Construction Crane
function Crane({ position, rotation = [0, 0, 0], scale = 1, delay = 0 }: { position: [number, number, number], rotation?: [number, number, number], scale?: number, delay?: number }) {
    const groupRef = useRef<THREE.Group>(null);
    const jibRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        const t = state.clock.elapsedTime - delay;

        // Growth animation
        if (groupRef.current) {
            if (t > 0) {
                const s = Math.min(1, Math.max(0, t));
                // Scale is a single number for Crane
                const targetScale = s * scale;
                groupRef.current.scale.set(targetScale, targetScale, targetScale);
            } else {
                groupRef.current.scale.set(0, 0, 0);
            }
        }

        if (jibRef.current) {
            // Slowly rotate the jib
            jibRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3 + 0.5;
        }
    });

    return (
        <group ref={groupRef} position={position} rotation={rotation as any} scale={scale}>
            {/* TOWER */}
            <group position={[0, 4, 0]}>
                <mesh>
                    <boxGeometry args={[0.5, 8, 0.5]} />
                    <meshBasicMaterial color={SECONDARY_COLOR} transparent opacity={0.1} />
                    <Edges color={BLUEPRINT_COLOR} />
                </mesh>
                {/* Cross bracing illusion (simplified) */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.4, 8, 0.4]} />
                    <meshBasicMaterial color={BLUEPRINT_COLOR} wireframe wireframeLinewidth={1} transparent opacity={0.2} />
                </mesh>
            </group>

            {/* JIB & COUNTER JIB GROUP (Rotates) */}
            <group ref={jibRef} position={[0, 8, 0]}>
                {/* CABIN */}
                <mesh position={[0.5, 0.5, 0]}>
                    <boxGeometry args={[0.8, 0.8, 0.6]} />
                    <meshBasicMaterial color={SECONDARY_COLOR} transparent opacity={0.2} />
                    <Edges color={BLUEPRINT_COLOR} />
                </mesh>

                {/* JIB (Long Arm) */}
                <mesh position={[4, 0.5, 0]}>
                    <boxGeometry args={[8, 0.4, 0.4]} />
                    <meshBasicMaterial color={SECONDARY_COLOR} transparent opacity={0.1} />
                    <Edges color={BLUEPRINT_COLOR} />
                </mesh>
                {/* Jib strings/cables topology */}
                <mesh position={[4, 1, 0]} rotation={[0, 0, -Math.PI / 2]}>
                    <coneGeometry args={[0.1, 8, 2]} />
                    <meshBasicMaterial color={BLUEPRINT_COLOR} wireframe opacity={0.3} transparent />
                </mesh>


                {/* COUNTER JIB (Short Arm) */}
                <mesh position={[-1.5, 0.5, 0]}>
                    <boxGeometry args={[3, 0.4, 0.4]} />
                    <meshBasicMaterial color={SECONDARY_COLOR} transparent opacity={0.1} />
                    <Edges color={BLUEPRINT_COLOR} />
                </mesh>
                {/* Counterweights */}
                <mesh position={[-2, -0.2, 0]}>
                    <boxGeometry args={[1, 0.8, 0.6]} />
                    <meshBasicMaterial color={BLUEPRINT_COLOR} wireframe opacity={0.5} transparent />
                </mesh>

                {/* HOOK LINE */}
                <group position={[6, 0, 0]}>
                    <mesh position={[0, -2, 0]}>
                        <cylinderGeometry args={[0.02, 0.02, 4]} />
                        <meshBasicMaterial color={BLUEPRINT_COLOR} />
                    </mesh>
                    <mesh position={[0, -4.2, 0]}>
                        <boxGeometry args={[0.5, 0.5, 0.5]} />
                        <meshBasicMaterial color={SECONDARY_COLOR} transparent opacity={0.2} />
                        <Edges color={BLUEPRINT_COLOR} />
                    </mesh>
                </group>
            </group>
        </group>
    );
}

// 3. Grid Floor
function BlueprintGrid() {
    return (
        <group position={[0, -0.1, 0]}>
            <gridHelper args={[60, 60, BLUEPRINT_COLOR, '#1a3a5a']} />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
                <planeGeometry args={[60, 60]} />
                <meshBasicMaterial color={BG_COLOR} transparent opacity={0.9} />
            </mesh>
        </group>
    );
}

// 4. Background Particles (Dust/Points)
function BlueprintParticles() {
    return (
        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
    )
}

// 5. Camera Rig
function CameraRig() {
    useFrame((state) => {
        // Slow subtle movement
        state.camera.position.x = 10 + Math.sin(state.clock.elapsedTime * 0.05) * 5;
        state.camera.position.z = 15 + Math.cos(state.clock.elapsedTime * 0.05) * 5;
        state.camera.lookAt(0, 4, 0);
    });
    return null;
}

// Main Scene Logic
function Scene() {
    return (
        <>
            <color attach="background" args={[BG_COLOR]} />
            <fog attach="fog" args={[BG_COLOR, 10, 50]} /> // Fade to blue distance

            <BlueprintGrid />
            <BlueprintParticles />

            <group position={[0, 0, 0]}>
                {/* Cluster of buildings */}
                <Building position={[-2, 0, 2]} floors={6} delay={0.2} />
                <Building position={[2, 0, 5]} floors={4} delay={0.5} />
                <Building position={[-5, 0, -2]} floors={8} delay={0.8} />
                <Building position={[0, 0, -5]} floors={10} scale={[1.5, 1, 1.5]} delay={1.0} />
                <Building position={[5, 0, 0]} floors={7} delay={1.2} />
                <Building position={[6, 0, 6]} floors={5} delay={1.5} />
                <Building position={[-6, 0, 5]} floors={3} delay={1.8} />

                {/* Cranes overlooking the site */}
                <Crane position={[3, 0, -3]} scale={0.8} rotation={[0, -0.5, 0]} delay={2.0} />
                <Crane position={[-4, 0, 4]} scale={0.6} rotation={[0, 2, 0]} delay={2.5} />
            </group>

            <CameraRig />
        </>
    );
}

export function Hero3DScene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [15, 10, 15], fov: 35 }}
                dpr={[1, 2]}
                gl={{ antialias: true }}
            >
                <Scene />
            </Canvas>
        </div>
    );
}
