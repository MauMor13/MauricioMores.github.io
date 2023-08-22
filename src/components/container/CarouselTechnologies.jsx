import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const ConteinCarousel = styled.div`
    width: 100%;
    height: 20rem;
`;

const CarouselTechnologies = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const iconTechnologies = ['src/assets/image/iconTechnologies/iconBootstrap.svg',
            'src/assets/image/iconTechnologies/iconCss3.svg',
            'src/assets/image/iconTechnologies/iconGit.svg',
            'src/assets/image/iconTechnologies/iconGithub.svg',
            'src/assets/image/iconTechnologies/iconHtml5.svg',
            'src/assets/image/iconTechnologies/iconJava.svg',
            'src/assets/image/iconTechnologies/iconJira.svg',
            'src/assets/image/iconTechnologies/iconJS.svg',
            'src/assets/image/iconTechnologies/iconJS.svg',
            'src/assets/image/iconTechnologies/iconReact.svg',
            'src/assets/image/iconTechnologies/iconSpring.svg',
            'src/assets/image/iconTechnologies/iconStiled.svg',
            'src/assets/image/iconTechnologies/iconTrello.svg',
            'src/assets/image/iconTechnologies/iconVue.svg'];

        const currentRef = containerRef.current;
        const { clientWidth: width, clientHeight: height } = currentRef;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        scene.add(camera);
        const renderer = new THREE.WebGLRenderer({ alpha: true  });
        renderer.setSize(width, height);
        containerRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enableRotate = false;
        controls.enablePan = false;
        const spheres = [];
        const sphereRadius = 5;
        const sphereSeparation = 2;
        iconTechnologies.forEach((iconTechnologie, index) => {
            const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 32, 32);
            const texture =  new THREE.TextureLoader().load(iconTechnologie);
            texture.colorSpace = THREE.SRGBColorSpace;
            const sphereMaterial = new THREE.MeshBasicMaterial({ map : texture});
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            sphere.rotateY(30);
            sphere.position.x = index * (sphereRadius * 2 + sphereSeparation);
            scene.add(sphere);
            spheres.push(sphere);
        });
        camera.position.z = 12;

        const animate = () => {
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
        animate();
        onWindowResize();

        return () => {
            currentRef.removeChild(renderer.domElement);
        };
    }, []);

    return <ConteinCarousel ref={containerRef}></ConteinCarousel>;
};

export default CarouselTechnologies;