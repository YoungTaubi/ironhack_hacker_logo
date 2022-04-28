import './style.css'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';


const scene  = new THREE.Scene();
 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
 
const renderer = new THREE.WebGLRenderer({
 canvas: document.querySelector('#bg'),
});
 
renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);
 
renderer.render(scene, camera);

const material =  new THREE.MeshNormalMaterial();

const meshLoader = new OBJLoader();
meshLoader.load('src/mesh/20220428_Iron_Crypto_Logo_rotated_s.obj', (obj) => {
  obj.traverse((child) => {
    child.material = material
  }) 
  obj.castShadow = true;
  obj.position.set(0,0,-6)
  const ironLogo = obj
  scene.add(ironLogo)   
})

const meshLoaderBG = new OBJLoader();
meshLoader.load('src/mesh/20220428_Iron_Crypto_Logo_BG_s.obj', (obj) => {
  obj.traverse((child) => {
    child.material = material
  }) 
  obj.castShadow = true;
  obj.rotateY(6)
  const bg = obj
  scene.add(bg)   
})

const ironLogo = scene.children[0]


function animate(){
  console.log(scene.children[0]);
  requestAnimationFrame(animate);
  scene.children[1].rotation.y += 0.01;
  renderer.render(scene, camera);
 }
  
 animate()