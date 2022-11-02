import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

details:any = [];

  constructor(private api:ApiService) { 

  	this.api.getall().subscribe((data)=>{
  		console.warn("data",data);
  		this.details = data;
  	});

  }

  ngOnInit(): void {
  }
} 
