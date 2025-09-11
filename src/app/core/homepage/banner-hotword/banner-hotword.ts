import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselWrapper } from '../../../shared/carousel/carousel-wrapper/carousel-wrapper';
import { Hotword } from "./hotword/hotword";

@Component({
  selector: 'app-banner-hotword',
  imports: [CarouselWrapper, CommonModule, Hotword],
  templateUrl: './banner-hotword.html',
  styleUrl: './banner-hotword.css'
})
export class BannerHotword {
  
  
}
