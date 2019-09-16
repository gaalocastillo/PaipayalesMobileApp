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
      window.open("http://wa.me/593987107704?text=Testing!%20Hallo%20Liebe%20Angeles", '_system');
    } else {
      options.packageName = androidPackageName;
      app = androidPackageName;
      window.open("http://wa.me/593987107704?text=Testing!%20Hallo%20Liebe%20Angeles", '_system');
    }


    // if(this.platform.is('ios')) {
    //   options.uri = iosSchemaName;
    //   app = iosSchemaName;
    //   window.open("http://wa.me/593989389265?text=I'm%20interested%20in%20your%20car%20for%20sale", '_system');
    // } else {
    //   options.packageName = androidPackageName;
    //   app = androidPackageName;
    //   window.open("http://wa.me/593989389265?text=I'm%20interested%20in%20your%20car%20for%20sale", '_system');
    // }

  }
  

  openWhatsApp(){
    this.launchExternalApp('whatsapp:// ','com.whatsapp' );
  }


}


// import { Component, OnInit } from '@angular/core';
// import { AppAvailability} from '@ionic-native/app-availability/ngx';
// import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
// import {Device } from '@ionic-native/device/ngx';
// import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
// import { Platform } from '@ionic/angular';
// import {StorageService} from 'src/app/services/storage.service';

// @Component({
//   selector: 'app-confirmation',
//   templateUrl: './confirmation.page.html',
//   styleUrls: ['./confirmation.page.scss'],
// })
// export class ConfirmationPage implements OnInit {

//   private phoneNumber = "593989389265";
  
  
  

//   constructor( private appAvailability:AppAvailability, private inAppBrowser: InAppBrowser,private device:Device, private appLauncher: AppLauncher, private platform:Platform, private purchase:StorageService) { }

//   ngOnInit() {
//   }


//   launchExternalApp( iosSchemaName: string, androidPackageName: string) {
    
//     let app: string
//     let pedido: string
//     const options: AppLauncherOptions = {
     
//     }

//     this.purchase.storage.forEach(element => {
//       pedido+= element["name"].toString + ":" + element["qty"];
//     });

    
    
//     if(this.platform.is('ios')) {
//       options.uri = iosSchemaName;
//       app = iosSchemaName;
//       var mssg = "http://wa.me/593989389265?text=" + "Tenog una compra de: " + pedido ;
//       window.open(mssg, '_system');
//     } else {
//       options.packageName = androidPackageName;
//       app = androidPackageName;
//       window.open("http://wa.me/593989389265?text=I'm%20interested%20in%20your%20car%20for%20sale", '_system');
//     }

//   }
  

//   openWhatsApp(){
//     this.launchExternalApp('whatsapp:// ','com.whatsapp' );
//   }


// }