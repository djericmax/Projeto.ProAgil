import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos(); 
  }

  getEventos() {
    this.eventos = this.http.get(
      'https://localhost:5001/api/values').subscribe(response => {
        this.eventos = response;
        console.log(this.eventos);
      }, error => {
          console.log(error);
      }
    );
  }

}