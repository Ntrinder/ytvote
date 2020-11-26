import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SongItem } from '../models/SongItem';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  @Input() songItem: SongItem;
  @Output() songItemChange = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  
  public upvote(): void {
    this.songItem.votes ++;
    this.songItemChange.emit(this.songItem);
  }
  
  public downvote(): void {
    if (this.songItem.votes > 0) {
      this.songItem.votes --;
      this.songItemChange.emit(this.songItem);
    }
  }

}
