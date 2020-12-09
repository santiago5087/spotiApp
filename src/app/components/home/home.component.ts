import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getTokenAuth().subscribe(data => {
      this.spotify.getNewReleases()
        .subscribe((data) => {
          console.log(data);
          this.newReleases = data;
          this.loading = false;
        }, (error) => {
          this.error = true;
          this.errorMessage = error['error']['error']['message'];
          console.error(error);
        });
      });
  }

}
