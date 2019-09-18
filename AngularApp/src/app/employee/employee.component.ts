import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/Router';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';





declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers : [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }
  
  resetForm(form? : NgForm) {
    if(form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id :"",
      name : "",
      position:"",
      office :"",
      salary:null
    }
  }


  

   onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
         this.resetForm(form);
         this.refreshEmployeeList();
         location.reload();
       M.toast({ html: 'Saved successfully', classes: 'rounded' });
     });
     }
     else {
       this.employeeService.putEmployee(form.value._id).subscribe((res) => {
         this.resetForm(form);
         this.refreshEmployeeList();
         M.toast({ html: 'Updated successfully', classes: 'rounded' });
       });
     }
   }

   onEdit(emp : Employee){
    this.employeeService.selectedEmployee = emp;
  }


  refreshEmployeeList(){
    this.employeeService.getEmployeeList().subscribe((res) => {
    this.employeeService.employees = res as Employee[];
    });
  }

  

 

}

