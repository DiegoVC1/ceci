import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat'; // Usamos @angular/fire/compat para la compatibilidad
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // También en compat
import { environment } from '../environments/environment';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializa Firebase
    AngularFirestoreModule, // Permite interactuar con Firestore
  ],
  providers: [],
})
export class AppModule { }