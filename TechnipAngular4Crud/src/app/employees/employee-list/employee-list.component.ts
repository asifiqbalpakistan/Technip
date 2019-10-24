import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../Common/employee.service';
import {Employee} from '../Common/employee.model';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
  
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.GetEmployeeList();
  }

  OnEditShowEmployee(emp :Employee)
  {
      this.employeeService.selectedEmployee=emp;
     
  }

  OnDeleteEmployee(id :number)
  {
    this.employeeService.DeleteEmployee(id).subscribe(x=> {
        this.employeeService.GetEmployeeList();
      
    });
  }

}
