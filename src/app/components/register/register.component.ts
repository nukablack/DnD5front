import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit{
  public title: string;

  constructor(
  ){
    this.title = 'Regístrate';
  }

  ngOnInit(): void {
    console.log('register.component cargado correctamente');
  }
}
