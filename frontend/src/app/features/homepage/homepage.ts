import { Component } from '@angular/core';
import { BannerHotword } from '@features/homepage/banner-hotword/banner-hotword';
import { MainComponent } from '@features/homepage/main/main';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [BannerHotword, MainComponent],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class HomepageComponent {}
