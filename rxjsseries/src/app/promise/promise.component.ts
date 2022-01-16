import { Component, OnInit } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let buyLP = new Promise((resolve, reject) => {
      reject('Promise is reject')
    });
    buyLP.then( res => {
      console.log('then code =>', res)
    }).catch(res => console.log('catch code => ', res))
  }
}
