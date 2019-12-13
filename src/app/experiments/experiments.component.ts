import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];
  experimentBeingEdited: string = null;
  inExperimentQueue: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  add(newExpermiment: string) {
    let errorMessage = "";
    for (let i=0; i < this.experiments.length; i++) {
      if(this.experiments[i] === newExpermiment) {
          this.inExperimentQueue = true;
      }
    }

    if (newExpermiment === '') {
      errorMessage = `Please enter a valid expermiment!`;
      this.inExperimentQueue = false;
      return errorMessage;
    }
    else if(!this.inExperimentQueue)
    {
      this.experiments.push(newExpermiment);
    }
    else if(this.inExperimentQueue)
    {
        errorMessage = `${newExpermiment} is already an on-going experiment!`;
    }
    this.inExperimentQueue = false;
    return errorMessage;
  }

  remove(oldExpermiment: string) {
    let index = this.experiments.indexOf(oldExpermiment);
    this.experiments.splice(index, 1);
  }

  edit(expermiment: string) {
    this.experimentBeingEdited = expermiment;
  }

  save(editedExpermiment: string, replacedExpermiment: string) {
    let errorMessage = "";
    let index = this.experiments.indexOf(replacedExpermiment);
    for (let i=0; i < this.experiments.length; i++) {
      if(this.experiments[i] === editedExpermiment) {
          this.inExperimentQueue = true;
      }
    }

    if (editedExpermiment === '') {
      errorMessage = `Please enter a valid expermiment entry!`;
      this.inExperimentQueue = false;
      return errorMessage;
    }
    else if(!this.inExperimentQueue)
    {
      this.experiments[index] = editedExpermiment;
      this.experimentBeingEdited = null;
    }
    else 
    {
      errorMessage = `${editedExpermiment} is already an on-going experiment!`;
    }
    this.inExperimentQueue = false;
    return errorMessage;
  }

}
