import { Component, OnInit } from '@angular/core';
import { AppAvailability} from '@ionic-native/app-availability/ngx';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {Device } from '@ionic-native/device/ngx';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  private phoneNumber = "593989389265";
  private text = "";
  

  constructor( private appAvailability:AppAvailability, private inAppBrowser: InAppBrowser,private device:Device, private appLauncher: AppLauncher, private platform:Platform) { }

  ngOnInit() {
  }


  launchExternalApp( iosSchemaName: string, androidPackageName: string) {
    
    let app: string
    const options: AppLauncherOptions = {
     
    }
    
    if(this.platform.is('ios')) {
      options.uri = iosSchemaName;
      app = iosSchemaName;
      window.open("http://wa.me/593989389265?text=I'm%20interested%20in%20your%20car%20for%20sale", '_system');
    } else {
      options.packageName = androidPackageName;
      app = androidPackageName;
      window.open("http://wa.me/593989389265?text=I'm%20interested%20in%20your%20car%20for%20sale", '_system');
    }

  }
  

  openWhatsApp(){
    this.launchExternalApp('whatsapp:// ','com.whatsapp' );
  }


}