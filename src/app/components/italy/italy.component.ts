import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Photo } from 'src/app/photo';
import { PhotoService } from 'src/app/photo.service';

@Component({
  selector: 'app-italy',
  templateUrl: './italy.component.html',
  styleUrls: ['./italy.component.css']
})
export class ItalyComponent {
  public photos: Photo[];
  public updatePhoto: Photo;
  public searchPhotos: Photo[];

  constructor(private photoService: PhotoService) {}

  ngOnInit() { 
    this.getPhotos();
  }

  public openAddForm() {
    document.getElementById("addForm").style.display = "block";
  }
  public closeAddForm() {
    document.getElementById("addForm").style.display = "none";
  }

  public openUpdateForm(photo: Photo) {
    document.getElementById("updateForm").style.display = "block";
    this.updatePhoto = photo;
  }
  public closeUpdateForm() {
    document.getElementById("updateForm").style.display = "none";
  }

  public onAddPhoto(addForm: NgForm): void {
    this.photoService.addPhoto(addForm.value).subscribe(
      (response: Photo) => {
        this.getPhotos();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public getPhotos(): void {
    this.photoService.getPhotos().subscribe( 
      (response: Photo[]) => {
        this.photos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdatePhoto(photo: Photo): void {
    this.photoService.updatePhoto(photo).subscribe(
      (response: Photo) => {
        this.getPhotos();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeletePhoto(photoId: number): void {
    this.photoService.deletePhoto(photoId).subscribe(
      (response: void) => {
        this.getPhotos();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchPhotosByLoc(location: string): void {
    this.searchPhotos = this.photos;
    const results: Photo[] = [];
    for(const photo of this.searchPhotos) {
      if(photo.location.includes(location)) {
        results.push(photo);
      }
    }
    this.searchPhotos = results;
  }
}
