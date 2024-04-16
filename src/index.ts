import { Scene, PerspectiveCamera , WebGLRenderer} from "three";

export const scene = new Scene()
export const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
)

console.log(22222222)

let renderer: WebGLRenderer;

async function init() {
    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}


const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
