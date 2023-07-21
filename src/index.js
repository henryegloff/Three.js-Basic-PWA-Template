

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js'
import lights from './_modules/lights.js';


//import Stats from 'three/examples/jsm/libs/stats.module.js'



const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x111111 );


const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0,1,5);


const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.enabled = true


const threejs_canvas = document.getElementById("three");
threejs_canvas.appendChild(renderer.domElement);


const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 1, 0);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI/2;
controls.minPolarAngle = .01;
controls.minDistance = 4;
controls.maxDistance = 52;
controls.enablePan = true;
controls.listenToKeyEvents( window )
  

// const stats = new Stats()
// document.body.appendChild( stats.dom )


lights(scene); // Example module


const gridHelper = new THREE.GridHelper(20, 20, 0x555555, 0x555555)
scene.add(gridHelper)


const material_1 = new THREE.MeshStandardMaterial( { color: 0xffffff } );

const material_2 = new THREE.MeshStandardMaterial( { color: 0x777777 } );



const cube = new THREE.Mesh(new THREE.BoxGeometry( 1, 1, 1 ), material_1 );
cube.castShadow = true;
cube.position.y = 1;
scene.add( cube );


const ground_plane = new THREE.Mesh( new THREE.PlaneGeometry( 10, 10 ), material_2 );
ground_plane.receiveShadow = true;
ground_plane.rotateX(-Math.PI / 2);
ground_plane.position.y = -0.01;
scene.add( ground_plane );




function animate() {
    requestAnimationFrame( animate );
    controls.update()    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
    //stats.update()
}

animate();





window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})





