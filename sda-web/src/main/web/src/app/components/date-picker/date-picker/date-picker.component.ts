import {Component, OnInit} from '@angular/core';
import {NasaClientService} from '../../../services/nasa-client/nasa-client.service';
import {PhotosService} from '../../../services/photos/photos.service';
import {Photo} from '../../../models/nasa';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  photos: Photo[] = [];
  date = new Date();

  constructor(private nasaClientService: NasaClientService,
              private photosService: PhotosService) {
  }

  ngOnInit(): void {
  }

  click(): void {
    this.nasaClientService.getPhotos(this.date).toPromise().then(
      response => {
        this.photos = this.photosService.firstPhotoByCamera(response.photos);
        console.log(response.photos);
      }
    );
  }

}
