import { Component,Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'custom-label',
  styleUrl: 'custom-label.scss',
  shadow: true,
})
export class CustomLabel {
  @Prop() type: string;

  render() {
    if(this.type == "header"){
      return (
        <Host>
          <label class="header"><slot></slot></label>
        </Host>
      );
    }
    else{
      return (
        <Host>
          <label class="basic"><slot></slot></label>
        </Host>
      );
    }
  }

}
