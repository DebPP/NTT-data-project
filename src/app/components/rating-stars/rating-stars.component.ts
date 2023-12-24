import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from '../stars/stars.component';
import { RatingsModel } from '../../models/ratings.model';

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
