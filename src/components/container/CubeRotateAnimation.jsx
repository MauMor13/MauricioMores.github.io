import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const ContainCube = styled.div`
    padding-left: 2rem;
    width: 90%;
    height: 35rem;
    background-color: transparent;
`;

const CubeRotateAnimation = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentRef = mountRef.current;
        const { clientWidth: width, clientHeight: height } = currentRef;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(25, width / height, 0.01, 1000);
        scene.add(camera);
        camera.position.z = 0;
        camera.position.x = 0;

        const renderer = new THREE.WebGLRenderer({ alpha: true }); 
        renderer.setSize(width, height);
        currentRef.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enableZoom = false;
        controls.minPolarAngle = 1.5;
        controls.maxPolarAngle = 1.5;


        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const texture = [
            new THREE.TextureLoader().load('src/assets/image/imgHDFull/gato-astronauta_3840x2400_xtrafondos.com.jpg'),
            new THREE.TextureLoader().load('src/assets/image/imgHDFull/gato-con-estrellas-de-fondo_3840x2160_xtrafondos.com.jpg'), 
            new THREE.TextureLoader().load('src/assets/image/imgHDFull/gato-con-mariposa-de-fantasia_3840x2160_xtrafondos.com.jpg'),
            new THREE.TextureLoader().load('src/assets/image/imgHDFull/parado-en-el-borde-de-dos-mundos_3840x2160_xtrafondos.com.jpg')
        ];
        texture.forEach(texture => texture.colorSpace = THREE.SRGBColorSpace);
        const materials = [
            new THREE.MeshBasicMaterial({ map:texture[0]}), // Front
            new THREE.MeshBasicMaterial({ map:texture[1]}), // Back
            new THREE.MeshBasicMaterial({ color: 0x0f2c64 }), // Top
            new THREE.MeshBasicMaterial({ color: 0x0f2c64 }), // Bottom 
            new THREE.MeshBasicMaterial({ map:texture[2]}), // Right
            new THREE.MeshBasicMaterial({ map:texture[3]}) // Left
        ];
        const cube = new THREE.Mesh(geometry, materials);
        scene.add(cube);

        camera.position.z = 3;
        camera.lookAt(cube.position);

        const animate = function () {
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        
        const onWindowResize = function () {
            const { clientWidth, clientHeight } = currentRef;
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(clientWidth, clientHeight);
        }

        window.addEventListener( 'resize', onWindowResize );
        onWindowResize();
        animate();

        return () => {
            currentRef.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <ContainCube ref={mountRef}>
        </ContainCube>
    );
}

export default CubeRotateAnimation;