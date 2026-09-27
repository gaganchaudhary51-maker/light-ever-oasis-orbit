import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";
import * as THREE from "three";

export type CameraMode = "day" | "night" | "drone";

function Window({
  position,
  rotation = [0, 0, 0],
  size = [0.7, 1.1, 0.06],
  night,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  size?: [number, number, number];
  night: boolean;
}) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={night ? "#f0d48a" : "#7a8aa0"}
        emissive={night ? "#f0d48a" : "#1a1a18"}
        emissiveIntensity={night ? 2.4 : 0.15}
        roughness={0.2}
        metalness={0.1}
      />
    </mesh>
  );
}

function Tree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.45, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.16, 0.9, 8]} />
        <meshStandardMaterial color="#3a2a1c" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.25, 0]} castShadow>
        <coneGeometry args={[0.7, 1.4, 8]} />
        <meshStandardMaterial color="#1c2a1e" roughness={0.85} />
      </mesh>
      <mesh position={[0, 1.85, 0]} castShadow>
        <coneGeometry args={[0.5, 1, 8]} />
        <meshStandardMaterial color="#243528" roughness={0.85} />
      </mesh>
    </group>
  );
}

function GoldMat({ night = false }: { night?: boolean }) {
  return (
    <meshStandardMaterial
      color="#c9a56a"
      metalness={0.82}
      roughness={0.28}
      emissive="#c9a56a"
      emissiveIntensity={night ? 0.25 : 0.08}
    />
  );
}

function StoneMat() {
  return <meshStandardMaterial color="#d8ccb4" roughness={0.72} metalness={0.08} />;
}

function DarkMat() {
  return <meshStandardMaterial color="#161310" roughness={0.35} metalness={0.45} />;
}

function Villa({ night }: { night: boolean }) {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[18, 48]} />
        <meshStandardMaterial color="#0c0b0a" roughness={0.9} metalness={0.2} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 3.6]} receiveShadow>
        <planeGeometry args={[3.2, 8]} />
        <meshStandardMaterial color="#1a1713" roughness={0.25} metalness={0.55} />
      </mesh>
      <mesh position={[0, 0.18, 0.2]} receiveShadow castShadow>
        <boxGeometry args={[9.6, 0.36, 7.4]} />
        <DarkMat />
      </mesh>
      <mesh position={[0, 2.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[8.2, 3.4, 6.2]} />
        <StoneMat />
      </mesh>
      <mesh position={[0, 4.35, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[5.6, 1.9, 4]} />
        <GoldMat night={night} />
      </mesh>
      <mesh position={[0, 5.45, 0]} rotation={[0, Math.PI / 4, 0]}>
        <octahedronGeometry args={[0.22, 0]} />
        <meshStandardMaterial
          color="#e8d5a3"
          emissive="#c9a56a"
          emissiveIntensity={night ? 1.4 : 0.4}
          metalness={1}
          roughness={0.15}
        />
      </mesh>
      <mesh position={[-2.6, 1.05, 3.18]} castShadow>
        <cylinderGeometry args={[0.18, 0.18, 2.1, 12]} />
        <GoldMat night={night} />
      </mesh>
      <mesh position={[2.6, 1.05, 3.18]} castShadow>
        <cylinderGeometry args={[0.18, 0.18, 2.1, 12]} />
        <GoldMat night={night} />
      </mesh>
      <mesh position={[0, 1.15, 3.16]}>
        <boxGeometry args={[1.2, 2.1, 0.12]} />
        <meshStandardMaterial color="#2a2118" roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[0, 2.35, 3.22]}>
        <boxGeometry args={[1.35, 0.08, 0.16]} />
        <GoldMat night={night} />
      </mesh>

      <Window position={[-2.3, 2.15, 3.14]} night={night} />
      <Window position={[2.3, 2.15, 3.14]} night={night} />
      <Window position={[-2.3, 2.15, -3.14]} night={night} />
      <Window position={[2.3, 2.15, -3.14]} night={night} />
      <Window position={[4.14, 2.15, -1.2]} rotation={[0, Math.PI / 2, 0]} night={night} />
      <Window position={[4.14, 2.15, 1.2]} rotation={[0, Math.PI / 2, 0]} night={night} />
      <Window position={[-4.14, 2.15, -1.2]} rotation={[0, Math.PI / 2, 0]} night={night} />
      <Window position={[-4.14, 2.15, 1.2]} rotation={[0, Math.PI / 2, 0]} night={night} />

      <mesh position={[0, 0.08, 6.6]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[5.2, 3.4]} />
        <meshStandardMaterial
          color={night ? "#0d1a24" : "#1a3344"}
          metalness={0.85}
          roughness={0.12}
          emissive={night ? "#0a2030" : "#000000"}
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh position={[0, 0.16, 4.95]}>
        <boxGeometry args={[5.3, 0.12, 0.16]} />
        <GoldMat night={night} />
      </mesh>

      <Tree position={[-6.4, 0, 4.2]} />
      <Tree position={[6.6, 0, 3.8]} />
      <Tree position={[-7.2, 0, -2.4]} />
      <Tree position={[7.4, 0, -1.6]} />
    </group>
  );
}


