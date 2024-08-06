import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { RecentOrdersComponent } from "../recent-orders/recent-orders.component";
import { RightSideComponent } from "../right-side/right-side.component";



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule,CommonModule,RecentOrdersComponent,RightSideComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  yAxis = ['15k', '10k', '5k', '0'];
  graphFlow = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]
  data = [
    { label: '5', height: 1 },
    { label: '9', height: 3 },
    { label: '11', height: 5 },
    { label: '13', height: 6 },
    { label: '15', height: 3 },
    { label: '17', height: 4 },
    { label: '19', height: 2 },
    { label: '21', height: 5 },
    { label: '23', height: 2 },
    { label: '25', height: 1 },
    { label: '27', height: 6 },
    { label: '27', height: 2 },
    { label: '27', height: 5 },
    { label: '27', height: 4 },
    { label: '27', height: 5 },
    { label: '27', height: 6 },
    { label: '27', height: 6 },
    { label: '27', height: 4 },
    { label: '27', height: 5 },
    { label: '27', height: 3 },
    { label: '27', height: 5 },
    { label: '27', height: 1 },
    { label: '27', height: 6 },
    { label: '27', height: 3 },
    { label: '27', height: 2 },
    { label: '27', height: 1 },
    { label: '27', height: 3 },
    { label: '27', height: 4 },
  ];
  barWidth=1
  barSpacing=2.5
  xbarWidth=6
}
