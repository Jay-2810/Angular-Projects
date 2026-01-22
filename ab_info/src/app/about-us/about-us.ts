import { Component } from '@angular/core';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-about-us',
  imports: [NgIf],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  activeTab: string = 'mission';

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
}
