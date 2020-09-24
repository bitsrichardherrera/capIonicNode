import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() public data: any[] ;
  public searchNumber: string;
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  public search(){
    console.log(this.searchNumber);
    this.http.getSearchNumber(this.searchNumber).subscribe((resp: any) => {
    console.log(resp.data);
    if (resp.data.length >= 1){
      console.log('hay data');
    }else{
      console.log('ERROR');
    }
  });
  }
}
