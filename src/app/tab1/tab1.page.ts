import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    @ViewChild('pwaphoto', { static: true })
    pwaphoto: ElementRef;

  constructor() {}

 public async uploadPWA(): Promise<void> {

        //await this.presentLoading();

        // const fileList: FileList = this.pwaphoto.nativeElement.files;

        // if (fileList[0]) {

        //     for (let i = 0; i < fileList.length; i++) {

        //         let f = fileList[i];
        //         let num = 1;

        //         let key = 'img_' + num;

        //         await this.appendImgElement(key, f);
        //     };

        //     await this.nav('phaser/camera-upload-2');
        // }
        // else {
        //     //this.loadingController.dismiss();
        // }
    }

}
