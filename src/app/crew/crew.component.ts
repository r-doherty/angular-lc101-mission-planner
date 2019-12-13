import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  memberBeingEdited: object = null;
  inCrew: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    let errorMessage = "";
    for (let i=0; i < this.crew.length; i++) {
      if(this.crew[i]['name'] === memberName) {
          this.inCrew = true;
      }
    }

    if (memberName === '') {
      errorMessage = `Please enter a Valid Crew Member name!`;
      return errorMessage;
    }
    else if(!this.inCrew)
    {
      this.crew.push({name: memberName, firstMission: isFirst});
    }
    else 
    {
      errorMessage = `${memberName} is already in your Crew!`;
    }
    this.inCrew = false;
    return errorMessage;
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member:object) {
    this.memberBeingEdited = member;
  }
    

  save(name: string, member: object) {
    let errorMessage = "";
    for (let i=0; i < this.crew.length; i++) {
      if(this.crew[i]['name'] === name) {
          this.inCrew = true;
      }
    }
    if (name === '') {
      errorMessage = `Please enter a Valid Crew Member name!`;
      this.inCrew = false;
      return errorMessage;
    }
    else if(!this.inCrew)
    {
      member['name'] = name;
      this.memberBeingEdited = null;
    }
    else 
    {
      errorMessage = `${name} is already in your Crew!`;
    }
    this.inCrew = false;
    return errorMessage;
  }
}