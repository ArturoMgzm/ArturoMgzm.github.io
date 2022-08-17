import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: true,
})
export class TodoList {
  @Prop() name: string;

  render() {
    return (
      // <Host>
        <div>
          <h1>To-Do List:</h1>
          <ul class={'todo-list'}> 
            <todo-list-item thingToDo={"Learn about Stencil Props"}></todo-list-item>
            <todo-list-item thingToDo={"Write some Stencil Code with Props"}></todo-list-item>
            <todo-list-item thingToDo={"Dance Party"}></todo-list-item>
          </ul>
        </div>
      // </Host>
    );
  }

}
