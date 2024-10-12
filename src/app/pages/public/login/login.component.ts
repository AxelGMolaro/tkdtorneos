import { Component, Inject, inject, OnInit } from '@angular/core';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { UserService } from '../../../services/user.service';
import { UserCredential } from 'firebase/auth';
import { Route, Router } from '@angular/router';
import { CountryService } from '../../../services/country.service';

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
    @Inject(UserService) private countryService: CountryService,
    private router : Router
  ){}

  

  ngOnInit(): void {
      this.suscribeToUserStore();
      // this.countryService.getAllCountries();
  }

  suscribeToUserStore(){
    this.userService.getActiveUser().subscribe(
      user => {
        if(user){
          this.router.navigateByUrl("")
        }
      },
      error => {
        console.log(error)
      }
    )

  }

  async loginWithGoogle(){
    try {
     await this.userService.loginWithGoogle();
    } catch (error) {
      console.log(error)      
    }
  }
}
