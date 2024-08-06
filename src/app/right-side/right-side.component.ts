
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@Component({
  selector: 'app-right-side',
  standalone: true,
  imports: [MatIconModule,MatProgressSpinnerModule,FormsModule,
    CommonModule
  ],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.css'
})
export class RightSideComponent {

  color='blue'
  customerDetails = [
    {
      name:'Jenny Wilson',
      stars:[1,2,3,4,5],
      starRate:4,
      comment:"it's very tasty"
    },
    {
      name:'Jenny Wilson',
      stars:[1,2,3,4,5],
      starRate:5,
      comment:"it's very tasty"
    },
    {
      name:'Jenny Wilson',
      stars:[1,2,3,4,5],
      starRate:3,
      comment:"it's very tasty"
    }
  ]
  filledColor:string='gold'
  emptyColor:string='gray'
}
