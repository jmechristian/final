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
import Player from './Player.jsx';

export default function Experience() {
  return (
    <>
      <Cloud
        opacity={0.4}
        speed={0.07} // Rotation speed
        width={20} // Width of the full cloud
        depth={1.5} // Z-dir depth
        segments={40} // Number of particles
      />
      <Stars count={5000} depth={0} fade speed={1} factor={4} radius={40} />
      <Sky sunPosition={[-2, -0.5, 2]} />
      <Environment preset='night' />
      <Physics>
        <Lights />
        <Player />
        <Level />
      </Physics>
    </>
  );
}
