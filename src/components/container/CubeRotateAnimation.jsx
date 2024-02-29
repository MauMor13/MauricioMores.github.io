import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import img1 from '../../assets/image/imageProfile/photo1.jpg'
import img2 from '../../assets/image/imageProfile/photo2.jpg';
import img3 from '../../assets/image/imgHDFull/gato-con-mariposa-de-fantasia_3840x2160_xtrafondos.com.jpg';
import img4 from '../../assets/image/imgHDFull/parado-en-el-borde-de-dos-mundos_3840x2160_xtrafondos.com.jpg';

const ContainCube = styled.div`
    width: 100%;
    height: 35rem;
    position: relative;
    background-color: tra;
    filter: drop-shadow(
        15px 15px 20px rgb(113, 0, 241,0.4)
    );
    @media (max-width:300px){
        height: 30rem;
    } 
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
        controls.enablePan= false;
        controls.enableZoom = false;
        controls.minPolarAngle = 1.5;
        controls.maxPolarAngle = 1.5;

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const texture = [
            new THREE.TextureLoader().load(img1),
            new THREE.TextureLoader().load(img2),
            new THREE.TextureLoader().load(img3),
            new THREE.TextureLoader().load(img4)
        ];
        texture.forEach(texture => texture.colorSpace = THREE.SRGBColorSpace);
        const materials = [
            new THREE.MeshBasicMaterial({ map: texture[0] }), // Front
            new THREE.MeshBasicMaterial({ map: texture[1] }), // Back
            new THREE.MeshBasicMaterial({ color: 0x0f2c64 }), // Top
            new THREE.MeshBasicMaterial({ color: 0x0f2c64 }), // Bottom 
            new THREE.MeshBasicMaterial({ map: texture[2] }), // Right
            new THREE.MeshBasicMaterial({ map: texture[3] }) // Left
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

            const newCubeScale = clientWidth < 600 ? 0.75 : 0.95;
            cube.scale.set(newCubeScale, newCubeScale, newCubeScale);
        }

        window.addEventListener('resize', onWindowResize);
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