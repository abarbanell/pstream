import {Component} from '@angular/core';
import {PhotoService} from '../../services/photos.service';

@Component({
    selector: 'photos',
    template: `
        <h3>Photos Overview</h3>
        <table class="table">
            <thead>
            <td> Name </td>
            <td> date </td>
            <td> image </td>
            <td> camera </td>
            <td> altitude </td>
            </thead>
            <tr *ngFor="let photo of photos">
            <td> {{photo.name}} </td>
            <td> {{photo.createdTime}} </td>
            <td> <a href="{{photo.webViewLink}}"><img src="{{photo.thumbnailLink}}" ></a> </td>
            <td> {{photo.imageMediaMetadata.cameraMake}} {{photo.imageMediaMetadata.cameraModel}} </td>
            <td> {{photo.imageMediaMetadata.location.altitude}} m </td>
            </tr>
        </table>

        last error: {{errorMsg}}
        `,
        providers: [PhotoService]
    
})
export class PhotosComponent {
    private errorMessage: string;
    private photos=[];

    constructor(private photoService: PhotoService) {}

    private ngOnInit() { 
        this.getPhotos();
    }

    private getPhotos() {
        this.photoService.getPhotos().subscribe(
            result => { this.photos = result },
            error => { this.errorMessage = <any>error }
        )
    }

}  