import {
  OrbitControls,
  Stars,
  Sky,
  Environment,
  Cloud,
} from '@react-three/drei';
import { Physics, Debug } from '@react-three/rapier';
import { Level } from './Level.jsx';
import Lights from './Lights.jsx';

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />
      <mesh>
        <Cloud
          opacity={0.4}
          speed={0.07} // Rotation speed
          width={16} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={40} // Number of particles
        />
        <Stars count={5000} depth={0} />
        <Sky sunPosition={[-2, 0, 2]} />
        <Environment preset='night' />
      </mesh>
      <Physics>
        <Debug />
        <Lights />
        <Level />
      </Physics>
    </>
  );
}
