import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { SpotifyService } from '../../services/spotify.service';
import { AlbumTracksComponent } from '../album-tracks/album-tracks.component';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {

  artist: any = {};
  albums: any[] = [];
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private spotify: SpotifyService,
              private dialog: MatDialog) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.spotify.useCredentials();
      this.getArtist(params['id']);
      this.getAlbums(params['id']);
    });
   }

   getArtist(id: string) {
     this.spotify.getArtist(id).subscribe(artist => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
     });
   }

   getAlbums(id: string) {
     this.spotify.getAlbums(id).subscribe(albums => {
       console.log(albums);
       this.albums = albums;
     });
   }

  openTracks(id: string) {
    this.dialog.open(AlbumTracksComponent, { data: { id }, panelClass: 'my-custom-dialog-class' });
   }

}
