import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotwordItem } from '@features/homepage/banner-hotword/hotword/hotword-item/hotword-item';

@Component({
  selector: 'app-hotword',
  standalone: true,
  imports: [CommonModule, HotwordItem],
  templateUrl: './hotword.html',
  styleUrl: './hotword.css',
})
export class Hotword {
  hotwords = [
    {
      url: 'https://shopee.vn/m/shopee-sieu-re',
      imageSrc: 'https://cf.shopee.vn/file/vn-11134258-820l4-mee7bqy48xl123_xhdpi',
      text: 'Deal Từ 1.000Đ',
    },
    {
      url: 'https://shopee.vn/m/shopee-sieu-re',
      imageSrc: 'https://cf.shopee.vn/file/vn-11134258-820l4-me8fqvek00slb5_xhdpi',
      text: 'Siêu Hội\nThành Viên',
    },
    {
      url: 'https://shopee.vn/m/shopee-sieu-re',
      imageSrc: 'https://cf.shopee.vn/file/vn-11134258-820l4-mee7bqy48xl123_xhdpi',
      text: 'Deal Hot\nGiờ Vàng',
    },
    {
      url: 'https://shopee.vn/m/shopee-sieu-re',
      imageSrc: 'https://cf.shopee.vn/file/vn-11134258-820l4-mee7bqy48xl123_xhdpi',
      text: 'Deal Từ 1.000Đ',
    },
    {
      url: 'https://shopee.vn/m/shopee-sieu-re',
      imageSrc: 'https://cf.shopee.vn/file/vn-11134258-820l4-mee7bqy48xl123_xhdpi',
      text: 'Deal Từ 1.000Đ',
    },
    {
      url: 'https://shopee.vn/m/shopee-sieu-re',
      imageSrc: 'https://cf.shopee.vn/file/vn-11134258-820l4-mee7bqy48xl123_xhdpi',
      text: 'Deal Từ 1.000Đ',
    },
    {
      url: 'https://shopee.vn/m/shopee-sieu-re',
      imageSrc: 'https://cf.shopee.vn/file/vn-11134258-820l4-mee7bqy48xl123_xhdpi',
      text: 'Deal Từ 1.000Đ',
    },
  ];
}
