import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css'],
})
export class DiretivasComponent implements OnInit {
  exibir: boolean = true;

  tasks: TodoItem[] = [
    { description: 'Arrumar a cama', done: false },
    { description: 'Fazero trabalho prático', done: true },
  ];

  addtask(description: string) {
    this.tasks.push({
      description: description,
      done: false,
    });
  }

  deleteTask(i: number){
    this.tasks.splice(i, 1); //No indice i remova 01 elemento.
  }

  toogleShow() {
    this.exibir = !this.exibir;
  }
  constructor() {}

  ngOnInit(): void {}
}
