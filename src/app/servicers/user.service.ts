import { inject, Injectable, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, User, UserCredential } from "firebase/auth";
import {environment} from "../../environments/environment"
import { GoogleAuthProvider } from "firebase/auth";
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  
  // firebaseApp: any;

  constructor(
    private router: Router
  ) { 
    const firebaseApp = initializeApp(environment.firebaseConfig);
    const auth = getAuth(firebaseApp);
  }

  ngOnInit(): void {
    //  this.firebaseApp = initializeApp(environment.firebaseConfig);
   

  }

  async loginWithGoogle() : Promise<UserCredential>{
    const provider = new GoogleAuthProvider();
    try {
      const response = signInWithPopup(getAuth(),provider)
      return response;
    } catch (error) {
      throw error
    }
  }

  hasActiveUser(): boolean{
    if(getAuth().currentUser != null){
      return true;
    }
    return false;
  }
  
  getActiveUser(): User | null{
    return getAuth().currentUser;
  }

  signOut(){
    getAuth().signOut();
    this.router.navigateByUrl("");
  }
  
}
