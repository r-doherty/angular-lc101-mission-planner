import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', timeInSpace: "14d 07h 46m", occupation: "Physicist", missions: "STS: 7, 41-G"},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', timeInSpace: "7d 22h 30m", occupation: "Physician, Engineer, Professor", missions: "STS: 47"},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', timeInSpace: "40d 19h 36m", occupation: "Director (Johnson Space Center)", missions: "STS: 56, 66, 96, 110"},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', timeInSpace: "18d 23h 04m", occupation: "Pilot", missions: "STS: 51-B, 33, 44"},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', timeInSpace: "28d 16h 33m", occupation: "Pilot, Engineer", missions: "STS: 8, 61-A, 39, 53"},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', timeInSpace: '141d 15h 04m', occupation: 'Flight Surgeon', missions: 'Soyuz TMA-17M (#44)'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', timeInSpace: "00d 00h 00m", occupation: "Technical Intelligence Officer", missions: "N/A"}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(candidate: object)
  {
    if(this.crew.includes(candidate))
    {
      this.inCrew = true;
    }
    else
    {
      this.inCrew = false;
    }

    if(this.inCrew)
    {
      let index = this.crew.indexOf(candidate);
      this.crew.splice(index, 1);
    }
    else if(!this.inCrew && this.crew.length < 3)
    {
      this.crew.push(candidate);
    }
  }

}
