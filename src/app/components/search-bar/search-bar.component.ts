import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-search-bar',
	standalone: true,
	imports: [FormsModule, ReactiveFormsModule],
	templateUrl: './search-bar.component.html',
	styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit {
	@Output() search: EventEmitter<string> = new EventEmitter();
	form: FormGroup;

	constructor(private formBuilder: FormBuilder){}

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			itemPesquisa: ['', Validators.required]
		});
	}

	onSearch(): void {
		this.search.emit(this.form.get('itemPesquisa')?.value);
	}
}
