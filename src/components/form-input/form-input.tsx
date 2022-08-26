import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'form-input',
  styleUrl: 'form-input.scss',
  shadow: true,
})
export class FormInput {
  @Prop() type: string;
  @Prop() placeholder: string;

  render() {
    return (
      <Host>
        <input class="form-input" type={this.type} placeholder={this.placeholder} />
      </Host>
    );
  }

}
