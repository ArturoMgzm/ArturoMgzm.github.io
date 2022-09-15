import { Component, Prop, getAssetPath, h, Host } from '@stencil/core';

@Component({
  tag: 'my-logo',
  // 2. assetsDirs lists the 'assets' directory as a relative
  //    (sibling) directory
  assetsDirs: ['../assets']
})
export class Logo {

  @Prop() image = "logo.png";

  render() {
    // 3. the asset path is retrieved relative to the asset 
    //    base path to use in the <img> tag
    const imageSrc = getAssetPath(`../assets/${this.image}`);
    return <Host><img src={imageSrc} /></Host>
  }
}