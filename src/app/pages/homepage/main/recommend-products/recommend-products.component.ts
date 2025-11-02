import { Component } from '@angular/core';
import { Header } from '@pages/homepage/main/recommend-products/header/header.component';

@Component({
  selector: 'app-recommend-products',
  standalone: true,
  imports: [Header],
  templateUrl: './recommend-products.html',
  styleUrl: './recommend-products.css',
})
export class RecommendProducts {}
