import { Component, OnInit } from '@angular/core';
import { Router, Event as NavigationEvent, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  activeRoute : string = '';
  constructor(private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.getDataRoute();
  }
  getDataRoute() {
    this.router.events.pipe(filter((e: NavigationEvent) => e instanceof NavigationStart))
    .subscribe((e: NavigationStart) => {
      console.log(e);
      this.activeRoute = e.url || ''; 
    });
  }
  applyClass(progress) {
    if(progress === 1) return true;
    else if(progress === 2 && (this.activeRoute === '/link2' || this.activeRoute === '/link3')) return true;
    else if((progress === 3 || progress === 2) &&  this.activeRoute === '/link4') return true;
  }
}
