import { useGLTF, Circle, Sphere } from "@react-three/drei";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import * as THREE from 'three';

import { setLoaderStatus } from '../../../../store/reducers/stateLoader';

export default function Building() {
    const { nodes, materials } = useGLTF('models/main/untitled.gltf');
    const isPanorama = useSelector((state) => state.statePanorama.isActive);
    const [material, setMaterial] = useState();
    const dispatch = useDispatch();

    const textureLoader = new THREE.TextureLoader();

    const getMaterial = () => {
        const material = new THREE.MeshStandardMaterial({
            map: textureLoader.load('material/grass/color.jpeg'),
            metalnessMap: textureLoader.load('material/grass/roughness.png')
        })
        material.map.wrapS = THREE.RepeatWrapping;
        material.map.wrapT = THREE.RepeatWrapping;
        material.map.repeat.y = 120;
        material.map.repeat.x = 120;

        material.metalnessMap.wrapS = THREE.RepeatWrapping;
        material.metalnessMap.wrapT = THREE.RepeatWrapping;
        material.metalnessMap.repeat.y = 100;
        material.metalnessMap.repeat.x = 100;

        return setMaterial(material)
    }

    useEffect(() => {
        getMaterial()
    }, [])

    useEffect(() => {
        if (nodes && materials && material) {
            dispatch(setLoaderStatus(true))
        }
    }, [nodes, materials, material])

    return (
        <>
            <group visible={!isPanorama} dispose={null}>
                <group position={[-35.5, 3.335, 61.658]} rotation={[-1.571, 0, 2.83]} scale={0.0009}>
                    <group position={[-0.017, -0.027, 0.001]} rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[0.002, 0.002, -0.014]}>
                            <group position={[6648.28, 0, -2197.94]} rotation={[-Math.PI / 2, 0, -1.257]}>
                                <mesh geometry={nodes.SUV_Body_Body_0002.geometry} material={materials['Body_7.007']} position={[-0.027, -0.011, 0.001]} />
                                <mesh geometry={nodes.SUV_Body_Glass_0002.geometry} material={materials['Glass_7.007']} position={[-0.027, -0.011, 0.001]} />
                                <mesh geometry={nodes.SUV_Body_Optics_0002.geometry} material={materials['Optics_7.007']} position={[-0.027, -0.011, 0.001]} />
                            </group>
                            <group position={[5335.805, 420.306, -914.846]} rotation={[-Math.PI / 2, 0, -1.257]}>
                                <mesh geometry={nodes.Wheel_E_Wheel_0003.geometry} material={materials['Wheel_6.007']} position={[-0.015, -0.021, 0.003]} />
                            </group>
                            <group position={[8257.938, 420.307, -1864.575]} rotation={[-Math.PI / 2, 0, -1.257]}>
                                <mesh geometry={nodes.Wheel_E001_Wheel_0003.geometry} material={materials['Wheel_6.007']} position={[-0.007, -0.03, 0.001]} />
                            </group>
                            <group position={[4832.254, 420.307, -2464.225]} rotation={[-Math.PI / 2, 0, -1.257]}>
                                <mesh geometry={nodes.Wheel_E002_Wheel_0003.geometry} material={materials['Wheel_6.007']} position={[0.012, -0.029, 0]} />
                            </group>
                            <group position={[7754.379, 420.307, -3413.948]} rotation={[-Math.PI / 2, 0, -1.257]}>
                                <mesh geometry={nodes.Wheel_E003_Wheel_0003.geometry} material={materials['Wheel_6.007']} position={[0.028, -0.023, 0.002]} />
                            </group>
                        </group>
                    </group>
                </group>
                <group position={[-35.5, 3.161, 64.826]} rotation={[-1.555, 0.044, -0.347]} scale={0.0009}>
                    <group position={[-0.025, -0.008, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[-0.006, 0, -0.006]}>
                            <group position={[-6854.237, -0.002, 2224.777]} rotation={[-Math.PI / 2, 0, 0]}>
                                <mesh geometry={nodes.Coupe_Body_Body_0002.geometry} material={materials['Body_0.007']} position={[0.005, -0.025, 0.001]} />
                                <mesh geometry={nodes.Coupe_Body_Glass_0002.geometry} material={materials['Glass_0.007']} position={[0.005, -0.025, 0.001]} />
                                <mesh geometry={nodes.Coupe_Body_Optics_0002.geometry} material={materials['Optics_0.007']} position={[0.005, -0.025, 0.001]} />
                            </group>
                            <group position={[-5788.827, 335.429, 1102.419]} rotation={[-Math.PI / 2, 0, 1.879]}>
                                <mesh geometry={nodes.Wheel_F_Wheel_0002.geometry} material={materials['Wheel_0.007']} position={[0.011, 0.029, 0]} />
                            </group>
                            <group position={[-8375.637, 335.428, 1926.777]} rotation={[-Math.PI / 2, 0, 1.879]}>
                                <mesh geometry={nodes.Wheel_F001_Wheel_0002.geometry} material={materials['Wheel_0.007']} position={[0, 0.017, 0]} />
                            </group>
                            <group position={[-5335.876, 335.428, 2523.723]} rotation={[-Math.PI / 2, 0, 1.879]}>
                                <mesh geometry={nodes.Wheel_F002_Wheel_0002.geometry} material={materials['Wheel_0.007']} position={[-0.018, 0.01, 0.001]} />
                            </group>
                            <group position={[-7922.682, 335.429, 3348.099]} rotation={[-Math.PI / 2, 0, 1.879]}>
                                <mesh geometry={nodes.Wheel_F003_Wheel_0002.geometry} material={materials['Wheel_0.007']} position={[-0.022, 0.013, 0.001]} />
                            </group>
                        </group>
                    </group>
                </group>
                <group position={[-35.5, 3.132, 52.142]} rotation={[-1.571, 0, 2.83]} scale={0.0009}>
                    <group position={[-0.007, -0.008, 0.002]} rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[-0.003, 0, 0.026]}>
                            <group position={[6648.296, 0, -2197.884]} rotation={[-Math.PI / 2, 0, -1.257]}>
                                <mesh geometry={nodes.SUV_Body_Body_0003.geometry} material={materials['Body_7.008']} position={[0.011, 0.003, -0.002]} />
                                <mesh geometry={nodes.SUV_Body_Glass_0003.geometry} material={materials['Glass_7.007']} position={[0.011, 0.003, -0.002]} />
                                <mesh geometry={nodes.SUV_Body_Optics_0003.geometry} material={materials['Optics_7.007']} position={[0.011, 0.003, -0.002]} />
                            </group>
                            <group position={[5335.823, 420.306, -914.79]} rotation={[-Math.PI / 2, 0, -1.257]}>
                                <mesh geometry={nodes.Wheel_E_Wheel_0004.geometry} material={materials['Wheel_6.007']} position={[-0.001, -0.007, 0]} />
                            </group>
                            <group position={[8257.966, 420.307, -1864.513]} rotation={[-Math.PI / 2, 0, -1.257]}>
                                <mesh geometry={nodes.Wheel_E001_Wheel_0004.geometry} material={materials['Wheel_6.007']} position={[-0.016, -0.008, -0.001]} />
                            </group>
                            <group position={[4832.262, 420.307, -2464.165]} rotation={[-Math.PI / 2, 0, -1.257]}>
                                <mesh geometry={nodes.Wheel_E002_Wheel_0004.geometry} material={materials['Wheel_6.007']} position={[-0.012, -0.008, -0.001]} />
                            </group>
                            <group position={[7754.395, 420.307, -3413.9]} rotation={[-Math.PI / 2, 0, -1.257]}>
                                <mesh geometry={nodes.Wheel_E003_Wheel_0004.geometry} material={materials['Wheel_6.007']} position={[-0.012, -0.017, -0.001]} />
                            </group>
                        </group>
                    </group>
                </group>
                <group position={[-53.258, 2.874, 37]} rotation={[-1.579, 0.008, 0.657]} scale={0.0009}>
                    <group position={[0.048, 0.009, 0.001]} rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[-0.03, 0, 0.006]}>
                            <group position={[-4607.768, 0, 6370.583]} rotation={[-Math.PI / 2, 0, 2.501]}>
                                <mesh geometry={nodes.Compact_Body_Body_0001.geometry} material={materials['Body.004']} position={[-0.003, -0.01, 0]} />
                                <mesh geometry={nodes.Compact_Body_Glass_0001.geometry} material={materials['Glass.004']} position={[-0.003, -0.01, 0]} />
                                <mesh geometry={nodes.Compact_Body_Optics_0001.geometry} material={materials['Optics_7.007']} position={[-0.003, -0.01, 0]} />
                            </group>
                            <group position={[-4444.999, 266.157, 5122.527]} rotation={[-Math.PI / 2, 0, 2.501]}>
                                <mesh geometry={nodes.Wheel_C_Wheel_0001.geometry} material={materials['Wheel.004']} position={[-0.002, -0.008, 0.001]} />
                            </group>
                            <group position={[-5844.895, 266.157, 7002.294]} rotation={[-Math.PI / 2, 0, 2.501]}>
                                <mesh geometry={nodes.Wheel_C001_Wheel_0001.geometry} material={materials['Wheel.004']} position={[0, -0.014, 0]} />
                            </group>
                            <group position={[-4858.572, 266.158, 7736.821]} rotation={[-Math.PI / 2, 0, 2.501]}>
                                <mesh geometry={nodes.Wheel_C002_Wheel_0001.geometry} material={materials['Wheel.004']} position={[-0.016, 0.016, 0]} />
                            </group>
                            <group position={[-3458.677, 266.158, 5857.061]} rotation={[-Math.PI / 2, 0, 2.501]}>
                                <mesh geometry={nodes.Wheel_C003_Wheel_0001.geometry} material={materials['Wheel.004']} position={[0.005, 0.006, -0.001]} />
                            </group>
                        </group>
                    </group>
                </group>
                <group position={[-35.5, 2.885, 48]} rotation={[-1.555, 0.044, -0.347]} scale={0.0009}>
                    <group position={[-0.011, 0.022, -0.001]} rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[-0.013, 0, -0.004]}>
                            <group position={[-6854.236, -0.001, 2224.785]} rotation={[-Math.PI / 2, 0, 0]}>
                                <mesh geometry={nodes.Coupe_Body_Body_0003.geometry} material={materials['Body_0.008']} position={[-0.022, 0.026, 0]} />
                                <mesh geometry={nodes.Coupe_Body_Glass_0003.geometry} material={materials['Glass_0.007']} position={[-0.022, 0.026, 0]} />
                                <mesh geometry={nodes.Coupe_Body_Optics_0003.geometry} material={materials['Optics_0.007']} position={[-0.022, 0.026, 0]} />
                            </group>
                            <group position={[-5788.838, 335.43, 1102.44]} rotation={[-Math.PI / 2, 0, 1.879]}>
                                <mesh geometry={nodes.Wheel_F_Wheel_0003.geometry} material={materials['Wheel_0.007']} position={[-0.014, 0.011, 0]} />
                            </group>
                            <group position={[-8375.649, 335.43, 1926.799]} rotation={[-Math.PI / 2, 0, 1.879]}>
                                <mesh geometry={nodes.Wheel_F001_Wheel_0003.geometry} material={materials['Wheel_0.007']} position={[-0.009, 0.007, 0]} />
                            </group>
                            <group position={[-5335.892, 335.431, 2523.756]} rotation={[-Math.PI / 2, 0, 1.879]}>
                                <mesh geometry={nodes.Wheel_F002_Wheel_0003.geometry} material={materials['Wheel_0.007']} position={[0.004, 0.001, 0]} />
                            </group>
                            <group position={[-7922.685, 335.429, 3348.116]} rotation={[-Math.PI / 2, 0, 1.879]}>
                                <mesh geometry={nodes.Wheel_F003_Wheel_0003.geometry} material={materials['Wheel_0.007']} position={[0, 0.02, 0.002]} />
                            </group>
                        </group>
                    </group>
                </group>
                <group position={[-35.5, 2.885, 46]} rotation={[-1.565, 0.009, -2.25]} scale={0.0009}>
                    <group position={[0.001, 0.008, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[-0.011, 0, 0.016]}>
                            <group position={[4252.84, 0, 5758.933]} rotation={[-Math.PI / 2, 0, -2.524]}>
                                <mesh geometry={nodes.Wagon_Body_Body_0001.geometry} material={materials['Body_8.004']} position={[0.006, 0.012, 0]} />
                                <mesh geometry={nodes.Wagon_Body_Glass_0001.geometry} material={materials['Glass_7.007']} position={[0.006, 0.012, 0]} />
                                <mesh geometry={nodes.Wagon_Body_Optics_0001.geometry} material={materials['Optics_7.007']} position={[0.006, 0.012, 0]} />
                            </group>
                            <group position={[2763.47, 346.995, 5022.152]} rotation={[-Math.PI / 2, 0, -2.524]}>
                                <mesh geometry={nodes.Wheel_A_Wheel_0002.geometry} material={materials['Wheel_7.004']} position={[-0.014, 0.022, 0]} />
                            </group>
                            <group position={[4478.5, 346.996, 7438.873]} rotation={[-Math.PI / 2, 0, -2.524]}>
                                <mesh geometry={nodes.Wheel_A001_Wheel_0002.geometry} material={materials['Wheel_7.004']} position={[-0.006, 0.008, 0]} />
                            </group>
                            <group position={[4049.061, 346.996, 4109.839]} rotation={[-Math.PI / 2, 0, -2.524]}>
                                <mesh geometry={nodes.Wheel_A002_Wheel_0002.geometry} material={materials['Wheel_7.004']} position={[0.003, -0.008, 0]} />
                            </group>
                            <group position={[5764.09, 346.996, 6526.556]} rotation={[-Math.PI / 2, 0, -2.524]}>
                                <mesh geometry={nodes.Wheel_A003_Wheel_0002.geometry} material={materials['Wheel_7.004']} position={[0, 0.015, -0.001]} />
                            </group>
                        </group>
                    </group>
                </group>
                <group position={[-35.5, 3.223, 56.007]} rotation={[-1.594, -0.012, -2.8]} scale={0.0009}>
                    <group position={[-0.07, 0, 0.002]} rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[-0.004, -0.001, -0.027]}>
                            <group position={[6787.508, 0, 2173.986]} rotation={[-Math.PI / 2, 0, -1.885]}>
                                <mesh geometry={nodes.Offroad_Body_Body_0001.geometry} material={materials['Body_3.004']} position={[-0.003, 0.022, -0.001]} />
                                <mesh geometry={nodes.Offroad_Body_Glass_0001.geometry} material={materials['Glass_3.004']} position={[-0.003, 0.022, -0.001]} />
                                <mesh geometry={nodes.Offroad_Body_Optics_0001.geometry} material={materials['Optics_7.007']} position={[-0.003, 0.022, -0.001]} />
                            </group>
                            <group position={[5297.963, 402.431, 2559.582]} rotation={[-Math.PI / 2, 0, -1.885]}>
                                <mesh geometry={nodes.Wheel_G_Wheel_0001.geometry} material={materials['Wheel_2.004']} position={[0.013, -0.005, -0.001]} />
                            </group>
                            <group position={[5809.145, 402.431, 986.438]} rotation={[-Math.PI / 2, 0, -1.885]}>
                                <mesh geometry={nodes.Wheel_G001_Wheel_0002.geometry} material={materials['Wheel_2.004']} position={[0.005, -0.018, 0]} />
                            </group>
                            <group position={[7781.579, 402.431, 3366.635]} rotation={[-Math.PI / 2, 0, -1.885]}>
                                <mesh geometry={nodes.Wheel_G001_Wheel_0003.geometry} material={materials['Wheel_2.004']} position={[0.001, -0.011, -0.001]} />
                            </group>
                            <group position={[8292.765, 402.431, 1793.491]} rotation={[-Math.PI / 2, 0, -1.885]}>
                                <mesh geometry={nodes.Wheel_G002_Wheel_0001.geometry} material={materials['Wheel_2.004']} position={[-0.005, -0.018, -0.002]} />
                            </group>
                        </group>
                    </group>
                </group>
                <group position={[-35, 2.917, 50]} rotation={[-1.605, 0.047, 1.561]} scale={0.0009}>
                    <group position={[0.041, 0.005, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[-0.006, 0, -0.021]}>
                            <group position={[0.225, 0.001, -7323.683]} rotation={[-Math.PI / 2, 0, 0]}>
                                <mesh geometry={nodes.Pickup_Body_Body_0001.geometry} material={materials['Body_4.004']} position={[0.03, -0.005, 0.002]} />
                                <mesh geometry={nodes.Pickup_Body_Glass_0001.geometry} material={materials['Glass_4.004']} position={[0.03, -0.005, 0.002]} />
                                <mesh geometry={nodes.Pickup_Body_Optics_0001.geometry} material={materials['Optics_0.007']} position={[0.03, -0.005, 0.002]} />
                            </group>
                            <group position={[820.959, 422.973, -5392.75]} rotation={[-Math.PI / 2, 0, 0]}>
                                <mesh geometry={nodes.Wheel_E_Wheel_0005.geometry} material={materials['Wheel_3.004']} position={[0.014, 0.015, 0.001]} />
                            </group>
                            <group position={[820.951, 422.973, -8987.116]} rotation={[-Math.PI / 2, 0, 0]}>
                                <mesh geometry={nodes.Wheel_E001_Wheel_0005.geometry} material={materials['Wheel_3.004']} position={[0.037, 0.014, 0.001]} />
                            </group>
                            <group position={[-820.496, 422.974, -5392.743]} rotation={[-Math.PI / 2, 0, 0]}>
                                <mesh geometry={nodes.Wheel_E002_Wheel_0005.geometry} material={materials['Wheel_3.004']} position={[0.05, 0.008, 0.001]} />
                            </group>
                            <group position={[-820.497, 422.973, -8987.126]} rotation={[-Math.PI / 2, 0, 0]}>
                                <mesh geometry={nodes.Wheel_E003_Wheel_0005.geometry} material={materials['Wheel_3.004']} position={[0.042, 0.023, 0.001]} />
                            </group>
                        </group>
                    </group>
                </group>
                <group position={[-35.2, 3.085, 54.5]} rotation={[-1.575, 0.013, 0.299]} scale={0.0009}>
                    <group position={[0.033, 0.016, 0.003]} rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[-0.006, 0.001, -0.006]}>
                            <group position={[-7159.231, 0.001, -2323.699]} rotation={[-Math.PI / 2, 0, 1.248]}>
                                <mesh geometry={nodes.minivan_body_Body_0001.geometry} material={materials['Body_2.004']} position={[-0.012, 0.02, 0]} />
                                <mesh geometry={nodes.minivan_body_Glass_0001.geometry} material={materials['Glass_2.004']} position={[-0.012, 0.02, 0]} />
                                <mesh geometry={nodes.minivan_body_Optics_0001.geometry} material={materials['Optics_7.007']} position={[-0.012, 0.02, 0]} />
                            </group>
                            <group position={[-5289.166, 352.59, -2525.675]} rotation={[-Math.PI / 2, 0, 1.248]}>
                                <mesh geometry={nodes.Wheel_D_Wheel_0001.geometry} material={materials['Wheel_1.004']} position={[-0.014, -0.022, 0]} />
                            </group>
                            <group position={[-8319.574, 352.591, -3540.897]} rotation={[-Math.PI / 2, 0, 1.248]}>
                                <mesh geometry={nodes.Wheel_D001_Wheel_0001.geometry} material={materials['Wheel_1.004']} position={[-0.025, 0.004, 0]} />
                            </group>
                            <group position={[-5788.238, 352.591, -1035.988]} rotation={[-Math.PI / 2, 0, 1.248]}>
                                <mesh geometry={nodes.Wheel_D002_Wheel_0001.geometry} material={materials['Wheel_1.004']} position={[-0.001, -0.006, -0.001]} />
                            </group>
                            <group position={[-8818.641, 352.591, -2051.199]} rotation={[-Math.PI / 2, 0, 1.248]}>
                                <mesh geometry={nodes.Wheel_D003_Wheel_0001.geometry} material={materials['Wheel_1.004']} position={[-0.01, -0.011, -0.001]} />
                            </group>
                        </group>
                    </group>
                </group>
                <group position={[-35, 3.365, 66.8]} rotation={[-1.571, 0, 2.2]} scale={0.0009}>
                    <group position={[0.018, -0.013, 0.001]} rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[0.014, 0.001, -0.009]}>
                            <group position={[4524.292, 0.001, -6229.126]} rotation={[-Math.PI / 2, 0, -0.625]}>
                                <mesh geometry={nodes.Sport_body_Body_0001.geometry} material={materials['Body_6.004']} position={[0.021, 0.015, -0.001]} />
                                <mesh geometry={nodes.Sport_body_Glass_0001.geometry} material={materials['Glass_6.004']} position={[0.021, 0.015, -0.001]} />
                                <mesh geometry={nodes.Sport_body_Optics_0001.geometry} material={materials['Optics_7.007']} position={[0.021, 0.015, -0.001]} />
                            </group>
                            <group position={[4388.903, 335.267, -4707.633]} rotation={[-Math.PI / 2, 0, -0.625]}>
                                <mesh geometry={nodes.Wheel_H_Wheel_0001.geometry} material={materials['Wheel_5.004']} position={[-0.025, 0.021, 0.001]} />
                            </group>
                            <group position={[5988.56, 356.674, -6955.641]} rotation={[-Math.PI / 2, 0, -0.625]}>
                                <mesh geometry={nodes.Wheel_H001_Wheel_0001.geometry} material={materials['Wheel_5.004']} position={[0.032, -0.016, 0.001]} />
                            </group>
                            <group position={[3122.547, 335.267, -5622.204]} rotation={[-Math.PI / 2, 0, -0.625]}>
                                <mesh geometry={nodes.Wheel_H002_Wheel_0001.geometry} material={materials['Wheel_5.004']} position={[-0.015, 0.015, -0.001]} />
                            </group>
                            <group position={[4753.544, 356.674, -7847.582]} rotation={[-Math.PI / 2, 0, -0.625]}>
                                <mesh geometry={nodes.Wheel_H003_Wheel_0001.geometry} material={materials['Wheel_5.004']} position={[0.033, 0.013, -0.001]} />
                            </group>
                        </group>
                    </group>
                </group>
                <group position={[-48.66, 2.9, 36.5]} rotation={[-1.573, -0.015, 0.038]} scale={0.0009}>
                    <group position={[0.02, -0.013, -0.001]} rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[0.012, -0.001, 0.003]}>
                            <group position={[-85.068, 44.965, 7202.7]} rotation={[-Math.PI / 2, 0, Math.PI]}>
                                <mesh geometry={nodes.Sedan_Body_Body_0001.geometry} material={materials['Body_5.004']} position={[-0.029, -0.006, -0.001]} />
                                <mesh geometry={nodes.Sedan_Body_Glass_0001.geometry} material={materials['Glass_5.004']} position={[-0.029, -0.006, -0.001]} />
                                <mesh geometry={nodes.Sedan_Body_Optics_0001.geometry} material={materials['Optics_7.007']} position={[-0.029, -0.006, -0.001]} />
                            </group>
                            <group position={[-873.289, 391.96, 5713.978]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                                <mesh geometry={nodes.Wheel_A_Wheel_0003.geometry} material={materials['Wheel_4.004']} position={[-0.011, 0.004, 0.002]} />
                            </group>
                            <group position={[-869.326, 390.46, 8648.754]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                                <mesh geometry={nodes.Wheel_A001_Wheel_0003.geometry} material={materials['Wheel_4.004']} position={[-0.006, -0.032, 0]} />
                            </group>
                            <group position={[699.237, 390.458, 5698.16]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                                <mesh geometry={nodes.Wheel_A002_Wheel_0003.geometry} material={materials['Wheel_4.004']} position={[-0.006, -0.01, 0.001]} />
                            </group>
                            <group position={[699.227, 390.458, 8648.755]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                                <mesh geometry={nodes.Wheel_A003_Wheel_0003.geometry} material={materials['Wheel_4.004']} position={[-0.02, -0.016, 0]} />
                            </group>
                        </group>
                    </group>
                </group>
                <group position={[-35, 3.292, 59]} rotation={[-1.571, 0, 0.924]} scale={0.0009}>
                    <group position={[0.027, -0.017, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[-0.02, 0.001, -0.01]}>
                            <group position={[-4381.958, 0.001, -6149.036]} rotation={[-Math.PI / 2, 0, 0.611]}>
                                <mesh geometry={nodes.Hatchback_Body_Body_0001.geometry} material={materials['Body_1.004']} position={[-0.015, 0.015, -0.001]} />
                                <mesh geometry={nodes.Hatchback_Body_Glass_0001.geometry} material={materials['Glass_1.004']} position={[-0.015, 0.015, -0.001]} />
                                <mesh geometry={nodes.Hatchback_Body_Optics_0001.geometry} material={materials['Optics_7.007']} position={[-0.015, 0.015, -0.001]} />
                            </group>
                            <group position={[-2981.426, 341.881, -5508.281]} rotation={[-Math.PI / 2, 0, 0.611]}>
                                <mesh geometry={nodes.Wheel_B_Wheek_0001.geometry} material={materials['Wheek.004']} position={[-0.009, -0.013, 0.001]} />
                            </group>
                            <group position={[-4532.773, 341.881, -7723.824]} rotation={[-Math.PI / 2, 0, 0.611]}>
                                <mesh geometry={nodes.Wheel_B001_Wheek_0001.geometry} material={materials['Wheek.004']} position={[-0.022, -0.006, 0]} />
                            </group>
                            <group position={[-4256.52, 341.881, -4615.457]} rotation={[-Math.PI / 2, 0, 0.611]}>
                                <mesh geometry={nodes.Wheel_B002_Wheek_0001.geometry} material={materials['Wheek.004']} position={[-0.019, 0.001, 0.002]} />
                            </group>
                            <group position={[-5807.859, 341.881, -6830.996]} rotation={[-Math.PI / 2, 0, 0.611]}>
                                <mesh geometry={nodes.Wheel_B003_Wheek_0001.geometry} material={materials['Wheek.004']} position={[-0.016, -0.006, 0.001]} />
                            </group>
                        </group>
                    </group>
                </group>
                <group position={[0, 13.633, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={24.698}>
                    <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                        <group scale={0.977}>
                            <group position={[-173.33, -12.679, 69.547]} rotation={[-Math.PI / 2, 0, 0]} scale={0.035}>
                                <mesh geometry={nodes.Plane_003_Environment_2_0_blinn2_0001.geometry} material={materials.Panel} position={[4927.182, 2137.192, -281.724]} rotation={[0.005, 0.003, -0.001]} scale={1.026} />
                                <mesh geometry={nodes.Plane_003_Environment_2_0_blinn2_0002.geometry} material={materials.Panel} position={[-1322.122, 4390.211, -143.735]} scale={1.026} />
                                <mesh geometry={nodes.Plane_003_Environment_2_0_blinn2_0003.geometry} material={materials.Panel} position={[-1347.367, 8469.467, -143.735]} scale={1.026} />
                                <mesh geometry={nodes.Plane_003_Environment_2_0_blinn2_0006.geometry} material={materials.Panel} position={[-1307.779, -33.673, -143.735]} scale={1.026} />
                            </group>
                        </group>
                    </group>
                </group>
                <mesh geometry={nodes.Car1.geometry} material={materials['Material.009']} position={[16.83, 2.966, -27.459]} rotation={[-3.121, 0.507, 3.1]} scale={1.1} />
                <mesh geometry={nodes.Car1001.geometry} material={materials['Material.002']} position={[-3.606, 3.019, -26.938]} rotation={[-3.121, 0.507, 3.1]} scale={1.1} />
                <mesh geometry={nodes.Car2.geometry} material={materials['Material.010']} position={[10.065, 2.756, -27.362]} rotation={[-3.118, 0.555, 3.099]} scale={1.1} />
                <mesh geometry={nodes.scene001.geometry} material={materials.Scene} position={[-10.798, 1.55, 2.686]} rotation={[-1.57, -0.036, 1.592]} />
                <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[-67.853, 5.2, 26.363]} rotation={[0, 0, 0.063]} scale={[1, 0.143, 1.892]} />
                <group position={[-65.594, 2.842, 46.088]} scale={0.637}>
                    <mesh geometry={nodes.PoplarTree_Mesh_1.geometry}>
                        <meshStandardMaterial color={'#2D572C'} />
                    </mesh>
                    <mesh geometry={nodes.PoplarTree_Mesh_1_1.geometry} material={materials.Bark} />
                </group>
                <group position={[21.972, 3.885, 79.3]} scale={0.637}>
                    <mesh geometry={nodes.PoplarTree_Mesh_1.geometry}>
                        <meshStandardMaterial color={'#2D572C'} />
                    </mesh>
                    <mesh geometry={nodes.PoplarTree_Mesh_1_1.geometry} material={materials.Bark} />
                </group>
                <group position={[53.174, 3.873, 83.481]} scale={0.637}>
                    <mesh geometry={nodes.PoplarTree_Mesh_1.geometry}>
                        <meshStandardMaterial color={'#2D572C'} />
                    </mesh>
                    <mesh geometry={nodes.PoplarTree_Mesh_1_1.geometry} material={materials.Bark} />
                </group>
                <group position={[55.809, 4.061, 81.047]} scale={0.637}>
                    <mesh geometry={nodes.PoplarTree_Mesh_1.geometry}>
                        <meshStandardMaterial color={'#2D572C'} />
                    </mesh>
                    <mesh geometry={nodes.PoplarTree_Mesh_1_1.geometry} material={materials.Bark} />
                </group>
                <group position={[-22.224, 2.516, 27.401]} rotation={[Math.PI, -0.607, Math.PI]} scale={0.366}>
                    <mesh geometry={nodes.ElmTree_Mesh_1.geometry}>
                        <meshStandardMaterial color={'#2D572C'} />
                    </mesh>
                    <mesh geometry={nodes.ElmTree_Mesh_1_1.geometry} material={materials.Bark} />
                </group>
                <group position={[16.761, 2.772, 33.332]} rotation={[0, 1.157, 0]} scale={0.329}>
                    <mesh geometry={nodes.ElmTree_Mesh_1.geometry}>
                        <meshStandardMaterial color={'#2D572C'} />
                    </mesh>
                    <mesh geometry={nodes.ElmTree_Mesh_1_1.geometry} material={materials.Bark} />
                </group>
                <group position={[37.017, 3.385, 37.616]} rotation={[0, 0.568, 0]} scale={0.277}>
                    <mesh geometry={nodes.ElmTree_Mesh_1.geometry}>
                        <meshStandardMaterial color={'#2D572C'} />
                    </mesh>
                    <mesh geometry={nodes.ElmTree_Mesh_1_1.geometry} material={materials.Bark} />
                </group>
                <group position={[33.93, 3.008, 17.962]} rotation={[Math.PI, -0.652, Math.PI]} scale={0.338}>
                    <mesh geometry={nodes.ElmTree_Mesh_1.geometry}>
                        <meshStandardMaterial color={'#2D572C'} />
                    </mesh>
                    <mesh geometry={nodes.ElmTree_Mesh_1_1.geometry} material={materials.Bark} />
                </group>
                <group position={[43.256, 2.868, 0.589]} rotation={[-Math.PI, 0.695, -Math.PI]} scale={[0.449, 0.338, 0.449]}>
                    <mesh geometry={nodes.ElmTree_Mesh_1.geometry}>
                        <meshStandardMaterial color={'#2D572C'} />
                    </mesh>
                    <mesh geometry={nodes.ElmTree_Mesh_1_1.geometry} material={materials.Bark} />
                </group>
                <group position={[66.371, 3.197, 4.344]} rotation={[-Math.PI, 0.695, -Math.PI]} scale={[0.356, 0.308, 0.356]}>
                    <mesh geometry={nodes.ElmTree_Mesh_1.geometry}>
                        <meshStandardMaterial color={'#2D572C'} />
                    </mesh>
                    <mesh geometry={nodes.ElmTree_Mesh_1_1.geometry} material={materials.Bark} />
                </group>
                <group position={[-9.313, 3.692, 80.831]} rotation={[-Math.PI, 0.537, -Math.PI]} scale={0.502}>
                    <mesh geometry={nodes.ElmTree_Mesh_1.geometry}>
                        <meshStandardMaterial color={'#2D572C'} />
                    </mesh>
                    <mesh geometry={nodes.ElmTree_Mesh_1_1.geometry} material={materials.Bark} />
                </group>
                <group position={[-16.188, 4.122, 76.647]} rotation={[0, 1.034, 0]} scale={[0.596, 0.431, 0.596]}>
                    <mesh geometry={nodes.ElmTree_Mesh_1.geometry}>
                        <meshStandardMaterial color={'#2D572C'} />
                    </mesh>
                    <mesh geometry={nodes.ElmTree_Mesh_1_1.geometry} material={materials.Bark} />
                </group>
                <group position={[-21.276, 4.122, 73.085]} rotation={[Math.PI, -0.041, Math.PI]} scale={[0.461, 0.528, 0.461]}>
                    <mesh geometry={nodes.ElmTree_Mesh_1.geometry}>
                        <meshStandardMaterial color={'#2D572C'} />
                    </mesh>
                    <mesh geometry={nodes.ElmTree_Mesh_1_1.geometry} material={materials.Bark} />
                </group>
            </group>
            <Circle args={[320, 10]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.46, 0]} material={material} visible={!isPanorama} />
            <Sphere args={[300, 100]} visible={!isPanorama}>
                <meshStandardMaterial color={'#D0F5F7'} side={THREE.DoubleSide} />
            </Sphere>
        </>
    );
}

useGLTF.preload("models/main/untitled.gltf");
