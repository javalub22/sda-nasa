import {Component, OnInit} from '@angular/core';
import {NasaClientService} from '../../services/nasa-client.service';
import {Photo} from '../../models/nasa';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private nasaClientService: NasaClientService) {
  }

  ngOnInit(): void {
    this.nasaClientService.getPhotos(new Date('2015-06-03T00:00:00')).toPromise().then(
      response => this.photos = response.photos
    );
  }

}
