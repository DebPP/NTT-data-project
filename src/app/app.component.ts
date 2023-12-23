import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InitService } from './services/init.service';
import { HeaderComponent } from './components/header/header.component';
import { BottomComponent } from './components/bottom/bottom.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HttpClientModule, HeaderComponent, BottomComponent],
    providers:[InitService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent{
    title = 'ntt-data-project';
}
