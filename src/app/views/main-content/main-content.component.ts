import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { InitService } from '../../services/init.service';
import { ImbdApiModel } from '../../models/imdb-api.model';
import { CommonModule } from '@angular/common';
import { RatingStarsComponent } from '../../components/rating-stars/rating-stars.component';
import { AlertsComponent } from '../../components/alerts/alerts.component';

@Component({
	selector: 'app-main-content',
	standalone: true,
	imports: [SearchBarComponent, CommonModule, RatingStarsComponent, AlertsComponent],
	providers: [InitService],
	templateUrl: './main-content.component.html',
	styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit {
	data: ImbdApiModel;
	align: "right" | "center" | "left" = "center";
	defaultTitle: string = "Guide Flix";
	defaultSubtitle: string = "Aqui você pode achar seus filmes favoritos e séries de TV de uma forma simples e fácil!";
	favorites: Array<string> = [];
	isFavorite: boolean = false;

	constructor(private service: InitService) { }

	ngOnInit(): void {

	}

	getTitle(event: string): void {
		if (typeof event === "string") {
			this.service.getAll(event)
				.subscribe(response => {
					this.data = response;
					this.isFavorite = false;

					if (this.favorites.includes(this.data.imdbID)) {
						this.isFavorite = true;
					}
				})
		}
	}

	saveFavorite(imdbID: string): void {
		this.favorites.push(this.data.imdbID);
		this.isFavorite = true;
	}

	removeFavorite(imdbID: string): void {
		let i = this.favorites.indexOf(imdbID)
		this.favorites.splice(i, 1);
		this.isFavorite = false;
	}

}
