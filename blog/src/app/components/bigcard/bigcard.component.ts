import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bigcard',
  templateUrl: './bigcard.component.html',
  styleUrls: ['./bigcard.component.css']
})
export class BigcardComponent implements OnInit {
  @Input()
  photoCover:string = "";
  @Input()
  cardTitle:string = "";
  @Input()
  cardDescription:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
