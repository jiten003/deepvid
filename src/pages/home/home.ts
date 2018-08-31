import { Component } from '@angular/core';
import { NavController,LoadingController, ActionSheetController} from 'ionic-angular';
import { MusicsProvider } from '../../providers/musics/musics';
import {SocialSharing} from "@ionic-native/social-sharing";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public allMusic =[];

  constructor(public navCtrl: NavController,
    private SocialSharing:SocialSharing,
    private actionSheet : ActionSheetController,
    public LoadingController:LoadingController,
    private musicProvider: MusicsProvider) {
  	

  }



  ionViewDidLoad(){
    let allMusicLoadingcontroller = this.LoadingController.create({
       content: "Getting your videos"

    });
    allMusicLoadingcontroller.present();
  
    this.musicProvider.getMusic()
      .subscribe( (musicList) => 
      {
        allMusicLoadingcontroller.dismiss();
        this.allMusic= musicList
      });
  }
 
 sharesong(music){
let shareSongSheet = this.actionSheet.create({
title:"Share Video",
buttons:[
  {
    text: "Facebook",
    icon: "logo-facebook",
    handler:()=>{
      this.SocialSharing.shareViaFacebook(music.video_name, music.poater)
    }
},
  {
    text:"Twitter",
    icon:"logo-twitter",
    handler:()=>{
      this.SocialSharing.shareViaTwitter(music.video_name, music.poater)
    }

  },
  {
    text:"Share",
    icon:"share",
    handler:()=>{
      this.SocialSharing.share(music.video_name, music.poater)
    }
  
  }
]

});
shareSongSheet.present();


 }

  

}
