import { Component, OnInit } from '@angular/core';
import { SongItem } from './models/SongItem';
import { SongService } from './service/songservice';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements OnInit {

  public vidId: string;
    
  public songlist: Array<SongItem> = [
  ];

  constructor(private songservice: SongService){}

  ngOnInit() {
  }

  public search(searchCriteria) {
    this.songservice.searchVideos(searchCriteria).subscribe(resp => {
      this.vidId = resp.items[0].id.videoId;
      let newSong: SongItem = {
        "title": searchCriteria, "videoId": this.vidId, "votes": 0
      }
      this.songlist.push(newSong);
    });
  }

}



