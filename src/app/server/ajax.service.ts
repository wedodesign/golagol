import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  url: string = "https://golagol.cf/_app/Ajax/";

  constructor(private http: HTTP) { }

  urlGet() {
    return this.url;
  }
}
