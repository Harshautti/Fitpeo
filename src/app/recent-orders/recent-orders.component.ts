import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-recent-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.css'
})
export class RecentOrdersComponent {
  profileDetails = [
    {
      name:'harsha',
      orderNo:1321434,
      amount:'$123',
      status:'Delivered'
    },
    {
      name:'Sunny',
      orderNo:1321434,
      amount:'$123',
      status:'pending'
    },
    {
      name:'harsha',
      orderNo:1321434,
      amount:'$123',
      status:'Delivered'
    },
    {
      name:'harsha',
      orderNo:1321434,
      amount:'$123',
      status:'cancelled'
    },
    {
      name:'harsha',
      orderNo:1321434,
      amount:'$123',
      status:'Delivered'
    },
    {
      name:'harsha',
      orderNo:1321434,
      amount:'$123',
      status:'pending'
    },
    {
      name:'harsha',
      orderNo:1321434,
      amount:'$123',
      status:'pending'
    },
  
   
  ]
  getStatus(status:string){
    switch (status) {
      case 'Delivered':
        return { 'background-color': 'lightgreen', 'color': 'darkgreen' };; 
      case 'pending':
        return { 'background-color': 'lightcoral', 'color': 'red' };
      case 'cancelled':
        return { 'background-color': 'lightcoral', 'color': 'red' };
      default:
        return { 'background-color': 'white', 'color': 'black' }; 
    }
  }
}

