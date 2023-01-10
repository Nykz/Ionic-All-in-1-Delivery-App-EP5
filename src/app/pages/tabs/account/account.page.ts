import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  options: any[] = [];

  constructor() { }

  ngOnInit() {
    this.options = [
      { id: 1, name: 'Saved Addresses', img: 'address.png' },
      { id: 2, name: 'Jokar Pass', img: 'pass.png' },
      { id: 3, name: 'Refer a friend', icon: 'share-social', color: 'primary' },
      { id: 4, name: 'Support', img: 'life-guard.png' },
      { id: 5, name: 'About', icon: 'information' },
      { id: 6, name: 'Logout', icon: 'power', color: 'danger' },
    ];
  }

}
