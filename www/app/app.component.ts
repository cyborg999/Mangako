import {Component, OnInit} from 'angular2/core';
import {Manga} from "./manga";
import {HeaderBarComponent} from "./header-bar.component";
import {MangaService} from "./manga.service";

@Component({
    selector: 'my-app',
    template: `
    <div class="bar bar-subheader bar-stable item-input-inset">
      <label class="item-input-wrapper">
        <i class="icon ion-ios-search placeholder-icon"></i>
        <input type="search" placeholder="Search">
      </label>
    </div>
    <br>
    <br>
    <div class="list card" *ngFor="#manga of mangas">
      <div class="item item-avatar">
        <img src="{{manga.authorDp}}">
        <h2>{{manga.authorId}}</h2>
        <p>{{manga.dateAdded}}</p>
      </div>
      <div class="item item-body">
        <img class="full-image" src="{{manga.preview}}" (click)="onSelect(manga)">
        <h3 (click)="onSelect(manga)">{{manga.name}}</h3>
        <p>{{manga.description}}</p>
        <p><a href="#" class="subdued">{{manga.likes}} Like</a><a href="#" class="subdued">{{manga.comments}} Comments</a></p>
      </div>
    </div>
    <header-bar [manga]="selectedManga"></header-bar>

   	<div class="tabs tabs-icon-top">
      <a class="tab-item">
        <i class="icon ion-home"></i>
        Home
      </a>
      <a class="tab-item">
        <i class="icon ion-star"></i>
        Favorites
      </a>
      <a class="tab-item">
        <i class="icon ion-gear-a"></i>
        Settings
      </a>
    </div>
    `,
    directives : [HeaderBarComponent],
    providers : [MangaService]
})

export class AppComponent implements OnInit { 
	mangas : Manga[];
	selectedManga : Manga;

	constructor(private _mangaService: MangaService){}

  getMangas() {
    this._mangaService.getMangas().then(mangas=>this.mangas=mangas);
  }

	ngOnInit() {
		this.getMangas();
	}

	onSelect(manga:Manga){
		this.selectedManga = manga;
		console.log("clicked");
	}
}

