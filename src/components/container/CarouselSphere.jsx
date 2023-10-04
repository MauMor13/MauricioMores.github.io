import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styled from 'styled-components';

const Container = styled.div`
    width: 30rem;
    height: 25rem;
`;

const SphereLogo = ({ img, position }) => {
    const sphereRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        sphereRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(img);

        const geometry = new THREE.SphereGeometry(1, 30, 30);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);

        sphere.position.set(position.x, position.y, position.z);

        scene.add(sphere);

        camera.position.z = 5;

        const animate = function () {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        animate();
    }, [img]);

    return <div ref={sphereRef} />;
};

function CarouselSphere() {
    const icons = [
        'src/assets/image/iconTechnologies/iconBootstrap.svg',
        'src/assets/image/iconTechnologies/iconCss3.svg',
        'src/assets/image/iconTechnologies/iconGit.svg',
        'src/assets/image/iconTechnologies/iconGithub.svg',
        'src/assets/image/iconTechnologies/iconHtml5.svg',
        'src/assets/image/iconTechnologies/iconJava.svg',
        'src/assets/image/iconTechnologies/iconJira.svg',
        'src/assets/image/iconTechnologies/iconJS.svg',
        'src/assets/image/iconTechnologies/iconReact.svg',
        'src/assets/image/iconTechnologies/iconSpring.svg',
        'src/assets/image/iconTechnologies/iconStiled.svg',
        'src/assets/image/iconTechnologies/iconTrello.svg',
        'src/assets/image/iconTechnologies/iconVue.svg'
    ];

    return (
        <Container>
            {icons.map((index, icon) => {
                const angle = (index / icons.length) * Math.PI * 2;
                return <SphereLogo key={index} img={icon} position={{ x: Math.cos(angle) * 5, y: Math.sin(angle) * 5, z: 0 }} />
            })}
        </Container>
    );
}

export default CarouselSphere;