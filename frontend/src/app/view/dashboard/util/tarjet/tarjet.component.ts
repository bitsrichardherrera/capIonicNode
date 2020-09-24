import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjet',
  templateUrl: './tarjet.component.html',
  styleUrls: ['./tarjet.component.scss'],
})
export class TarjetComponent implements OnInit {
  @Input() public data: any[];
  constructor() { }

  ngOnInit() {
  }
}
