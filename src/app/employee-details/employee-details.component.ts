import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../employee.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable, of} from "rxjs";
import {Location} from "@angular/common";

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
  public id: number;
  public employee$: Observable<Employee>
  public isEditMode?: boolean
  form: FormGroup
  submitted: boolean = false
  loading: boolean = false

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private location: Location, private employeeService: EmployeeService) {
    this.form = this.formBuilder.group({})
    this.employee$ = this.getEmployee()
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.isEditMode = this.getMode();
    if (this.id) this.employee$ = this.getEmployee()

    this.form = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      street: [''],
      postcode: [''],
      city: [''],
      phone: ['']
    })
    if (this.isEditMode) {
      this.employee$.subscribe(e => this.form.patchValue(e))
    }
  }

  getEmployee(): Observable<Employee> {
    const employee$ = this.employeeService.getEmployeeById(this.id)
    return employee$ ? employee$ : of(new Employee)
  }

  getMode(): boolean {
    return String(this.activatedRoute.snapshot.paramMap.get('edit')) === 'e'
  }

  onSubmit() {
    this.submitted = true

    if (this.form.invalid) {
      return
    }

    this.loading = true

    if (!this.id) this.createEmployee()
    else if (this.isEditMode) this.updateEmployee()
  }

  private createEmployee() {
    const employee: Employee = this.form.value
    this.employee$ = this.employeeService.addEmployee(employee)
    this.loading = !!this.employee$
    location.assign('./employees')
  }

  private updateEmployee() {
    const employee: Employee = this.form.value
    this.employee$ = this.employeeService.updateEmployee(this.id, employee)
    this.loading = !!this.employee$
    location.assign(`./employee/e/${this.id}`)
  }

  public onDelete() {
    this.employeeService.deleteEmployee(this.id)?.subscribe(() => location.assign('./employees'))
  }

  public changeMode() {
    this.isEditMode = !this.isEditMode
    if (this.isEditMode) this.employee$.subscribe(e => this.form.patchValue(e))
  }

  public getClass() {
    if (this.isEditMode) return "{ btn btn-outline-primary button-spacing  }"
    else return "{ btn btn-outline-primary button-spacing bi-pencil-fill }"
  }

  public getImageId(){
    return localStorage.getItem('imageId');
  }
}
