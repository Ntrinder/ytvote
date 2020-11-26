import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-urlpaster',
  templateUrl: './urlpaster.component.html',
  styleUrls: ['./urlpaster.component.css']
})
export class UrlpasterComponent implements OnInit {

  searchForm;

  @Output() song = new EventEmitter;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({searchCriteria: ''});
  }

  ngOnInit(): void {
  }

  public search(searchCriteria): void {
    this.song.emit(searchCriteria.searchCriteria);
  }

}
