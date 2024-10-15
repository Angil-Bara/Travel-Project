import {useRef, useEffect} from 'react';
import { extend } from '@react-three/fiber';
//
import { Object3D } from 'three';
import cities from './JSON-information/us.cities.json' // the united states

// import calculations
import * as Calculate from '../Spherical';

extend({Object3D});

function USA(){
    const instancedMeshRef = useRef();

    // Extract coordinates of U.S cities from JSON
    const cityCount = cities.length;

    useEffect(() => {
      const tempObject = new Object3D();
  
      cities.forEach((city, idx) => {
        const [lon, lat] = city.location;  // Extract lat, lon
        const [x, y, z] = Calculate.calculatePosition(lat, lon, 15*.15);  // Convert to 3D coords
        tempObject.position.set(x, y, z);
        // Calculate rotation to make the cylinder point outward
        const [xRot, yRot, zRot] = Calculate.calculateRotation(lat, lon);
        tempObject.lookAt(xRot, yRot, zRot);  // Rotate so the cylinder points outward
        // Scale cylinder to extend outward from the globe (adjust height if needed)
        //tempObject.scale.set(1, .5, 1);  // Adjust sphere thickness and height
        tempObject.updateMatrix();
        instancedMeshRef.current.setMatrixAt(idx, tempObject.matrix);  // Set position
      });
  
      instancedMeshRef.current.instanceMatrix.needsUpdate = true;  // Flag for update
    });  // Only run once after initial rendering

    return(
        <>
            {/* White Spheres using InstancedMesh */}
            <instancedMesh ref={instancedMeshRef} args={[null, null, cityCount]}>
                <sphereGeometry args={[0.005, 8, 8]} />
                <meshBasicMaterial color={'red'} />
            </instancedMesh>
        </>
    );
}

export default USA;