import {Injectable} from '@angular/core';
import {Photo} from '../../models/nasa';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor() {
  }

  firstPhotoByCamera(photos: Photo[]): Photo[] {
    const cameras: Set<number> = this.getListOfCameras(photos);
    const photoByCamera: Photo[] = [];
    cameras.forEach(cameraId =>
      photoByCamera.push(photos.filter(photo => photo.camera.id === cameraId)[0])
    );
    return photoByCamera;
  }

  private getListOfCameras(photos: Photo[]): Set<number> {
    return new Set(photos.map(photo => photo.camera.id));
  }
}
