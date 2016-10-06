import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {AuthService} from "./auth.service";
import {Observable} from 'rxjs/Observable';


@Injectable()
export class PhotoService {
    private token: string = null;
    private PhotoUrl = 'https://www.googleapis.com/drive/v3/files?pageSize=15&spaces=photos&fields=files(createdTime%2CimageMediaMetadata%2Cname%2CoriginalFilename%2CthumbnailLink%2CwebContentLink%2CwebViewLink)'
    private files = [];

    constructor(private authService: AuthService, private http: Http) {
        this.token = authService.getSession().token;
        console.log('token: ', this.token);
    }

    public getPhotos(): Observable<any[]> {
        if (this.token != null) {
            var headers = new Headers();
            headers.append('Authorization', `Bearer ${this.token}`);
            //noinspection TypeScriptUnresolvedFunction
            return this.http.get(this.PhotoUrl, { headers: headers })
                .map(res => res.json())
                .map(res => res.files);
        }
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}