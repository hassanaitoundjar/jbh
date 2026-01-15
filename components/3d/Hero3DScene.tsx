'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Simplified Glass Cube - reduced transmission quality
function ArchitecturalCube({ position, scale = 1, speed = 1 }: { position: [number, number, number], scale?: number, speed?: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 * speed) * 0.1;
            meshRef.current.rotation.y += 0.003 * speed;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <boxGeometry args={[1, 1, 1]} />
                <MeshTransmissionMaterial
                    backside
                    samples={4}
                    resolution={256}
                    transmission={0.9}
                    roughness={0.2}
                    thickness={0.3}
                    chromaticAberration={0.3}
                    color="#ffffff"
                />
            </mesh>
        </Float>
    );
}

// Simplified Wireframe - single object instead of group
function WireframeBuilding({ position, scale = 1 }: { position: [number, number, number], scale?: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <mesh ref={meshRef} position={position} scale={scale}>
            <boxGeometry args={[1.5, 4, 1.5]} />
            <meshBasicMaterial color="#ffffff" wireframe opacity={0.5} transparent />
        </mesh>
    );
}

// Simple metallic sphere instead of expensive glass
function MetallicSphere({ position, scale = 1 }: { position: [number, number, number], scale?: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
        }
    });

    return (
        <mesh ref={meshRef} position={position} scale={scale}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
                color="#ffffff"
                metalness={0.9}
                roughness={0.1}
                emissive="#ffffff"
                emissiveIntensity={0.05}
            />
        </mesh>
    );
}

// Reduced particle count
function ParticleField() {
    const count = 80; // Reduced from 200
    const mesh = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#ffffff"
                transparent
                opacity={0.4}
                sizeAttenuation
            />
        </points>
    );
}

// Simplified grid
function GridFloor() {
    return (
        <group position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <gridHelper args={[30, 20, '#ffffff', '#333333']} rotation={[Math.PI / 2, 0, 0]} />
        </group>
    );
}

// Subtle camera movement
function CameraRig() {
    const { camera } = useThree();

    useFrame((state) => {
        camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.3;
        camera.position.y = 0.5 + Math.sin(state.clock.elapsedTime * 0.15) * 0.2;
        camera.lookAt(0, 0, 0);
    });

    return null;
}

// Main Scene - fewer objects, simpler lighting
function Scene() {
    return (
        <>
            {/* Simplified lighting - removed environment and some lights */}
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ffffff" />

            {/* Reduced number of objects */}
            <ArchitecturalCube position={[3, 1, -2]} scale={1.2} speed={0.8} />
            <ArchitecturalCube position={[-3, -1, -3]} scale={0.8} speed={1.2} />

            <WireframeBuilding position={[5, 0, -4]} scale={0.8} />
            <WireframeBuilding position={[-4, 0, -6]} scale={0.6} />

            <MetallicSphere position={[-2, 2, -3]} scale={0.5} />
            <MetallicSphere position={[4, -1, -2]} scale={0.3} />

            <ParticleField />
            <GridFloor />

            <CameraRig />
        </>
    );
}

// Main Component with performance settings
export function Hero3DScene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance"
                }}
                dpr={[1, 1.5]} // Reduced from [1, 2]
                performance={{ min: 0.5 }} // Enable automatic performance scaling
            >
                <Scene />
            </Canvas>
        </div>
    );
}

export default Hero3DScene;