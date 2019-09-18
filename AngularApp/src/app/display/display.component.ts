import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import {HttpResponse, HttpHeaders} from '@angular/common/Http';


declare var M: any;

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers :[EmployeeService],

})
export class DisplayComponent implements OnInit {
showdata : any;
showhided : any;
user : any = {};

employeeObject:object ={};

isCollapsed : boolean = true;
  
  data: Employee[];
  User : Employee;

  constructor(private employeeService : EmployeeService,
              private router : Router,
              private activateRoute : ActivatedRoute) {
                this.showdata = false;
                this.showhided = "Update";
               }

               
showhidedata(emp)
{
  this.showdata = !this.showdata;
  if(this.showdata){
  this.user._id = emp._id;
  this.user.name = emp.name;
  this.user.position = emp.position;
  this.user.office = emp.office;
  this.user.salary =emp.salary;
  }
  else{
    this.showhided = "Update";
  }
};


  ngOnInit() {
    this.employeeService
    .getEmployeeList().subscribe((data: Employee[]) => this.data = data);
     this.refreshEmployeeList();
}
  

onEdit(emp : Employee){
  this.employeeService.selectedEmployee = emp;
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
  
  
  

  onDelete(_id: string, form: NgForm){
    if(confirm('Are you sure to delete this record ? ') == true){
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        M.toast({ html : 'Deleted Successfully', classes: 'rounded'});
        location.reload();
      });
    }
  }
  refreshEmployeeList(){
    this.employeeService.getEmployeeList().subscribe((res) => {
    this.employeeService.employees = res as Employee[];
    });
  }

  updateEmployee(user){
    this.employeeObject = {
      "_id" :this.user._id,
      "name" : this.user.name,
      "position" :this.user.position,
      "office" : this.user.office,
      "salary" : this.user.salary
    };

    console.log(this.employeeObject);

    this.employeeService.putEmployee(this.employeeObject).subscribe(res => {
      this.refreshEmployeeList();
       M.toast({ html : 'Updated Successfully', classes: 'rounded'});
       location.reload();
     });
  }
  
}

