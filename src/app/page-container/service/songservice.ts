import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { YTResponse } from '../models/YTResponse';

@Injectable()
export class SongService {

    private API_KEY = 'AIzaSyCnrKGn8B6wBp4grO0c2iWz37RYmxkqoW8';
    private url = 'https://www.googleapis.com/youtube/v3/search?key='

    constructor(private http: HttpClient){}

    public searchVideos(songName: string): Observable<any> {
        let url = this.url 
        + this.API_KEY 
        + '&q=' 
        + encodeURIComponent(songName) 
        + '&order=relevance&part=snippet &type=video,id&maxResults=1'
        return this.http.get(url).pipe(take(1));
    } 

}
