import { Component, Input } from '@angular/core';
import { StarsComponent } from '../stars/stars.component';
import { ImbdApiModel } from '../../models/imdb-api.model';
import { RatingsModel } from '../../models/ratings.model';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
	selector: 'app-rating-stars',
	standalone: true,
	imports: [CommonModule, StarsComponent],
	templateUrl: './rating-stars.component.html',
	styleUrl: './rating-stars.component.scss'
})
export class RatingStarsComponent {

	@Input() ratings: Array<RatingsModel>;

	
}
