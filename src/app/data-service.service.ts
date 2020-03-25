import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private knDataUrl = './assets/kn-data.json';
  private request = new HttpRequest('GET', this.knDataUrl,  {
    reportProgress: true
  });

  constructor(private http: HttpClient) { }

  getKNData() {
    /* this.http.request(this.request).subscribe(event => {
      console.log(event);
      if (event.type === HttpEventType.DownloadProgress) {
        console.log(event.loaded, event.total);
        // event.loaded = bytes transfered
        // event.total = "Content-Length", set by the server

        const percentage = 100 / event.total * event.loaded;
        console.log(percentage);
      }
    }); */
    return this.http.get(this.knDataUrl)
      .pipe(
        // tslint:disable-next-line:no-string-literal
        map(response => response['content'])
      );
  }
}
