import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private spotify: SpotifyService) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
   }

   getArtist(id: string) {
     this.spotify.getArtist(id).subscribe(artist => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
     });
   }

   getTopTracks(id: string) {
     this.spotify.getTopTracks(id).subscribe(topTracks => {
       console.log(topTracks);
       this.topTracks = topTracks;
     });
   }

}
