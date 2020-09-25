import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tarjet',
  templateUrl: './tarjet.component.html',
  styleUrls: ['./tarjet.component.scss'],
})
export class TarjetComponent implements OnInit, OnChanges {
  @Input() public dataIntro: any[];
  public arrayData = [];
  constructor() { }

  ngOnInit() {}

  ngOnChanges(cambios: SimpleChanges) {
    if (this.dataIntro !== undefined) {
      this.arrayData = this.dataIntro;
      this.converDataIntro();
    }
  }

  private converDataIntro() {
    console.log(this.arrayData);
  }
}
