import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import Obj from '@app/interfaces/obj';

@Injectable({
  providedIn: 'root',
})
export class ObjsService {
  constructor(private firestore: Firestore) {}

  addObj(obj: Obj) {
    const ObjRef = collection(this.firestore, 'Objetos');
    return addDoc(ObjRef, obj);
  }
}
