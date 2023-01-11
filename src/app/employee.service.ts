import {Injectable, NgZone} from '@angular/core';
import {Employee} from "./Employee";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = []
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzM0NDkwNDgsImlhdCI6MTY3MzQ0NTQ0OCwianRpIjoiYzdlNjAzNzMtZjhlZS00YzJjLTk5MGYtOTJkNWE4ZmFlNjBiIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJjZDM1ZGIwZC04Mzc3LTRlMTQtOGY2NS02MzIxNmY5MmI5M2IiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.SUJJFIe100xwtwbqKnSI38GJ0BWeRIiuD9-Flkbu50ozaM767Yfb6F6Y8AsQ8GZ2F4LdO0xW202U8WB2G0uLscHmfsXqZi2gOV_oyi3EYEaH4HqC9G0EhOKFICU94VXlmOlcoTvbprg221S_DZMgvewBWdr53xWlRrOKQsJAY43HnRQrtT-qWObEeza--0WZ9pFMwW-IHpJwsBOzJ_-HrbonekwuJ1ODOiu-vGdR_DFuWTjofPRQHl31sEFdXVhBI9rET5nMMVwpRi97cp_pgyHbbw7XoPrcigXf22jIr_394tN8pg2Tg65HV9AXTu4Z-EN8aM9N0i4vBS5bkA755A';
  employees$: Observable<Employee[]>


  constructor(private http: HttpClient,
              private ngZone: NgZone) {
    this.employees$ = of([])
    this.fetchData()
  }

  async addEmployee(employee: Employee) {
    // TODO: write add function to add an employee
  }

  getEmployeeById(id: number) {
    // TODO: write add function to get an employee  by the id
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
