import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  developerName = 'Gaurav Bansal';
  navigationList = ['Home', 'About', 'Contact', 'Tech', 'Course', 'Resources'];
  constructor() {}

  ngOnInit(): void {}
}
