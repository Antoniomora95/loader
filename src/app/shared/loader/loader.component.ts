import { Component, OnInit } from '@angular/core';
import { Router, Event as NavigationEvent, NavigationStart, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  cssClass = {
    link1: [true, false, false, false],
    link2: [true, true, false, false],
    link3: [true, true, false, false],
    link4: [true, true, true, true],
  };
  activeRoute: string = 'link1';
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.getDataRoute();
  }
  getDataRoute() {
    this.router.events.pipe(filter((e: NavigationEvent) => e instanceof NavigationEnd))
    .subscribe((e: NavigationEnd) => {
      const {urlAfterRedirects} = e;
      this.activeRoute = urlAfterRedirects.replace('/', '');
    });
  }
}
