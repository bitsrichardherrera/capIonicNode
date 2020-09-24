import { Component, EventEmitter, Input, OnInit, SimpleChanges  } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() public data: any[] ;
  @Input() public idDefault = '';
  public searchNumber: string;

  constructor(private http: HttpService, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.searchById(this.idDefault);
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Vacio',
      message: 'No hay coincidencias.',
      buttons: ['OK']
    });

    await alert.present();
  }
  public search(){
    this.http.getSearchNumber(this.searchNumber).subscribe((resp: any) => {
    if (resp.data.length >= 1){
      this.data = resp.data ;
    }else{
      this.presentAlert();
    }
  });
  }
  public viewData(id: string){
    this.searchById(id);
  }

  private searchById(id){
    if (id) {
      this.http.getCuentaId(id).subscribe((resp: any) => {
        // this.data = [resp.data];
      });
    }
  }
}
