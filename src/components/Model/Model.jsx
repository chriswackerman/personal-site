import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Box, Spinner } from '@chakra-ui/react';

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Model = () => {
    const mount = useRef(null);
    const [loading, setLoading] = useState(true);

    let renderer = null;
    let camera = null;
    const scene = new THREE.Scene();

    const target = new THREE.Vector3(0, 0, 0);
    const initialCameraPosition = new THREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI));

    useEffect(() => {
        function handleResize() {
            const width = mount.current.clientWidth;
            const height = mount.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height; 
            camera.updateProjectionMatrix();
        }

        window.addEventListener('resize', handleResize);

        const container = mount.current;
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(mount.current.clientWidth, mount.current.clientHeight);

        const scW = container.clientWidth;
        const scH = container.clientHeight;
        const scale = scH * 0.01;
        camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);
        camera.position.copy(initialCameraPosition);
        camera.lookAt(target);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
        hemiLight.position.set( 0, 200, 0 );
        scene.add( hemiLight );

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.autoRotate = true;
        controls.target = target;
        controls.enablePan = false;

        const loader = new GLTFLoader();
        let model;

        loader.load(import.meta.env.BASE_URL + '/computer.glb', function (gltf) {
            model = gltf.scene;
            scene.add(model);
            setLoading(false);
        }, undefined, function (error) {
            console.error(error);
        });

        let frame = 0;
        const animate = () => {
            if (camera) {
                requestAnimationFrame(animate);

                frame = frame <= 100 ? frame + 1 : frame;

                if (frame <= 100) {
                    const p = initialCameraPosition;
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

                    camera.position.y = 10;
                    camera.position.x =
                        p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
                    camera.position.z =
                        p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
                    camera.lookAt(target);
                } else {
                    controls.update();
                }

                renderer.render(scene, camera);
            }
        };

        animate();

        container.appendChild(renderer.domElement);

        return () => {
            controls.dispose();
            renderer.dispose();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box
            style={{ overflow: 'hidden' }}
            ref={mount}
            m="auto"
            w={['300px', '400px', '600px']}
            h={['70vh', '70vh', '70vh']}
            position="relative"
            marginTop={-32}
            marginBottom={-32}
            zIndex={1}
        >
            {loading && <Spinner size="xl" position="absolute" left="50%" top="50%" />}
        </Box>
    );
};

export default Model;
