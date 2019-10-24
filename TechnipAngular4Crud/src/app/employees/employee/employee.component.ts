import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../Common/employee.service';
import { NgForm } from '@angular/forms';
import { stringify } from '@angular/core/src/util';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']

})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { } 

  ngOnInit() {
    this.reset();
  }

  reset(form?:NgForm)
  {
    if(form !=null)
      form.reset();
this.employeeService.selectedEmployee ={
  EmployeeID:null,
  EmployeeName:null,
  EmployeeDept:null,
  Status:null
}
  }

  OnSubmit(form:NgForm)
  {
    if(form.value.EmployeeID==null){
    this.employeeService.PostEmployee(form.value)
    .subscribe(x=> {
      this.reset(form);
      this.employeeService.GetEmployeeList();
     
    })
    
  }else{
      this.employeeService.EditEmployee(form.value.EmployeeID,form.value).subscribe(x=> {
        this.reset(form);
        this.employeeService.GetEmployeeList();
       
      });
     
  }
  }
}
