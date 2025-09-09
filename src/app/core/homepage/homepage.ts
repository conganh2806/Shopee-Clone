import { Component } from '@angular/core';
import { BannerHotword } from './banner-hotword/banner-hotword';
import { Main } from './main/main';

@Component({
  selector: 'app-homepage',
  imports: [BannerHotword, Main],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
