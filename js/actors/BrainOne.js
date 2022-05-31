// import * as THREE from 'three';
import Actor from '../systems/Actor.js';
import { createGlbLoader } from '../systems/Loader.js';

export default class BrainOne extends Actor {
  constructor() {
    super();
    this.model = {};
    console.log(this.model);
  }

  async init() {
    super.init();
    const glbloader = await createGlbLoader();
    const [brainData] = await Promise.all([
      glbloader.loadAsync('/assets/brainone.glb'),
    ]);
    console.log(brainData);
    const brainmodel = brainData.scene;
    // for (let m = 1; m < mymodel.children.length; m += 1) {
    //   mymodel.children[m].castShadow = true;
    // }
    this.model = brainmodel;
    console.log(this);
  }

  dispose() {
    console.log(this);
  }
}
