import { Component, Prop, getAssetPath, h, Host } from '@stencil/core';

@Component({
  tag: 'my-dashboard',
  // 2. assetsDirs lists the 'assets' directory as a relative
  //    (sibling) directory
  styleUrl: 'dashboard.css',
  assetsDirs: ['../assets']
})
export class Dashboard {

  @Prop() image = "dashboard.png";

  render() {
    // 3. the asset path is retrieved relative to the asset 
    //    base path to use in the <img> tag
    const imageSrc = getAssetPath(`../assets/${this.image}`);
    return <Host><img class="dashboard" src={imageSrc} /></Host>
  }
}