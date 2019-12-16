import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
   selectedResearch: string[] = [];
   maxProjects: number = 3;

   constructor() { }

   ngOnInit() { }

   removeItem(research: string)
   {
      let index = this.selectedResearch.indexOf(research);
      this.selectedResearch.splice(index, 1);
   }

   addItem(research: string)
   {
      this.selectedResearch.push(research);
   }

}
