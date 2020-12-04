import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCO3F9m_8BisaLRfL4zpHyALw0f4D3j7-xaiR8pR0xZklitbt3eRKneaMck64XaNpbAiJ9qD_TO9_DtxNRFcwj_M2g4P3xdUAfJVu5WCimAfCiRLRPLqXkGmHbfxOqnuVM9DajdsyRAZFDlGu-hrV6798gec2z8N7w'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums']['items']));
  }

  getArtist(term: string): Observable<any> {
    return this.getQuery(`search?q=${term}&limit=15&type=artist`)
      .pipe(map(data => data['artists']['items']));
  }

}
