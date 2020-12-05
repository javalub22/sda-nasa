import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaClientService {
  apiKey = 'x8vNc6I7QA7EBtsHkX3TAq78VGLhbqh2wnIG6sLE';
  url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=' + this.apiKey;

  constructor(private http: HttpClient) {
  }

  public getPhotos(): any {
    return this.http.get(this.url);
  }
}
