import { NgOptimizedImage } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IUser } from '../../interfaces/IUser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  user?:IUser|null

  constructor(
    @Inject(UserService) private userService: UserService,
  ){}

  ngOnInit(): void {
    this.userService.getActiveUser().subscribe(
      data => {
        this.user = data
      }
    )
  }


  handleClickLogout(){
    this.userService.signOut()
  }
}
