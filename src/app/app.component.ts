import {Component} from '@angular/core';
import {Employee} from "./Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzM0Mzg4MjUsImlhdCI6MTY3MzQzNTIyNSwianRpIjoiMTkzOWU2Y2QtN2JkZi00MDI5LTg3OTQtNGI3ZjZkMjJiMDUwIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiIxMmJiYmZlOC0xMTRjLTQxZWItYjE4Yy0yNWM4ZThlZDJmMWYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.Lb59hBNUwd74sxgajeAPm2yfn9Z6ne6AbPIF4UAJMND1HXpiJ98YV3Ri5BaAT6_rB-_hVcqWvJ09VhbGnYDvDP-sAMCruaLW60qXuMNio6RuKykOx6h-0FtK-arL7ZLCU-AkTHPd4AunfR22mHkK7LrlU4278vHAX_hBQ5-SUq6hRSGiaUgvp1yEROuPHjeT5bvOP4OxclmsFCI-vqoNvm6j5fVAMByoRezP-__XQOtnGl8DX0i50l1TBSIB49m6M2D4BzOBgOA_DZfIZdtP-VFRrjj2Eh-mf49rgkZMOqrigHGh84boHsGlIFRPfOsbvnzcQWi2eOuGZFHQTKVduQ';
  employees$: Observable<Employee[]>;

  constructor(private http: HttpClient) {
    this.employees$ = of([]);
    this.fetchData();
  }

  fetchData() {
    this.employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }
}
