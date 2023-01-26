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
    this.employeeService.deleteEmployee(employee.id)?.pipe(first())
      .subscribe(employee => this.employees
        .forEach((e: Employee, i: number) => {
          if (e.id === employee.id) delete this.employees[i]
        }))
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }
}
