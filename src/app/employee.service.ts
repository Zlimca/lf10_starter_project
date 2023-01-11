import {Injectable, NgZone} from '@angular/core';
import {Employee} from "./Employee";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzM0NTY0MTgsImlhdCI6MTY3MzQ1MjgxOCwianRpIjoiMzZlMWRkMGEtMDNmYy00ZWUyLWI5N2ItMDcxODFhNDE4OTA1IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI5YmE0ZmQwNS0xYzYyLTQzMTAtODUzYi1lYTUwNTUwZTMzOGMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.NHB_xEZqHfAyqfYUJ9ndbeH-l0-EpQFjcyaazW5oYq3a2NIJB8rXP_xfONxq57E0AlpoDMR3nalarD4jIpst4O5IDgZf6pUmiUvR8v1XghvDZF7hclrwqzSNQtKgbj5SeKGRqYWsUYSyT-Vhdpzd3xNEH6qogXYEmkdwpSIWEDnvnPh_ncyqrkW5TQu84F36opR2ydTctyMS3hQARunkrveRrczdqlMyIJsCGrJ9wj_GVIxTGGj0xjR80sUseJcQggx4vtAhvrJK_azgt3Z45L3NIarfP9BixkRg3dNcoOzbagXES4VZjT1_qqKuHxUDhMiY-8R0Cwfhq3zDTYNlWQ';
  employees$: Observable<Employee[]>


  constructor(private http: HttpClient,
              private ngZone: NgZone) {
    this.employees$ = of([])
    this.fetchData()
  }

  async addEmployee(employee: Employee) {
    // TODO: write add function to add an employee
  }

  getEmployeeById(id: number): Observable<Employee> {
    // TODO: write add function to get an employee  by the id
    return this.http.get<Employee>('/backend/' + id, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    })
  }

  getEmployees(): Observable<Employee[]>{
    // TODO: dafür sorgen dass alle mitarbeiter angezeigt werden (nicht nur 2)
    this.employees$ = of([]);
    this.fetchData()
    return this.employees$
  }

  fetchData() {
    this.employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    })
  }
}
