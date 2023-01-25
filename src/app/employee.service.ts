import {Injectable, NgZone} from '@angular/core';
import {Employee} from "./Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  bearer: string | null
  employees$: Observable<Employee[]>

  constructor(private http: HttpClient,
              private ngZone: NgZone) {
    this.employees$ = of([])
    this.fetchData()
    this.bearer = localStorage.getItem('access_token')
  }

  addEmployee(employee: Employee) {
    this.bearer = localStorage.getItem('access_token')
    // TODO: write add function to add an employee
  }

  getEmployeeById(id: number): Observable<Employee> {
    this.bearer = localStorage.getItem('access_token')
    return this.http.get<Employee>('/backend/' + id, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    })
  }

  getEmployees(): Observable<Employee[]>{
    this.employees$ = of([]);
    this.fetchData()
    return this.employees$
  }

  fetchData() {
    this.bearer = localStorage.getItem('access_token')
    this.employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    })
  }
}
