import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Desperado } from '../models/desperado.desperado';
import { DesperadoBackendService } from '../services/desperado-backend.service';



@Component({
  selector: 'app-desperado',
  templateUrl: './desperado.component.html',
  styleUrls: ['./desperado.component.css']
})
export class DesperadoComponent implements OnInit {

  desperadoForm = new FormGroup({
    desperadoInput: new FormControl('')
  });

  show: boolean = false;
  desperadoResponse: Desperado | undefined;
  constructor(private desperadoBackendSvc: DesperadoBackendService) {}

  onSubmit() {
    let inputValue = this.desperadoForm.get('desperadoInput')?.value;
    this.desperadofy(inputValue);
  }
  ngOnInit(): void {
  }
  desperadofy(text: string){
    this.desperadoBackendSvc.postToDesperadoBackend(text)
      .subscribe(data => this.desperadoResponse = {
        text: data.text
      })
    //console.log("Got response from backend: " + this.desperadoResponse);

  }
}
