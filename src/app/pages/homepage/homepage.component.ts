import { Component } from '@angular/core';
import { BannerHotword } from '@pages/homepage/banner-hotword/banner-hotword.component';
import { Main } from '@pages/homepage/main/main.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [BannerHotword, Main],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {}
