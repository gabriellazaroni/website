import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Cube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.02;
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.x += 0.02;
      edgesRef.current.rotation.y += 0.02;
    }
  });

  return (
    <>
      {/* Cubo interno sólido */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[4, 4, 4]} />
        <meshStandardMaterial color="#000" />
      </mesh>

      {/* Cubo externo apenas com bordas */}
      <lineSegments ref={edgesRef}>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(4.5, 4.5, 4.5)]} />
        <lineBasicMaterial attach="material" color="#c1c1c1" linewidth={2} />
      </lineSegments>
    </>
  );
};

export const LargeRotatingCube = () => {
  return (
    <Canvas
      style={{ width: "360px", height: "360px" }}
      camera={{ position: [6, 6, 6] }} // Afastamos um pouco a câmera para melhor visualização
    >
      {/* Iluminação ambiente para garantir que os cubos sejam visíveis */}
      <ambientLight intensity={1} />
      {/* Luz direcional para destacar a cor do cubo */}
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Cube />
    </Canvas>
  );
};
