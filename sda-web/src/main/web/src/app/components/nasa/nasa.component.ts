import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../models/nasa';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent implements OnInit {

  @Input()
  photos: Photo[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }

}
