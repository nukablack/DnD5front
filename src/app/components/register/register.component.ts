import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit{
  public title: string;
  public user: User;

  constructor(
  ){
    this.title = 'Regístrate';
    this.user = new User(1, 'ROLE_USER', '', '', '');
  }

  ngOnInit(): void {
    console.log('register.component cargado correctamente');
  }

  onSubmit(){
    console.log(this.user);
  }
}
