import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

export const appConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
provideFirestore(() => getFirestore()),
  ],
};

