import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-reservation',
  templateUrl: './get-reservation.component.html',
  styleUrls: ['./get-reservation.component.css'],
})
export class GetReservationNameComponent implements OnInit {
  @Input() key: string ;

  @Output() newBookerName = new EventEmitter<string>();

  @Output() isFastReservation = new EventEmitter<boolean>();

  name: string;
  fastReservation: boolean = false;

  constructor() {}

  ngOnInit() {}

  cambiaNome(Name: string) {
    if (Name != '') {
      this.name = Name;
      this.newBookerName.emit(this.name);
    }
  }

  setFastReservation(val: boolean) {
    this.fastReservation = val;
    this.isFastReservation.emit(this.fastReservation);
  }
}