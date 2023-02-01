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
  private root = '/backend'

  constructor(private http: HttpClient) {
    this.employees$ = of([])
    this.fetchData()
    this.bearer = localStorage.getItem('access_token')
  }

  addEmployee(employee: Employee): Observable<Employee> {
    this.bearer = localStorage.getItem('access_token')
    return this.http.post(this.root,
      employee,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${this.bearer}`)
      })
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    this.bearer = localStorage.getItem('access_token')
    return this.http.put(`${this.root}/${id}`,
      employee, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${this.bearer}`)
      })
  }

  getEmployeeById(id: number): Observable<Employee> | null {
    if (!id) return null
    this.bearer = localStorage.getItem('access_token')
    return this.http.get<Employee>(`${this.root}/${id}`, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    })
  }

  getEmployees(): Observable<Employee[]> {
    this.employees$ = of([]);
    this.fetchData()
    return this.employees$
  }

  deleteEmployee(id: number | undefined): Observable<Employee> | null {
    if (!id) return null

    this.bearer = localStorage.getItem('access_token')
    return this.http.delete(`${this.root}/${id}`, {
      headers: new HttpHeaders()
        .delete('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    })
  }

  fetchData() {
    this.bearer = localStorage.getItem('access_token')
    this.employees$ = this.http.get<Employee[]>(this.root, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    })
  }
}
