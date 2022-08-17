import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'example-button',
  styleUrl: './css/button.css',
})
export class ExampleButton {
  // Indicate that name should be a public property on the component
  @Prop() name: string;
  @Prop() variant: string;
  @Prop() loading: boolean;

  render() {
    return (
    //   <button class={"example-button " + "btn-" + this.variant}>{this.name} {this.loadingEl}</button>
        // <button class={`example-button ${this.variant ? 'btn-' + this.variant : '' } ${this.loading ? 'loading' : ''}`}>
        <button class={{
            'example-button': true,
            [`btn-${this.variant}`]: this.variant ? true : false
        }}>
            {this.name}

            {this.loading ? <div class="btn-loading"></div> : ''}
        </button>
    );
  } 
}