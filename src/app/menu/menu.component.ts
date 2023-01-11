import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public pageTitle: string = "test";
  constructor(
    ) { }

  logout(): void {

  }

  goBack(): void {
    //this.location.back();
  }

  ngOnInit(): void {
  }

}
