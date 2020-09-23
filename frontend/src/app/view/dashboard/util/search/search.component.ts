import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchValue: string;
  public data: any[] = [];

  constructor( private http: HttpService) { }

  ngOnInit() {
    this.http.getTelephones()
    .subscribe( (resp: any) => {
      this.data.push(resp.data);
    });
    console.dir(this.data);
  }

  public search(){
    console.log(
      this.searchValue
    );
  }
}
