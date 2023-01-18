import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../employee.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employee?: Employee
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }
  public pageTitle = "Mitarbeiter-Details";

  ngOnInit(): void {
    this.getEmployee()
    this.getEditMode();
  }

  getEmployee(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.employeeService.getEmployeeById(id)
      .subscribe(employee => this.employee = employee)
  }

  getEditMode(): void {
    // TODO: decide edit mode
  }

}
