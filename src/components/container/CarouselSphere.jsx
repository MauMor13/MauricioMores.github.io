import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 20rem;
    margin-bottom: 1rem;
    background-color: transparent;
`;

const CarouselSphere = () => {
    const sphereRef = useRef(null);
    
    useEffect(() => {
        const iconsImage = [
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
        const currentRef = sphereRef.current;
        const { clientWidth: width, clientHeight: height } = currentRef;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        const backgroundColor = new THREE.Color(0x00ff00);
        renderer.setClearColor(backgroundColor);
        
        scene.add(camera);
        camera.position.z = 0;
        camera.position.x = 0;
        camera.position.y = 0;

        renderer.setSize(width, height);
        sphereRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        
        iconsImage.map((icon,index)=>{

            const angle = (index / iconsImage.length) * Math.PI * 2;
            
            const textureLoader = new THREE.TextureLoader();
            const texture = textureLoader.load(icon);
            texture.colorSpace = THREE.SRGBColorSpace;
    
            const geometry = new THREE.SphereGeometry(1, 30, 30);
            const material = new THREE.MeshBasicMaterial({ map: texture });
            const sphere = new THREE.Mesh(geometry, material);
    
            sphere.position.set( Math.sin(angle) * 10, 3 ,Math.cos(angle) * 4);
    
            scene.add(sphere);
        });

        const animate = function () {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        const onWindowResize = function () {
            const { clientWidth, clientHeight } = currentRef;
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(clientWidth, clientHeight);
        }
        window.addEventListener('resize', onWindowResize);
        
        onWindowResize();
        animate();
        
        return () => {
            currentRef.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <Container ref={sphereRef}>
            
        </Container>
    );


};

/*
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
}*/

export default CarouselSphere;