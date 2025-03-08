import * as THREE from "three";
import { OrbitControls } from 'jsm/controls/OrbitControls.js';
const w = window.innerWidth;
const h = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement); // Fixed: domElement
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far); // Fixed: fov case
camera.position.z = 2;
const scene = new THREE.Scene(); // Fixed: Scene() with capital S
const geo = new THREE.IcosahedronGeometry(1.0,2);
const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true

});
const hemilight = new THREE.HemisphereLight(0x0099ff,0xaa5500)
scene.add(hemilight);
const mesh = new THREE.Mesh(geo,mat);
scene.add(mesh); 
const wireMat=new THREE.MeshBasicMaterial({
    color:0xffffff,
    wireframe: true
});
const wireMesh= new THREE.Mesh(geo,wireMat);
mesh.add(wireMesh);
function animate(timestamp = 0) {
    requestAnimationFrame(animate);
    mesh.rotation.y+= 0.001;
    renderer.render(scene, camera);
}
animate();
renderer.render(scene, camera);
