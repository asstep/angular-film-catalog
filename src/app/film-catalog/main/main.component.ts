import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
  //styles: [`h2 {color: red;}`, ``]
})
export class MainComponent implements OnInit {
  pageName: string = "Film Catalog Dashboard";

  list: string[] = ['asd', 'asd'];

  filmItem: Object = {
      id: 152,
      name: "Jason Born"
  };

  constructor() { }

  ngOnInit() { }

}
