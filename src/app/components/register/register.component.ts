import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params, Route} from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  providers: [UserService]
})

export class RegisterComponent implements OnInit{
  public title: string;
  public user: User;
  public status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ){
    this.title = 'Regístrate';
    this.user = new User('', '', '');
  }

  ngOnInit(): void {
    console.log('register.component cargado correctamente');
  }

  onSubmit(){
    this._userService.register(this.user).subscribe(
      response => {
        if (response.status === 'success'){
          this.status = response.status;
          //Vaciar el formulario
          this.user = new User('', '', '');
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
