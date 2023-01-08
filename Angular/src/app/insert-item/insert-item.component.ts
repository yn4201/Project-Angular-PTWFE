//import { Item } from './../models/Item';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { PerfumeItem } from '../models/Item';
import { PerfumeItemService } from '../services/item.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
export interface PerfumeItem{id?: string; name?: string; brand?: string; origin?: string; money?: string; img?: string; status?:string;}
@Component({
  selector: 'app-insert-item',
  templateUrl: './insert-item.component.html',
  styleUrls: ['./insert-item.component.css']
})
export class InsertItemComponent implements OnInit {
  insertFrm: FormGroup;
  public idAdd = "";
  private itemsCollection: AngularFirestoreCollection<PerfumeItem>;
  constructor(public Router: Router,private fb: FormBuilder, private itemsrv: PerfumeItemService, private readonly afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection<PerfumeItem>('items');
    this.insertFrm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(4)]],
      brand: ['',Validators.required],
      origin: ['',Validators.required],
      money: ['',Validators.required],
      status: ['',Validators.required],
    });
  } 

  retrieveId() {
    let day = new Date();
    let date = day.toLocaleDateString();
    let time = day.toLocaleTimeString();
    var timeStamp = Date.parse(date +" " +time)/1000;
    return timeStamp.toString();
  }
  
  onSubmit() {
   
    let item :  PerfumeItem = {};//bang rong
    item.id=this.idAdd;
    item.name=this.insertFrm.controls["name"].value;
    item.brand=this.insertFrm.controls["brand"].value;
    item.origin=this.insertFrm.controls["origin"].value;
    item.money=this.insertFrm.controls["money"].value + "đ";
    item.status = this.insertFrm.controls["status"].value;
   
    let docid = this.afs.createId();
    this.itemsCollection.doc(docid).set(Object.assign({}, item));
    console.log("Đã thêm sản phẩm");
    alert('Đã thêm sản phẩm');
    this.Router.navigateByUrl("/admin/item");
    
  }

  ngOnInit(): void {
    (async () => {
      this.idAdd = await this.retrieveId();
    })();
  }

}
