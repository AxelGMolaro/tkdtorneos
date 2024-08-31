import { Component, Inject, inject, OnInit } from '@angular/core';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { UserService } from '../../../servicers/user.service';
import { UserCredential } from 'firebase/auth';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


 
  constructor(
    @Inject(UserService) private userService: UserService,
    private router : Router
  ){}

  ngOnInit(): void {
      this.takeActionWhenUserIsLogged();
  }

  takeActionWhenUserIsLogged(){
    if (this.userService.hasActiveUser()){
      console.log("entro en aqui")
      this.router.navigateByUrl("")
    }
    console.log("NO entro en aqui")

  }

  async loginWithGoogle(){
    try {
      const credential:UserCredential = await this.userService.loginWithGoogle();
      credential.user.email;
      this.takeActionWhenUserIsLogged();
    } catch (error) {
      console.log(error)      
    }
  }
}
