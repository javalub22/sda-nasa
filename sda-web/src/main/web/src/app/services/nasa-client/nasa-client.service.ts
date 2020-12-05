import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '../../models/nasa';
import {DatePipe} from '@angular/common';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaClientService {
  apiKey = 'x8vNc6I7QA7EBtsHkX3TAq78VGLhbqh2wnIG6sLE';
  url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=';

  constructor(private http: HttpClient,
              private dataPipe: DatePipe) {
  }

  public getPhotos(date: Date): Observable<Response> {
    const dateString = this.dataPipe.transform(date, 'yyyy-MM-dd');
    return this.http.get<Response>(this.url + dateString + '&api_key=' + this.apiKey);
  }
}
