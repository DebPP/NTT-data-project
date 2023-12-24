import { Component, Input, SimpleChange } from '@angular/core';
import { RatingsModel } from '../../models/ratings.model';

@Component({
	selector: 'app-stars',
	standalone: true,
	imports: [],
	templateUrl: './stars.component.html',
	styleUrl: './stars.component.scss'
})
export class StarsComponent {
	@Input() rating: RatingsModel;
	stars = [1, 2, 3, 4, 5];

	OnCheckStar(starNumber: number): boolean {
		if (this.rating.Source === "Internet Movie Database") {
			return this.ImdbFormat(starNumber);
		} else if (this.rating.Source === "Rotten Tomatoes") {
			return this.rtFormat(starNumber);
		} else if (this.rating.Source === "Metacritic") {
			return this.metaFormat(starNumber);
		} else {
			return false;
		}
	}

	ImdbFormat(starNumber: number): boolean {
		let aux = this.rating.Value.split("/");
		let value = Math.floor(+aux[0]) / 2;
		if (value >= starNumber) {
			return true;
		} else {
			return false;
		}
	}

	rtFormat(starNumber: number): boolean {
		let aux = this.rating.Value.split("%");
		let value = (+aux[0] * 5) / 100;
		if (value > starNumber) {
			return true;
		} else {
			return false;
		}
	}

	metaFormat(starNumber: number): boolean {
		let aux = this.rating.Value.split("/");
		let value = (+aux[0] * 5) / 100;
		if (value > starNumber) {
			return true;
		} else {
			return false;
		}
	}
}
