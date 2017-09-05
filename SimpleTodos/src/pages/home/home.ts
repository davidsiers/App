import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Variables
  todos = [];
  newItem = '';

  constructor(public navCtrl: NavController) {}

  // Add a new Todo from the newItem variabke
  addTodo() {
    // Only add if the text is set
    if (this.newItem !== '') {
      // Push to our todos array
      this.todos.push(this.newItem);

      // Reset the variable of the input field
      this.newItem = '';
    }
  }

  // Remove a todo by its index
  finishTodo(index) {
    // Remove 1 object inside our array at the given index
    this.todos.splice(index, 1);
  }
}
