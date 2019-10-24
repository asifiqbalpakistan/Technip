import { Injectable } from '@angular/core';
import {Employee} from './employee.model';
import{Http,Response,Headers,ResponseOptions,RequestMethod, RequestOptions} from '@angular/http';
//import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
//import { IfObservable } from 'rxjs/observable/IfObservable';

var url ='http://localhost:37073/api/Employees/';
@Injectable()
export class EmployeeService {
  
selectedEmployee :Employee;
employeeList :Employee[];

  constructor(private http:Http) { }
  
  PostEmployee(employee:Employee)
  {
    
    var headerOption =new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method:RequestMethod.Post,headers:headerOption});
    return this.http.post(url,JSON.stringify(employee),requestOptions)
    .map(x=> x.json());
  }

  GetEmployeeList(){
    
    let emparray = this.http.get(url)
    .map((data:Response) =>{
      return data.json() as Employee[];
    }).toPromise().then(x=> {
      this.employeeList=x;
    });
   
  }

  EditEmployee(id:number,employee:Employee)
  {
    var headerOption =new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method:RequestMethod.Put,headers:headerOption});
    return this.http.put(url+id,JSON.stringify(employee),requestOptions)
    .map(x=> x.json());
  }

  DeleteEmployee(id:number)
  {
   
     return this.http.delete(url+id).map(res=> res.json());
  }

}
