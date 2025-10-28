import { Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faQuestionCircle, faGlobe, faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
 
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  faBell = faBell;
  faQuestionCircle = faQuestionCircle;
  faGlobe = faGlobe;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faAngleDown = faAngleDown;
  faSearch = faSearch;

  searchPlaceholder = "VOUCHER THỜI TRANG 888.000Đ";

  hotKeywords: string[] = [
    "Quạt Mini Để Bàn",
    "Áo Khoác Nam",
    "Bàn Phím Bluetooth Cho Điện Thoại",
    "Quà Cầu Pha Lê",
    "Túi Canvas Nam",
    "Khuôn Đá Lăn Mặt",
    "Tản Nhiệt Laptop",
    "Quần Tây Nam Ống Suông"
  ];
}
