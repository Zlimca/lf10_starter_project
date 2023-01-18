import { Component, OnInit } from '@angular/core';
import {Employee} from "../Employee";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = []
  selectedEmployee?: Employee
  public pageTitle = "Mitarbeiter-Liste";

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getEmployees()
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee
  }

  delete(employee: Employee): void {
    console.log(employee)
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }
}
