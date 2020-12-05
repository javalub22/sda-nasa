import {Component, OnInit} from '@angular/core';
import {NasaClientService} from '../../services/nasa-client/nasa-client.service';
import {Photo} from '../../models/nasa';
import {PhotosService} from '../../services/photos/photos.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private nasaClientService: NasaClientService,
              private photosService: PhotosService) {
  }

  ngOnInit(): void {
    this.nasaClientService.getPhotos(new Date('2020-12-03T00:00:00')).toPromise().then(
      response => {
        this.photos = this.photosService.firstPhotoByCamera(response.photos);
        console.log(response.photos);
      }
    );
  }

}
