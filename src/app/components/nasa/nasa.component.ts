import {Component, OnInit} from '@angular/core';
import {NasaClientService} from '../../services/nasa-client.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent implements OnInit {

  response = {};

  constructor(private nasaClientService: NasaClientService) {
  }

  ngOnInit(): void {
    this.nasaClientService.getPhotos().toPromise().then(
      response => this.response = response
    );
  }

}
