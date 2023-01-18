import {Component, Input, OnInit} from '@angular/core';
import {Location} from "@angular/common";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() pageTitle = '';

  constructor(private location: Location) {
  }

  logout(): void {
   location.assign("./login");
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
