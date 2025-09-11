import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotword-item',
  imports: [CommonModule],
  templateUrl: './hotword-item.html',
  styleUrl: './hotword-item.css'
})
export class HotwordItem {
  @Input() url: string = "";
  @Input() imageSrc: string = "";
  @Input() text: string = "";
}
