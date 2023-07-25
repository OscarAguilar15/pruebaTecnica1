import { Component, OnInit, Injectable } from '@angular/core';
//import { FormControl, FormGroup} from '@angular/forms';
import { ObjsService } from '../services/objs.service';
import { objeto } from '@app/models/objeto';
import { Firestore, collection } from '@angular/fire/firestore';
//import { AngularFirestore } from '@angular/fire/firestore';
//import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
//private obj : ObjsService
export class BoxComponent implements OnInit {
  userInput: number;
  numbersList: number[] = [];
  multiplos: objeto[] = [];

  constructor(private firestore: AngularFirestore) {}

  findMultiples() {
    this.numbersList = [];
    this.multiplos = [];

    for (let i = 0; i <= this.userInput; i++) {
      this.numbersList.push(i);

      const multiplos3 = i % 3 === 0 ? [i] : [];
      const multiplos5 = i % 5 === 0 ? [i] : [];
      const multiplos7 = i % 7 === 0 ? [i] : [];

      this.multiplos.push({
        numero: i,
        multiplos3,
        multiplos5,
        multiplos7,
      });
    }

    console.log(this.multiplos.values);
    console.log(this.numbersList);

    //const response = this.objservices.addObj( this.multiplos );
    // Guardar la petición y el resultado en Firestore
    this.guardarEnFirestore();
  }

  //* ----- Guardado en  base de datos-------

  ngOnInit(): void {}

  guardarEnFirestore() {
    this.firestore
      .collection('objetos')
      .add({
        numero: this.userInput,
        res: this.multiplos,
      })
      .then(() => console.log('Guardado en DB'))
      .catch((err) => console.error('error, no se pudo guardar', err));
  }

  /*onSubmit(){
    //console.log(this.objeto.value);
  }*/
}
