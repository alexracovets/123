import { Canvas } from "@react-three/fiber";

import Annotations from './Annotations/Annotations';
import Building from "./Models/Building/Building";
import Controls from './Controls/Controls';
import Panorama from './Panorama/Panorama';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function CanvasWrapper() {
    return (
        <Canvas
            dpr={window.devicePixelRatio}
            gl={{ preserveDrawingBuffer: true }}
            camera={{ fov: 90, near: 0.1, far: 1000 }}
        >
            <directionalLight position={[0, 5, 5]} intensity={1} />
            <ambientLight intensity={3} />
            <Controls />
            <Annotations />
            <Building />
            <Panorama />
            <EffectComposer>
                <Bloom luminanceThreshold={0.9} luminanceSmoothing={0.5} intensity={0.5} />
            </EffectComposer>
        </Canvas>
    )
}