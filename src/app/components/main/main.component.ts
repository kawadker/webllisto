import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {
  isloader:boolean= false;
  constructor(
    private router: Router,
  ) {
   }
  ngOnInit(): void {
    // this.navigateRout(this.menu[0], 0)
  }
  navigateRout(items, i) {
  }

}
