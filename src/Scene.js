import { extend } from '@react-three/fiber';
import { useRef } from 'react';
//
import { TextureLoader, InstancedMesh, Object3D} from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
// orbit controls
import {OrbitControls} from '@react-three/drei';

// import json of cities and towns
import USA from './Country-Cities-Towns/USA';




  //lets make our own orbit control declarative element so we use extend function from fiber
extend({OrbitControls, InstancedMesh, Object3D});




function App() {
  const sphereRef = useRef();
  const cloudRef = useRef();

  useFrame((state, delta) => {
    sphereRef.current.rotation.y += delta * 0.05;
    cloudRef.current.rotation.y += delta * 0.052;
  });
  const earth_map =  {
    clouds: useLoader(TextureLoader, './textures/earth_clouds.jpg'),
    maper: useLoader(TextureLoader,'./textures/earth_daymap.jpg'),
    displacemanet: useLoader(TextureLoader,'./textures/earth_displacement.jpg')
  };


  return (
    <>
      <OrbitControls enableZoom={false}/>
      <group ref={sphereRef}>
        <mesh position={[0,0,0]} scale={.15} rotation={[0,0,0]}>
          <sphereGeometry args={[15,32,16]} />
          <meshStandardMaterial 
          map={earth_map.maper} 
          displacementMap={earth_map.displacemanet}
          displacementScale={0.3}
          />
        </mesh>
        {/* US cities and towns */}
        <USA />
      </group>
      <mesh ref={cloudRef} position={[0,0,0]} scale={.155}>
        <sphereGeometry args={[15,32,16]} />
        <meshStandardMaterial 
        alphaMap={earth_map.clouds} 
        displacementScale={0.3}
         transparent={true}
         opacity={0.7}
         />
       </mesh>

    </>
  );
}

export default App;
