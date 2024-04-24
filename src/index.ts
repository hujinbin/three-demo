import {
    Scene, PerspectiveCamera,
    WebGLRenderer, PlaneGeometry,
    TextureLoader, RepeatWrapping,
    Vector3,
    PMREMGenerator,
    Object3D
} from "three";

import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { Water } from 'three/examples/jsm/objects/Water.js';
let rocketModel: Object3D;
const gltfLoader = new GLTFLoader();

export const scene = new Scene()
export const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
)

console.log(22222222)

const waterGeometry = new PlaneGeometry(10000, 10000);

const water = new Water(
    waterGeometry,
    {
        textureWidth: 512,
        textureHeight: 512,
        sunDirection: new Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 3.7,
    }
);
water.rotation.x = - Math.PI / 2;

let renderer: WebGLRenderer;


const sky = new Sky();
sky.scale.setScalar(10000); 
scene.add(sky); 

const skyUniforms = sky.material.uniforms;
skyUniforms['turbidity'].value = 10;
skyUniforms['rayleigh'].value = 2;
skyUniforms['mieCoefficient'].value = 0.005;
skyUniforms['mieDirectionalG'].value = 0.8;


function render() {
    water.material.uniforms["time"].value += 1.0 / 60.0;
    requestAnimationFrame(render)
}
render()

async function init() {
    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    scene.add(water);
    document.body.appendChild(renderer.domElement);
    render()
    console.log(water)
    scene.add(water);
    const pmremGenerator = new PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(sky as any).texture;
}


const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

scene.add(water);


init()
