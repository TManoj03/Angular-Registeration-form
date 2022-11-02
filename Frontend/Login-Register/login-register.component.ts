import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor(private service: ApiService,private router: Router) { }

  ngOnInit(): void { }

  formdata = {fname:'',lname:'',email:'',age:'',phone:'',address:'',gender:'',pass:'',cpass:''}
  submit = false;

  onSubmit(){
    console.log('this.formdata');
  }

 register(){

    this.service.postApi(this.formdata).subscribe((res: any) => {
      console.log(res['data']);
      // this.formdata = {fname:'',lname:'',email:'',age:'',phone:'',address:'',gender:'',pass:'',cpass:''}

    })
	}

	login(){
    this.service.getsingle().subscribe((res:any)=>{
      console.log(res['data']);
    })
    // this.router.navigateByUrl('dashboard');
    // this.router.navigate(['dashboard']);
  }

}
