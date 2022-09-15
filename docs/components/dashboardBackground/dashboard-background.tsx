import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'dashboard-background',
  styleUrl: 'dashboard-background.scss',
  shadow: true,
})
export class FormInput {

  render() {
    return (
      <Host>
        <div class="dashboard-background"><slot/></div>
      </Host>
    );
  }

}