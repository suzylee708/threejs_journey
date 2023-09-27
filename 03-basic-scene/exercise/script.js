// console.log(THREE)
// Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 'red'})
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// Sizes
const Sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, Sizes.width / Sizes.height)
camera.position.z = 3
camera.position.x = 1
camera.position.y = 1
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(Sizes.width, Sizes.height)

renderer.render(scene, camera)