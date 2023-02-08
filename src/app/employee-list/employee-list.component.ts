import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {EmployeeService} from "../employee.service";
import {first} from "rxjs";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = []
  public pageTitle = "Mitarbeiter-Liste";

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getEmployees()
  }

  delete(employee: Employee): void {
    if(confirm("Möchten Sie den Mitarbeiter " + employee.firstName + " " + employee.lastName + " wirklich löschen?")){
    this.employeeService.deleteEmployee(employee.id)?.subscribe(() => this.getEmployees())
    }
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.setEmployees(employees));
  }

  setEmployees(employees: Employee[]): void {
    this.employees = employees

    if (this.employees.length < 2) return

    this.employees = this.employees.sort(function(a, b){ // @ts-ignore
      return a.id-b.id});
  }

  getImgId(employeeId: number | undefined): number {
    return this.employees.findIndex(e => e.id === employeeId) + 1
  }

  updateImageId(employeeId: number | undefined){
    localStorage.setItem('imageId', JSON.stringify(this.employees.findIndex(e => e.id === employeeId) + 1))
  }
}
