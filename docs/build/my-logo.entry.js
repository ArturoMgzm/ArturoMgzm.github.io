import { r as registerInstance, g as getAssetPath, h, e as Host } from './index-24ba0b35.js';

const Logo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.image = "logo.png";
  }
  render() {
    // 3. the asset path is retrieved relative to the asset 
    //    base path to use in the <img> tag
    const imageSrc = getAssetPath(`../assets/${this.image}`);
    return h(Host, null, h("img", { src: imageSrc }));
  }
  static get assetsDirs() { return ["../assets"]; }
};

export { Logo as my_logo };
