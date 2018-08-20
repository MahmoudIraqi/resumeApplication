import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'left-bar-comp',
  templateUrl: './left-bar.components.html',
  styleUrls: ['./left-bar.components.css']
})
export class LeftBarComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
  }
}
