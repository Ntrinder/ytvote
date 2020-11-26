import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit, OnChanges {

  @Input() public videoId = null;
  @ViewChild(YouTubePlayer) ytPlayer;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.startVideo();
  }
  
  public startVideo() {
    setTimeout(() => this.ytPlayer.playVideo(), 500);
  }

}
