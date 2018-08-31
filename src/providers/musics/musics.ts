import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MusicsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/* const API:string ="https://raw.githubusercontent.com/CsgeeksYoutube/ionic-music-app-data-file/master/New%20Text%20Document.json"; */
const API:string ="http://128.199.163.181/api/deepdata.php";

@Injectable()
export class MusicsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MusicsProvider Provider');
  }
  getMusic(){
  	return this.http.get<any[]>(API);
  		 		
  }

}
