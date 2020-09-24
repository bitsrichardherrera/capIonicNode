import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() public data: any[] ;
  public searchNumber: string;
  constructor(private http: HttpService, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      // cssClass: 'my-custom-class',
      header: 'Vacio',
      message: 'No hay coincidencias.',
      buttons: ['OK']
    });

    await alert.present();
  }
  public search(){
    console.log(this.searchNumber);
    this.http.getSearchNumber(this.searchNumber).subscribe((resp: any) => {
    console.log(resp.data);
    if (resp.data.length >= 1){
      this.data = resp.data;
    }else{
      this.presentAlert();
    }
  });
  }
}
