import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public id: number = 0;
  heroes$: Observable<any>;
  selectedId: number;
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() {
    console.log('fdvfd');
    // this.id = +this.route.snapshot.paramMap.get('id');
    // console.log('test', this.id);

    this.route.paramMap.subscribe(params => {
      console.log('cds');
      this.selectedId = +params.get('id');
    });
    console.log('test2', this.selectedId);

  }
}
