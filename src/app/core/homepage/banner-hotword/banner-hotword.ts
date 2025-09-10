import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselWrapper } from '../../../shared/carousel/carousel-wrapper/carousel-wrapper';

@Component({
  selector: 'app-banner-hotword',
  imports: [CarouselWrapper, CommonModule ],
  templateUrl: './banner-hotword.html',
  styleUrl: './banner-hotword.css'
})
export class BannerHotword {
  hotwords = [
    { url: "https://shopee.vn/m/shopee-sieu-re", imageSrc: "https://cf.shopee.vn/file/vn-11134258-820l4-mee7bqy48xl123_xhdpi", text: "Deal Từ 1.000Đ"},
    { url: "https://shopee.vn/m/shopee-sieu-re", imageSrc: "https://cf.shopee.vn/file/vn-11134258-820l4-me8fqvek00slb5_xhdpi", text: "Siêu Hội Thành Viên"},
    { url: "https://shopee.vn/m/shopee-sieu-re", imageSrc: "https://cf.shopee.vn/file/vn-11134258-820l4-mee7bqy48xl123_xhdpi", text: "Deal Từ 1.000Đ"},
    { url: "https://shopee.vn/m/shopee-sieu-re", imageSrc: "https://cf.shopee.vn/file/vn-11134258-820l4-mee7bqy48xl123_xhdpi", text: "Deal Từ 1.000Đ"},
    { url: "https://shopee.vn/m/shopee-sieu-re", imageSrc: "https://cf.shopee.vn/file/vn-11134258-820l4-mee7bqy48xl123_xhdpi", text: "Deal Từ 1.000Đ"},
    { url: "https://shopee.vn/m/shopee-sieu-re", imageSrc: "https://cf.shopee.vn/file/vn-11134258-820l4-mee7bqy48xl123_xhdpi", text: "Deal Từ 1.000Đ"},
    { url: "https://shopee.vn/m/shopee-sieu-re", imageSrc: "https://cf.shopee.vn/file/vn-11134258-820l4-mee7bqy48xl123_xhdpi", text: "Deal Từ 1.000Đ"},
  ]

  
}
