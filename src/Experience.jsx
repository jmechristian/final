import {
  OrbitControls,
  Stars,
  Sky,
  Environment,
  Cloud,
} from '@react-three/drei';
import useGame from './stores/useGame';
import { Physics, Debug } from '@react-three/rapier';
import { Level } from './Level.jsx';
import Lights from './Lights.jsx';
import Player from './Player.jsx';
import Effects from './Effects';

export default function Experience() {
  const blocksCount = useGame((state) => {
    return state.blocksCount;
  });

  const blocksSeed = useGame((state) => {
    return state.blocksSeed;
  });

  return (
    <>
      <color args={['#bdedfc']} attach='background' />

      {/* <Cloud
        opacity={0.4}
        speed={0.07} // Rotation speed
        width={20} // Width of the full cloud
        depth={2.5} // Z-dir depth
        segments={40} // Number of particles
      /> */}
      <Stars count={5000} depth={4} fade speed={1} factor={4} radius={50} />
      <Sky distance={150000} sunPosition={[1, 0, 0]} />
      <Effects />
      <Physics>
        <Lights />
        <Player />
        <Level count={blocksCount} seed={blocksSeed} />
      </Physics>
    </>
  );
}
