import * as THREE from 'three';
import World from '../systems/World.js';

// import HeartScenery from '../scenery/HeartScenery.js';
import BrainOne from '../actors/BrainOne.js';
// import MySphere from '../props/MySphere.js';

export default class InitialWorld extends World {
  constructor(stage) {
    super(stage);

    this.stage.camera.position.set(0, 0.05, 0.5);
    this.stage.scene.background = new THREE.Color(0xa0a0a0);

    const light = new THREE.PointLight(0xffaaaa, 2, 100, 1);
    light.position.set(0, 0, -5);
    this.stage.scene.add(light);

    const light2 = new THREE.PointLight(0xaaaaff, 2, 100, 1);
    light2.position.set(0, 0, 5);
    this.stage.scene.add(light2);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(3, 3, 0);
    this.stage.scene.add(directionalLight);

    this.brain = {};
  }

  async init() {
    await super.init();

    this.stage.controls.target = new THREE.Vector3(0, 0.05, 0);

    // this.heart = new Heart();
    // await this.heart.init();
    // this.heart.model.position.y += 0.95;
    // this.stage.scene.add(this.heart.model);

    this.brain = new BrainOne();
    await this.brain.init();
    // this.brain.model.position.y += 0.95;
    this.stage.scene.add(this.brain.model);

    // this.sphere = new MySphere();
    // await this.sphere.init();
    // this.sphere.model.position.x += 1;
    // this.sphere.model.position.y += 0.25;
    // this.sphere.model.castShadow = true;
    // this.stage.scene.add(this.sphere.model);
  }

  update(time) {
    super.update(time);
  }

  dispose() {
    this.stage.disableVR();
    this.brain.dispose();
    this.brain.model.removeFromParent();
    // this.hemi.removeFromParent();
    // this.light.removeFromParent();
    // this.plane.geometry.dispose();
    // this.plane.material.dispose();
    // this.plane.removeFromParent();
    // this.sphere.dispose();
    // this.sphere.model.removeFromParent();
  }
}
