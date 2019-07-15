import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {



  languageList = [
    { code: 'en', label: 'EN' },
    { code: 'cs', label: 'CZ' }

  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) { }

  ngOnInit() {
  }

}
