import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc, getDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) {}

  // Método para guardar la selección de la canción
  saveSongSelection(selectedSong: string): Promise<void> {
    const songRef = doc(this.firestore, 'selections/userSelection');
    return setDoc(songRef, { song: selectedSong });
  }
  
  getSongSelection(): Observable<any> {
    const songRef = doc(this.firestore, 'selections/userSelection');
    return docData(songRef);
  }
  }
