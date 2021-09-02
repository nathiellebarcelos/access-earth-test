import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})

export class InboxPage implements OnInit {
  test: { email: string; subject: string; content: string; }[];


  constructor(private router: Router) {
    this.test = [
      {
        email: 'nathielle.barcelos@outlook.com',
        subject: 'Access Earth Code Test',
        content: 'This is a test for Access Earth Intership code test ...'
      },
      {
        email: 'ahaslewood0@weebly.com',
        subject: 'Vacation',
        content: 'I will be on vacation for two weeks starting next week ...'
      },
      {
        email: 'hknuckles1@unesco.org',
        subject: 'Login Error',
        content: 'I am geeting back an error when I try to login in the app ...'
      },
      {
        email: 'kverdy3@taobao.com',
        subject: 'Meeting',
        content: 'Meeting is set to tomorrow @ 3pm ...'
      },
      {
        email: 'khazelhurst4@yellowbook.com',
        subject: 'Hanging out',
        content: 'Lets have a drink after work on friday? ...'
      },
    ];

  }



  removeItem(item: { email: string; subject: string; content: string; }) {
    for (let i = 0; i < this.test.length; i++) {
      if (this.test[i] == item) {
        this.test.splice(i, 1);
      }

    }

  }

  sendItemToTrash() {
    for (let i = 0; i < this.test.length; i++) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(this.test[i])
        }
      };
      this.router.navigate(['trash'], navigationExtras);

    }

  }

  sendItemToSpam() {
    for (let i = 0; i < this.test.length; i++) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(this.test[i])
        }
      };
      this.router.navigate(['spam'], navigationExtras);

    }

  }

  ngOnInit() {
  }

}
