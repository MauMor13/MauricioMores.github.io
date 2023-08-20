import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const ConteinCarousel = styled.div `
    width: 100%;
    height: 20rem;
`;

const CarouselTechnologies = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const currentRef = containerRef.current;
        const { clientWidth: width, clientHeight: height } = currentRef;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        scene.add(camera);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        containerRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = false;
        controls.enableZoom = false;

        const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
        const texture =  new THREE.TextureLoader().load('src/assets/image/iconTechnologies/html5-logo-31815.png');
        texture.colorSpace = THREE.SRGBColorSpace;
        const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture});
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);
        camera.position.z = 10;
        camera.lookAt(sphere.position);


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