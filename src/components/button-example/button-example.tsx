import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'button-example',
  styleUrl: 'button-example.css',
  shadow: true,
})
export class ButtonExample {
  @Prop() name: string;
  @Prop() loading: boolean;

  render() {
    return (
      <Host>
        <button class="button-example"> { this.name } </button>
      </Host>
    );
  }

}
