import {Injectable} from "angular2/core";
import {Manga} from "./manga";
import {mangas} from "./mock-mangas";

@Injectable() export class MangaService {
	getMangas() {
		return Promise.resolve(mangas);
	}	

}