import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaComponent } from './nasa.component';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('NasaComponent', () => {
  let component: NasaComponent;
  let fixture: ComponentFixture<NasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaComponent ],
      imports: [HttpClientTestingModule],
      providers: [DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
