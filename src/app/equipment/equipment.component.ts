import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  cargo: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  cargoBeingEdited: string = null;
  inCargo: boolean = false;


  constructor() { }

  ngOnInit() {
  }


  add(newEquipment: string) {
    let errorMessage = "";
    for (let i=0; i < this.cargo.length; i++) {
      if(this.cargo[i] === newEquipment) {
          this.inCargo = true;
      }
    }

    if (newEquipment === '') {
      errorMessage = `Please enter a valid equipment entry!`;
      this.inCargo = false;
      return errorMessage;
    }
    else if(!this.inCargo)
    {
      this.cargo.push(newEquipment);
    }
    else if(this.inCargo)
    {
      if(newEquipment[newEquipment.length-1] === 's' || newEquipment[newEquipment.length-1] === 'S')
      {
        errorMessage = `${newEquipment} are already in your Cargo!`;
      }
      else
      {
        errorMessage = `${newEquipment} is already in your Cargo!`;
      }
    }
    this.inCargo = false;
    return errorMessage;
  }

  remove(oldEquipment: string) {
    let index = this.cargo.indexOf(oldEquipment);
    this.cargo.splice(index, 1);
  }

  edit(equipment: string) {
    this.cargoBeingEdited = equipment;
  }

  save(editedEquipment: string, replacedEquipment: string) {
    let errorMessage = "";
    let index = this.cargo.indexOf(replacedEquipment);
    for (let i=0; i < this.cargo.length; i++) {
      if(this.cargo[i] === editedEquipment) {
          this.inCargo = true;
      }
    }

    if (editedEquipment === '') {
      errorMessage = `Please enter a valid equipment entry!`;
      this.inCargo = false;
      return errorMessage;
    }
    else if(!this.inCargo)
    {
      this.cargo[index] = editedEquipment;
      this.cargoBeingEdited = null;
    }
    else 
    {
      errorMessage = `${editedEquipment} is already in your Cargo!`;
    }
    this.inCargo = false;
    return errorMessage;
  }


}
