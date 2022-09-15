import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'todo-list-item',
  styleUrl: 'todo-list-item.css',
  shadow: true,
})
export class TodoListItem {
  @Prop() thingToDo: string;

  render() {
    return (
      // <Host>
        <li class={'todo-list-item'}>{this.thingToDo}</li>
      // </Host>
    );
  }

}
