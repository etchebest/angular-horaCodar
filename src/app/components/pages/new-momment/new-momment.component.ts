import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-momment',
  templateUrl: './new-momment.component.html',
  styleUrls: ['./new-momment.component.scss']
})
export class NewmommentComponent implements OnInit {
  btnText: string = "Compartilhar!"
  constructor() { }

  ngOnInit(): void {
  }

}
