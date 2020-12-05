import { Component, OnInit } from '@angular/core';
import { TheBiggestObjectDataService } from '../services/data.service'; // провайдер

@Component({
  selector: 'app-the-biggest-object',
  templateUrl: './the-biggest-object.component.html',
  styleUrls: ['./the-biggest-object.component.css'],
  providers: [TheBiggestObjectDataService] // ! подкл. провайдера
})
export class TheBiggestObjectComponent implements OnInit {

  objects: string[];
  objectName: string;
  selectedItem: number; 
  //private objectsDataService: TheBiggestObjectDataService;

  constructor(private objectsDataService: TheBiggestObjectDataService) {
    this.objects = [];
   }

  //  addObject(name: string) {
  //    this.objectsDataService.set(name);
  //  }

  //  getObject() {
  //    return  
  //  }

  onChange(value: number) {
    this.selectedItem = value;
  }

  ngOnInit(): void {
    this.objects = this.objectsDataService.get();
  }

}
