import { Scene, PerspectiveCamera , 
    WebGLRenderer,PlaneGeometry,
    TextureLoader, RepeatWrapping,
    Vector3
} from "three";

import { Water } from 'three/examples/jsm/objects/Water.js';

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
        waterNormals: new TextureLoader().load('./waternormals.jpg', function (texture) {
            texture.wrapS = texture.wrapT = RepeatWrapping;
        }),
        sunDirection: new Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 3.7, 
    }
);
water.rotation.x = - Math.PI / 2;

let renderer: WebGLRenderer;



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
}

const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

scene.add(water);


init()
