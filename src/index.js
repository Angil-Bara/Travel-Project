import { React, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Scene from './Scene';
import { Canvas } from '@react-three/fiber';
import './Styles/App.css'
import Loading from './Loading';
import Locations from './Locations';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Suspense fallback={<Loading/>}>
    <div className='holder'>
      <div className='Item'> <Locations /></div>
 
      <div className='App'>

          <Canvas>
            <ambientLight intensity={5} />
            <directionalLight position={[0, 0, 5]} />
              <Scene />
          </Canvas>

      </div>
      </div>
    </Suspense>
  </>

);
