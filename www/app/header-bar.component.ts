import {Component, Input} from "angular2/core";
import {Manga} from "./manga";

@Component({
	selector : "header-bar",
	template : `
		<div class="bar bar-header bar-positive">
	      <button class="button button-icon icon ion-navicon"></button>
	      <h1 class="title">{{title}} <span *ngIf="manga" style="font-size:8px">- {{manga.name}}</span></h1>
	    </div>
	`
})

export class HeaderBarComponent {
	public title = "Mangako";
	@Input() manga: Manga;
}