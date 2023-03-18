import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import {
  Sky,
  Stars,
  Cloud,
  useGLTF,
  Float,
  Environment,
  SpotLight,
} from '@react-three/drei';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <Canvas
    shadows
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [2.5, 4, 6],
    }}
  >
    <Sky sunPosition={[-1, 0.1, 1]} />
    <Environment preset='park' />
    <Experience />
  </Canvas>
);
