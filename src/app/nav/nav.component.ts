import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 50px;
      }
      @media (max-width: 120px) {
        #searchForm {display:none}};
      }
    `
  ]
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
