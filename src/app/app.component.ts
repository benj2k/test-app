import { Component, OnInit } from '@angular/core';
import { Arianee } from '@arianee/arianeejs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-app';

  ngOnInit() {
    //this.startArianee();
  }

  startArianee = async () => {

    // By default Arianee will be initialized on testnet network
  //   const arianee = await new Arianee().init();

  // // Create a wallet
  //   const wallet = arianee.fromRandomKey();

  // // Request POA and Aria and approves store to make transaction on blockchain
  //   await wallet.requestPoa();
  //   await wallet.requestAria();

  //   await wallet.methods.approveStore();

  //   const balanceOfPoa = await wallet.methods.balanceOfPoa();
  //   console.log('balanceOfPoa: ', balanceOfPoa);

  };
  
}
