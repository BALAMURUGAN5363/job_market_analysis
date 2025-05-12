import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';

interface JobData {
  totalJobs: number;
  averageSalary: number;
  topSkills: Array<{ name: string; count: number }>;
  locations: Array<{ name: string; count: number }>;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jobData: JobData = {
    totalJobs: 0,
    averageSalary: 0,
    topSkills: [],
    locations: []
  };

  // Chart data
  skillsChartData: any[] = [];
  locationsChartData: any[] = [];

  // Chart options
  view: [number, number] = [700, 300];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;

  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  ngOnInit() {
    this.fetchData();
  }

  private async fetchData() {
    try {
      const response = await fetch('http://localhost:5001/api/analysis');
      if (response.ok) {
        this.jobData = await response.json();
        this.prepareChartData();
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  private prepareChartData() {
    // Prepare skills chart data
    this.skillsChartData = this.jobData.topSkills.map(skill => ({
      name: skill.name,
      value: skill.count
    }));

    // Prepare locations chart data
    this.locationsChartData = this.jobData.locations.map(location => ({
      name: location.name,
      value: location.count
    }));
  }
}
