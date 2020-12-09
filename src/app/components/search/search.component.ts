import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    this.spotify.useCredentials();
  }

  ngOnInit(): void {
  }

  search(term: string) {
    if(term.length>0) {
      this.loading = true;
      this.spotify.getArtists(term)
        .subscribe(data => {
          console.log(data);
          this.artists = data;
          this.loading = false;
        });
    }
  }

}
