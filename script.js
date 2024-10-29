import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(0, 1, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.enabled = true;

const threejs_canvas = document.getElementById("three");
threejs_canvas.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 1, 0);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = 0.01;
controls.minDistance = 4;
controls.maxDistance = 52;
controls.enablePan = true;

const directional_light = new THREE.DirectionalLight(0xffffff, 1);
directional_light.position.set(0, 5, 0);
directional_light.castShadow = true;
directional_light.shadow.mapSize.width = 1024;
directional_light.shadow.mapSize.height = 1024;
directional_light.shadow.camera.far = 6;
directional_light.shadow.radius = 5;
directional_light.shadow.bias = -0.00006;
scene.add(directional_light);

const hemisphere_light = new THREE.HemisphereLight(0xffffff, 0x111111, 0.5);
hemisphere_light.position.set(0, 1, 0);
scene.add(hemisphere_light);

const gridHelper = new THREE.GridHelper(20, 20, 0x555555, 0x555555);
scene.add(gridHelper);

const material_1 = new THREE.MeshStandardMaterial({ color: 0xffffff });

const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material_1);
cube.castShadow = true;
cube.position.y = 1;
scene.add(cube);

const ground_plane = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  material_1,
);
ground_plane.receiveShadow = true;
ground_plane.rotateX(-Math.PI / 2);
ground_plane.position.y = -0.01;
scene.add(ground_plane);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Register Service Worker

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("service-worker.js").then(
      function (registration) {
        //console.log('ServiceWorker registration successful with scope: ', registration.scope);
      },
      function (err) {
        //console.log('ServiceWorker registration failed: ', err);
      },
    );
  });
}
