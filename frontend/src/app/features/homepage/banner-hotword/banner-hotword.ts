import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselSection } from '@app/features/homepage/banner-hotword/carousel-section/carousel-section';
import { Hotword } from '@app/features/homepage/banner-hotword/hotword/hotword';

@Component({
  selector: 'app-banner-hotword',
  standalone: true,
  imports: [CarouselSection, CommonModule, Hotword],
  templateUrl: './banner-hotword.html',
  styleUrl: './banner-hotword.scss',
})
export class BannerHotword {}
