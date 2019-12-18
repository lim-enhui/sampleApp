import { Component } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import {Capacitor, Plugins} from "@capacitor/core";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fileChooser: FileChooser) {}

  async openFile() {
    this.fileChooser.open({mime: "application/pdf"}).then(uri => {
      console.log(uri);
      this.readFilePath(uri);
    }).catch(e => {
      console.log(e);
    })
  }

  async readFilePath(uri) {
    const {Filesystem} = Plugins;
    try {
      let data = await Filesystem.readFile({
        path: uri
      });
      console.log(data);
    } catch(e) {
      console.log(e);
    }
  }

}
