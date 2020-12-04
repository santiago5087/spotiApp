import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  search(term: string) {
    this.spotify.getArtist(term)
      .subscribe(data => {
        this.artists = data;
      });
  }

}
