import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smallcard',
  templateUrl: './smallcard.component.html',
  styleUrls: ['./smallcard.component.css']
})
export class SmallcardComponent implements OnInit {
  @Input()
  photoCard:string = "";
  @Input()
  cardTitle:string = "";
  @Input()
  Id:string = "0";


  constructor() { }

  ngOnInit(): void {
  }

}