function GoldLights({ night }: { night: boolean }) {
  return (
    <>
      <ambientLight intensity={night ? 0.18 : 0.55} color={night ? "#1a140c" : "#c9d4e0"} />
      <hemisphereLight
        color={night ? "#1b2230" : "#8aa0b8"}
        groundColor={night ? "#0a0806" : "#3a3228"}
        intensity={night ? 0.35 : 0.7}
      />
      <directionalLight
        position={night ? [6, 10, 4] : [8, 14, 6]}
        intensity={night ? 0.55 : 1.35}
        color={night ? "#c9a56a" : "#fff6e8"}
      />
      <pointLight position={[0, 3.2, 4]} intensity={night ? 3.2 : 0.6} color="#e8c97a" distance={12} />
      <pointLight position={[0, 6, 0]} intensity={night ? 1.4 : 0.4} color="#c9a56a" distance={16} />
      <spotLight
        position={[0, 8, 8]}
        angle={0.45}
        penumbra={0.6}
        intensity={night ? 1.8 : 0.5}
        color="#e8d5a3"
      />
    </>
  );
}

function OrbitRig({ mode }: { mode: CameraMode }) {
  const group = useRef<Group>(null);
  useFrame((_, dt) => {
    const d = Math.min(dt, 0.1);
    if (!group.current) return;
    if (mode !== "drone") group.current.rotation.y += d * 0.12;
  });
  return <group ref={group} />;
}

export function HouseCanvas({ mode }: { mode: CameraMode }) {
  const night = mode !== "day";
  const isDrone = mode === "drone";

  return (
    <Canvas
      shadows={false}
      dpr={[1, 1.25]}
      camera={{
        position: isDrone ? [0, 14, 8] : [7.2, 4.1, 8.4],
        fov: isDrone ? 50 : 36,
        near: 0.1,
        far: 80,
      }}
      gl={{
        antialias: false,
        alpha: false,
        powerPreference: "low-power",
        stencil: false,
        failIfMajorPerformanceCaveat: true,
      }}
      onCreated={({ gl, scene }) => {
        gl.setClearColor(night ? "#070706" : "#1a2230", 1);
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = night ? 1.05 : 1.15;
        scene.fog = new THREE.Fog(night ? "#070706" : "#1a2230", 18, 42);
        gl.domElement.addEventListener(
          "webglcontextlost",
          (e) => {
            e.preventDefault();
          },
          false,
        );
      }}
    >
      <GoldLights night={night} />
      <Villa night={night} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={!isDrone}
        autoRotateSpeed={0.45}
        minPolarAngle={isDrone ? 0.35 : 0.85}
        maxPolarAngle={isDrone ? 0.7 : 1.25}
        target={[0, 1.6, 0]}
      />
      <OrbitRig mode={mode} />
    </Canvas>
  );
}

export default function HouseScene({ mode }: { mode: CameraMode }) {
  return <HouseCanvas mode={mode} />;
}
