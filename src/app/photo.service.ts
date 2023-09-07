import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getPhotos(): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${this.apiServerUrl}/photo/all`);
    }

    public addPhoto(photo: Photo): Observable<Photo> {
        return this.http.post<Photo>(`${this.apiServerUrl}/photo/add`, photo);
    }

    public updatePhoto(photo: Photo): Observable<Photo> {
        return this.http.put<Photo>(`${this.apiServerUrl}/photo/update`, photo);
    }

    public deletePhoto(photoId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/photo/delete/${photoId}`);
    }
}