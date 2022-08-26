import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'form-label',
  styleUrl: 'form-label.scss',
  shadow: true,
})
export class FormLabel {

  render() {
    return (
      <Host>
        <label class="form-label"><slot></slot></label>
      </Host>
    );
  }

}
