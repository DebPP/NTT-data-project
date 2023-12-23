import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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
		switch(this.rating.Source) {
			case "Internet Movie Database":
				return this.ImdbFormat(starNumber);
			case "Rotten Tomatoes":
				return  this.rtFormat(starNumber);
				case "Metacritic":
				return  this.metaFormat(starNumber);
			default: return false;
		}
	}

	ImdbFormat(starNumber: number): boolean {
		let aux = this.rating.Value.split("/");
		let value = aux[0];
		if (this.rating.Value !== "N/A" && ((Math.floor(+value)/2) > starNumber)) {
			return true;
		} else {
			return false;
		}
	}

	rtFormat(starNumber: number): boolean {
		let aux = this.rating.Value.split("%");
		let value = aux[0];
		let format = (+value*5)/100;
		if (this.rating.Value !== "N/A" && format > starNumber) {
			return true;
		} else {
			return false;
		}
	}

	metaFormat(starNumber: number): boolean {
		let aux = this.rating.Value.split("/");
		let value = aux[0];
		if (this.rating.Value !== "N/A" && ((+value*5)/100 > starNumber)) {
			return true;
		} else {
			return false;
		}
	}
}
