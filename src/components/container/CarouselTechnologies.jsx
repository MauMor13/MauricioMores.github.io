import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const ConteinCarousel = styled.div`
    width: 100%;
    height: 13rem;
`;

const CarouselTechnologies = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        /*const iconTechnologies = ['src/assets/image/iconTechnologies/iconBootstrap.svg',
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
            'src/assets/image/iconTechnologies/iconVue.svg'];*/

        const currentRef = containerRef.current;
        const { clientWidth: width, clientHeight: height } = currentRef;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
        scene.add(camera); 
        
        const renderer = new THREE.WebGLRenderer({ alpha: true  });
        renderer.setSize(width, height);
        containerRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enableRotate = false;
        controls.enablePan = false;
        const geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
        const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
        const sphere = new THREE.Mesh( geometry, material ); 
        scene.add( sphere );



camera.position.z = 5;



        const onWindowResize = function () {
            const { clientWidth, clientHeight } = currentRef;
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(clientWidth, clientHeight);
        }
        onWindowResize();

        return () => {
            currentRef.removeChild(renderer.domElement);
        };
    }, []);

    return <ConteinCarousel ref={containerRef}></ConteinCarousel>;
};

export default CarouselTechnologies;