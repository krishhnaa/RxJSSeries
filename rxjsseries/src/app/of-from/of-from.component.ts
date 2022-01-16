import { DesignUtilityService } from './../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {
  }

//const ofObs : of('Krishna', 'Yallapanthula', 'Mohan');



}
