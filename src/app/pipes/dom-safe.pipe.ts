import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domSafe'
})
export class DomSafePipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string): SafeResourceUrl {
    const url = 'https://open.spotify.com/embed/album/';
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
