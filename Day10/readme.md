# Orbit controls

https://threejs.org/docs/#examples/en/controls/OrbitControls

``` javascript
const controls = new OrbitControls( camera, renderer.domElement );
// 
controls.update();
```
# GLTFLoader
``` javascript
https://stackoverflow.com/a/64825787/13636459
```
``` javascript
let loader = new GLTFLoader();  //from the docs

//or

let loader = new THREE.GLTFLoader(); //not from the docs
```

# Stacked
https://threejs.org/docs/#api/en/geometries/BoxGeometry

# Starter pack ([Guide](https://medium.com/@necsoft/three-js-101-hello-world-part-1-443207b1ebe1))
* Renderer
* Scene
* Camera

``` javascript
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
```

``` javascript
var scene = new THREE.Scene();
```

``` javascript
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
```

* Create geometry
* Create material
* Create Mesh
* Add mesh to scene

``` javascript
// Create the Geometry passing the size
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// Create the Material passing the color
var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
// Create the Mesh
var cube = new THREE.Mesh( geometry, material );
// Add the mesh to the scene
scene.add( cube );
```

# Animation loop
``` javascript
// Render Loop
var render = function () {
  requestAnimationFrame( render );
// Your animated code goes here
renderer.render(scene, camera);
};
render();
```

# attributes
``` javascript
// Rotation (XYZ) in radians. 
cube.rotation.x
cube.rotation.y
cube.rotation.z
// Position (XYZ)
cube.position.x
cube.position.y
cube.position.z
// Scale (XYZ) 
cube.scale.x
cube.scale.y
cube.scale.z
```

# Next
https://blog.logrocket.com/how-to-use-lighting-and-renderers-in-three-js/
http://jstherightway.org/#getting-started
https://threejs.org/manual/#en/fundamentals