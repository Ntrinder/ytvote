import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { PageContainerComponent } from './page-container/page-container.component';
import { HeaderComponent } from './page-container/header/header.component';
import { ScreenComponent } from './page-container/screen/screen.component';
import { SongService } from './page-container/service/songservice';
import { SongComponent } from './page-container/song/song.component';
import { SonglistComponent } from './page-container/songlist/songlist.component';
import { UrlpasterComponent } from './page-container/urlpaster/urlpaster.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScreenComponent,
    UrlpasterComponent,
    SonglistComponent,
    SongComponent,
    PageContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [
    SongService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
