import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule]
})
export class AppComponent {
  title = 'ceci';  // Agrega la propiedad title
  selectedSong: SafeResourceUrl | null = null;
  song1: string = 'https://www.youtube.com/embed/4dDZHtk8Ies?si=HeP5PfRr9f5C6S17';
  song2: string = 'https://www.youtube.com/embed/7-Ikexq03O0?si=pEM0JHktLvxmTMZl';
  songLocked = false;
  password: string = '';

  constructor(
    private sanitizer: DomSanitizer,
    private firebaseService: FirebaseService
  ) {
    this.firebaseService.getSongSelection().subscribe((data) => {
      if (data?.song) {
        this.selectedSong = this.sanitizer.bypassSecurityTrustResourceUrl(data.song);
        this.songLocked = true;
      }
    });
  }

  selectSong(song: string) {
    this.firebaseService.saveSongSelection(song).then(() => {
      this.selectedSong = this.sanitizer.bypassSecurityTrustResourceUrl(song);
      this.songLocked = true;
    });
  }

  resetSelection() {
    if (this.password === '3239') {
      this.firebaseService.saveSongSelection('').then(() => {
        this.songLocked = false;
        this.password = '';
        this.selectedSong = null;
      });
    }
  }
}