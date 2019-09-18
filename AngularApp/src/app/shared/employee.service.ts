import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


import { Employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee : Employee;
  employees : Employee[];
  readonly baseURL = 'http://localhost:3000/employees';


  
  
  constructor(private http : HttpClient) { }
  

  postEmployee(emp : Employee){
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList(){
    return this.http.get(this.baseURL);
  }

  putEmployee(emp){
    return this.http.put(this.baseURL + `/display/${emp._id}`, emp);
  }

  deleteEmployee(_id : string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  editEmployee(_id : string){
    return this.http.get<Employee>(`${this.baseURL}/display/${_id}`);
  }

}
