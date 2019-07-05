import { Component, OnInit } from '@angular/core';
import { AppAvailability} from '@ionic-native/app-availability/ngx';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
// import {Device } from '@ionic-native/device/ngx'

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  private phoneNumber = "593989389265";
  private text = "";



  constructor( private appAvailability:AppAvailability, private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
  }

  // launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string) {
    
  //   let app: string;

  //   if (this.device.platform === 'iOS') {
  //     app = iosSchemaName;
  //   } else if (this.device.platform === 'Android') {
  //     app = androidPackageName;
  //   } else {
  //     let browser = new InAppBrowser(appUrl, '_system');
  //     return;
  //   }
  


  //   this.appAvailability.check(app).then(
  //     () => { // success callback
  //       let browser = new InAppBrowser(appUrl , '_system');
  //     },
  //     () => { // error callback
  //       let browser = new InAppBrowser(httpUrl , '_system');
  //     }
  //   );
  // }
  

  // openWhatsApp(){
  //   this.launchExternalApp('whatsapp:// ','com.whatsapp','http://wa.me/','http://wa.me/' )
  // }


  whatsAppMessage(){
    window.open("http://wa.me/593989389265?text=I'm%20interested%20in%20your%20car%20for%20sale",'_system');
  }

}
