import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  CLIENTID = "44e144db91b849f4b5b367e33a098006";
  CLIENTSECRET = "cbcf411a84c442f5ba81068eb9a5bdeb";
  token: string = undefined;

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums']['items']));
  }

  getArtists(term: string): Observable<any> {
    return this.getQuery(`search?q=${term}&limit=15&type=artist`)
      .pipe(map(data => {console.log(data); return data['artists']['items']}));
  }

  getArtist(id: string): Observable<any> {
    return this.getQuery(`artists/${id}`);
  } 

  getTracks(id: string): Observable<any> {
    return this.getQuery(`albums/${id}/tracks`)
      .pipe(map(data => data['items']));
  }

  getAlbums(id: string): Observable<any> {
    return this.getQuery(`artists/${id}/albums`)
      .pipe(map(data => data['items']));
  }

  getTokenAuth(): Observable<any> {
    const body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', this.CLIENTID)
      .set('client_secret', this.CLIENTSECRET);
    
    return this.http.post('https://accounts.spotify.com/api/token', body.toString(),
    { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') })
      .pipe(map(res => {
        localStorage.setItem('token', res['access_token']);
        this.token = res['access_token'];
        return this.token;
      }));
  }

  useCredentials() {
    this.token = localStorage.getItem('token');
  }

}
