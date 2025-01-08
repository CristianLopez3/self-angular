import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { DashboardChildComponent } from './components/dashboard-child/dashboard-child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardChildComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush, // detect changes when: an event is trigger, when we say it:
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  text = 'dashboard';


  handleClick() {
    this.text = "Dashboard has changed";
  }

}
