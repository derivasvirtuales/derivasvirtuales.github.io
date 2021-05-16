import * as THREE from 'https://cdn.skypack.dev/three@0.128.0';
        import { MapControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
        
        import { OBJLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/OBJLoader.js';
        import { MTLLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/MTLLoader';
        import { DDSLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/DDSLoader';
        let camera, controls, scene, renderer;
        const DIVISION_GRID = 17;
        const gridHelper = new THREE.GridHelper( window.innerWidth, DIVISION_GRID );
        const a = new THREE.Vector3( 0, 0, 0 );

        init();
        animate();

        function init() {

          scene = new THREE.Scene();
          scene.background = new THREE.Color( 0xcccccc );
          scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

          renderer = new THREE.WebGLRenderer( { antialias: true } );
          renderer.setPixelRatio( window.devicePixelRatio );
          renderer.setSize( window.innerWidth, window.innerHeight );
          document.body.appendChild( renderer.domElement );

          scene.add( gridHelper );

          camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, window.innerWidth );
          camera.position.set( 400, 200, 0 );
          controls = new MapControls( camera, renderer.domElement );
          controls.enableDamping = true;
          controls.dampingFactor = 0.05;
          controls.screenSpacePanning = false;
          controls.minDistance = 100;
          controls.maxDistance = 500;
          controls.maxPolarAngle = Math.PI / 2;

          const onProgress = function ( xhr ) {
            if ( xhr.lengthComputable ) {
              const percentComplete = xhr.loaded / xhr.total * 100;
              console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
            }
          };
          const onError = function () { };

          const manager = new THREE.LoadingManager();
          manager.addHandler( /\.dds$/i, new DDSLoader() );

          new MTLLoader(manager)
          .load( './assets/models/edificio1.mtl', function ( materials ) {
            materials.preload();
            new OBJLoader(manager)
              .setMaterials(materials)
              .load('./assets/models/edificio1.obj', function (object) {
                object.position.x = -window.innerWidth/2 + window.innerWidth/DIVISION_GRID;
                object.position.y = a.y;
                object.position.z = window.innerWidth/2 - window.innerWidth/DIVISION_GRID;
                object.scale.x = 20;
                object.scale.y = 20;
                object.scale.z = 20;
                scene.add( object );
              }, onProgress, onError );
            }
          );

          new MTLLoader(manager)
          .load( './assets/models/edificio2.mtl', function ( materials ) {
            materials.preload();
            new OBJLoader(manager)
              .setMaterials(materials)
              .load('./assets/models/edificio2.obj', function (object) {
                object.position.x = -window.innerWidth/2 + window.innerWidth/DIVISION_GRID;
                object.position.y = a.y;
                object.position.z = window.innerWidth/2 - window.innerWidth/DIVISION_GRID * 3;
                object.scale.x = 20;
                object.scale.y = 20;
                object.scale.z = 20;
                scene.add( object );
              }, onProgress, onError );
            }
          );

          new MTLLoader(manager)
          .load( './assets/models/edificio3.mtl', function ( materials ) {
            materials.preload();
            new OBJLoader(manager)
              .setMaterials(materials)
              .load('./assets/models/edificio3.obj', function (object) {
                object.position.x = -window.innerWidth/2 + window.innerWidth/DIVISION_GRID;
                object.position.y = a.y;
                object.position.z = window.innerWidth/2 - window.innerWidth/DIVISION_GRID * 4;
                object.scale.x = 20;
                object.scale.y = 20;
                object.scale.z = 20;
                scene.add( object );
              }, onProgress, onError );
            }
          );

          new MTLLoader(manager)
          .load( './assets/models/edificio4.mtl', function ( materials ) {
            materials.preload();
            new OBJLoader(manager)
              .setMaterials(materials)
              .load('./assets/models/edificio4.obj', function (object) {
                object.position.x = -window.innerWidth/2 + window.innerWidth/DIVISION_GRID * 2;
                object.position.y = a.y;
                object.position.z = window.innerWidth/2 - window.innerWidth/DIVISION_GRID * 2;
                object.scale.x = 20;
                object.scale.y = 20;
                object.scale.z = 20;
                scene.add( object );
              }, onProgress, onError );
            }
          );

          new MTLLoader(manager)
          .load( './assets/models/edificio5.mtl', function ( materials ) {
            materials.preload();
            new OBJLoader(manager)
              .setMaterials(materials)
              .load('./assets/models/edificio5.obj', function (object) {
                object.position.x = -window.innerWidth/2 + window.innerWidth/DIVISION_GRID * 2;
                object.position.y = a.y;
                object.position.z = window.innerWidth/2 - window.innerWidth/DIVISION_GRID * 7;
                object.scale.x = 20;
                object.scale.y = 20;
                object.scale.z = 20;
                scene.add( object );
              }, onProgress, onError );
            }
          );

          new MTLLoader(manager)
          .load( './assets/models/edificio6.mtl', function ( materials ) {
            materials.preload();
            new OBJLoader(manager)
              .setMaterials(materials)
              .load('./assets/models/edificio6.obj', function (object) {
                object.position.x = -window.innerWidth/2 + window.innerWidth/DIVISION_GRID * 3;
                object.position.y = a.y;
                object.position.z = window.innerWidth/2 - window.innerWidth/DIVISION_GRID * 6;
                object.scale.x = 20;
                object.scale.y = 20;
                object.scale.z = 20;
                scene.add( object );
              }, onProgress, onError );
            }
          );

          new MTLLoader(manager)
          .load( './assets/models/edificio7.mtl', function ( materials ) {
            materials.preload();
            new OBJLoader(manager)
              .setMaterials(materials)
              .load('./assets/models/edificio7.obj', function (object) {
                object.position.x = -window.innerWidth/2 + window.innerWidth/DIVISION_GRID * 4;
                object.position.y = a.y;
                object.position.z = window.innerWidth/2 - window.innerWidth/DIVISION_GRID * 6;
                object.scale.x = 20;
                object.scale.y = 20;
                object.scale.z = 20;
                scene.add( object );
              }, onProgress, onError );
            }
          );

          new MTLLoader(manager)
          .load( './assets/models/edificio8.mtl', function ( materials ) {
            materials.preload();
            new OBJLoader(manager)
              .setMaterials(materials)
              .load('./assets/models/edificio8.obj', function (object) {
                object.position.x = -window.innerWidth/2 + window.innerWidth/DIVISION_GRID * 5;
                object.position.y = a.y;
                object.position.z = window.innerWidth/2 - window.innerWidth/DIVISION_GRID * 7;
                object.scale.x = 20;
                object.scale.y = 20;
                object.scale.z = 20;
                scene.add( object );
              }, onProgress, onError );
            }
          );

          new MTLLoader(manager)
          .load( './assets/models/edificio3.mtl', function ( materials ) {
            materials.preload();
            new OBJLoader(manager)
              .setMaterials(materials)
              .load('./assets/models/edificio3.obj', function (object) {
                object.position.x = -window.innerWidth/2 + window.innerWidth/DIVISION_GRID * 6;
                object.position.y = a.y;
                object.position.z = window.innerWidth/2 - window.innerWidth/DIVISION_GRID;
                object.scale.x = 20;
                object.scale.y = 20;
                object.scale.z = 20;
                scene.add( object );
              }, onProgress, onError );
            }
          );

          new MTLLoader(manager)
          .load( './assets/models/edificio2.mtl', function ( materials ) {
            materials.preload();
            new OBJLoader(manager)
              .setMaterials(materials)
              .load('./assets/models/edificio2.obj', function (object) {
                object.position.x = -window.innerWidth/2 + window.innerWidth/DIVISION_GRID * 6.5;
                object.position.y = a.y;
                object.position.z = window.innerWidth/2 - window.innerWidth/DIVISION_GRID * 8;
                object.scale.x = 20;
                object.scale.y = 20;
                object.scale.z = 20;
                scene.add( object );
              }, onProgress, onError );
            }
          );

          new MTLLoader(manager)
          .load( './assets/models/edificio3.mtl', function ( materials ) {
            materials.preload();
            new OBJLoader(manager)
              .setMaterials(materials)
              .load('./assets/models/edificio3.obj', function (object) {
                object.position.x = -window.innerWidth/2 + window.innerWidth/DIVISION_GRID * 6.8;
                object.position.y = a.y;
                object.position.z = window.innerWidth/2 - window.innerWidth/DIVISION_GRID * 7;
                object.scale.x = 20;
                object.scale.y = 20;
                object.scale.z = 20;
                scene.add( object );
              }, onProgress, onError );
            }
          );

          new MTLLoader(manager)
          .load( './assets/models/edificio4.mtl', function ( materials ) {
            materials.preload();
            new OBJLoader(manager)
              .setMaterials(materials)
              .load('./assets/models/edificio4.obj', function (object) {
                object.position.x = -window.innerWidth/2 + window.innerWidth/DIVISION_GRID * 8.5;
                object.position.y = a.y;
                object.position.z = window.innerWidth/2 - window.innerWidth/DIVISION_GRID * 8.5;
                object.scale.x = 20;
                object.scale.y = 20;
                object.scale.z = 20;
                scene.add( object );
              }, onProgress, onError );
            }
          );

          const dirLight1 = new THREE.DirectionalLight( 0xffffff );
          dirLight1.position.set( 1, 1, 1 );
          scene.add( dirLight1 );

          const ambientLight = new THREE.AmbientLight( 0x222222 );
          scene.add( ambientLight );

          window.addEventListener( 'resize', onWindowResize );
        }

        function onWindowResize() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize( window.innerWidth, window.innerHeight );
        }

        function animate() {
          requestAnimationFrame( animate );
          controls.update();
          render();
        }

        function render() {
          renderer.render( scene, camera );
        }