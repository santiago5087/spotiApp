import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases()
      .subscribe((data) => {
        console.log(data);
        this.newReleases = data
      })
  }

  ngOnInit(): void {
  }

}
