import { Component,Host, h } from '@stencil/core';

@Component({
  tag: 'custom-link',
  styleUrl: 'custom-link.scss',
  shadow: true,
})
export class CustomLink {
  render() {
    return (
      <Host>
        <a class="link"><slot></slot></a>
      </Host>
    );
  }

}
