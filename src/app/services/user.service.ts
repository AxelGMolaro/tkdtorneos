import { inject, Injectable, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, User, UserCredential } from "firebase/auth";
import {environment} from "../../environments/environment"
import { GoogleAuthProvider } from "firebase/auth";
import { Route, Router } from '@angular/router';
import { Firestore, collection, query, where, getDocs, addDoc } from '@angular/fire/firestore';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  
  // firebaseApp: any;

  constructor(
    private router: Router,
    private firestore: Firestore
  ) { 
  }

  ngOnInit(): void {
    //  this.firebaseApp = initializeApp(environment.firebaseConfig);
   

  }




  /**
   * Optiene un usuario por mail
   * @param email 
   * @returns 
   */
  async getUserByEmail(email: string): Promise<IUser | null> {
    const usersCollection = collection(this.firestore, 'users');

    // Crear la consulta para buscar el documento por el campo 'email'
    const q = query(usersCollection, where('email', '==', email));

    try {
      // Obtener los documentos que coinciden con la consulta
      const querySnapshot = await getDocs(q);

      // Verificar si hay algún documento que coincida
      if (querySnapshot.empty) {
        console.log('No se encontró ningún usuario con ese correo.');
        return null;
      }

      // Iterar sobre los resultados (aunque esperamos solo uno en este caso)
      const userDocs = querySnapshot.docs.map(doc => ({
        id: doc.id,      // Agregar el ID del documento
        ...doc.data()    // Combinar con los datos del documento
      }));

      // Devolver el primer usuario encontrado
      return userDocs[0] as IUser;

    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      throw new Error('No se pudo obtener el usuario');
    }
  }

  /**
   * Chequea en la base de datos si existe un usuario con un determinado mail
   * @param mail 
   * @returns 
   */
  async userExistInDatabase(mail: string){
    const usersCollection = collection(this.firestore, 'users');
    
    // Crear una consulta para buscar un documento cuyo campo 'email' coincida con el email proporcionado
    const q = query(usersCollection, where('email', '==', mail));

    try {
      // Ejecutar la consulta
      const querySnapshot = await getDocs(q);
      
      // Si la consulta devuelve documentos, significa que existe
      if (!querySnapshot.empty) {
        console.log('Usuario encontrado con el email:', mail);
        return true;  // El usuario existe
      } else {
        console.log('No se encontró ningún usuario con el email:', mail);
        return false; // El usuario no existe
      }
    } catch (error) {
      console.error('Error al verificar el usuario: ', error);
      return false; // Manejo de errores
    }
  }

  /**
   * Crea el usuario a partir de un UserCredential
   * @param authUser 
   */
  async createUser(authUser: UserCredential){
    const usersCollection = collection(this.firestore, 'users');

    // Documento que se va a guardar
    const newUser: IUser = {
      name: authUser.user.displayName,
      surname: authUser.user.displayName,
      mail: authUser.user.email
    };

    try {
      // Añadir el nuevo usuario a Firestore
      const docRef = await addDoc(usersCollection, newUser);
      console.log('Usuario creado correctamente con ID:', docRef.id); // ID autogenerado
    } catch (error) {
      console.error('Error al crear el usuario: ', error);
    }
  }

  /**
   * Abre el popup de login con google y si no existia el usuario lo crea si no retorna el que ya existe
   * Devuelve el usuario loguiado
   */
  async loginWithGoogle() : Promise<IUser>{
    const provider = new GoogleAuthProvider();
    try {
      const authUser: UserCredential = await signInWithPopup(getAuth(),provider)
      if(!this.userExistInDatabase){
        await this.createUser(authUser)
      }
      const user: IUser|null = await this.getUserByEmail(authUser.user.email!);
      
      if(!user){
        throw new Error("Error en el login.")
      }
      console.log("Login exitoso")
      return user;
    } catch (error) {
      console.log("Error en login")
      throw error
    }
  }


  /**
   * Valida si el usuario esta activo en la autenticacion de firebase
   * @returns boolean
   */
  hasActiveUser(): boolean{
    if(getAuth().currentUser != null){
      return true;
    }
    return false;
  }

  /**
   * Optiene el usuario activo de firebase
   * @returns User
   */
  getActiveUser(): User | null{
    return getAuth().currentUser;
  }

  /**
   * Desloguea de firebase y navega a la home
   */
  signOut(){
    getAuth().signOut();
    this.router.navigateByUrl("");
  }
  
}
