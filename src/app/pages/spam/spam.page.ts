import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-spam',
  templateUrl: './spam.page.html',
  styleUrls: ['./spam.page.scss'],
})
export class SpamPage implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      console.log('params: ', params);
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });
  }

  ngOnInit() {
  }

}
