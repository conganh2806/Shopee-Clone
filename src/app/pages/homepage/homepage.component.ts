import { Component } from '@angular/core';
import { BannerHotword } from './banner-hotword/banner-hotword.component';
import { Main } from './main/main.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [BannerHotword, Main],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {}
