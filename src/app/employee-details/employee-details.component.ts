import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../employee.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public pageTitle = "Mitarbeiter-"
  public titleDetails = 'Details'
  public titleEdit = 'Bearbeiten'
  public titleAdd = 'Hinzufügen'
  public employee$: Observable<Employee>
  public mode: string = 'd' // Modes: d=detail, e=edit, a=add
  form: FormGroup
  submitted: boolean = false
  loading: boolean = false

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private employeeService: EmployeeService) {
    this.form = this.formBuilder.group({})
    this.employee$ = this.getEmployee()
  }

  ngOnInit(): void {
    this.getMode();
    if (this.mode !== 'a') this.employee$ = this.getEmployee()

    this.form = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      street: [''],
      postcode: [''],
      city: [''],
      phone: ['']
    })
    if (this.mode === 'e') {
      this.employee$.subscribe(e => this.form.patchValue(e))
    }
  }

  get f() {
    return this.form.controls
  }

  getEmployee(): Observable<Employee> {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    return this.employeeService.getEmployeeById(id)
  }

  getMode(): void {
    this.mode = String(this.route.snapshot.paramMap.get('edit'))
  }

  onSubmit() {
    this.submitted = true

    if (this.form.invalid) {
      return
    }

    this.loading = true

    if (this.mode === 'a') this.createEmployee()
    else if (this.mode === 'e') this.updateEmployee()
  }

  private createEmployee() {
    //TODO write create employee

  }

  private updateEmployee() {

  }
}
