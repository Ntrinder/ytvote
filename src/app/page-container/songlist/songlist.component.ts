
import { Component, Input, OnInit } from '@angular/core';
import { SongItem } from '../models/SongItem';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.css']
})
export class SonglistComponent implements OnInit {

  @Input() songList: Array<SongItem>;

  constructor() { }

  ngOnInit(): void {
  }

  public updateSongItem($event): void {
    // sort the list of songs highest -> lowest
    this.songList.sort((a, b) => {return b.votes - a.votes});
  }

}
