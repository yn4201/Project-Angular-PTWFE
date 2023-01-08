import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { PerfumeItem } from '../models/Item';
import { PerfumeItemService } from '../services/item.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-perfume-item',
  templateUrl: './insert-perfume-item.component.html',
  styleUrls: ['./insert-perfume-item.component.css']
})
export class InsertPerfumeItemComponent implements OnInit {
  insertFrm: FormGroup;
  private itemsCollection: AngularFirestoreCollection<PerfumeItemService>;
  constructor(public Router: Router,private fb: FormBuilder, private itemsrv: PerfumeItemService, private readonly afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection<PerfumeItemService>('items');
    this.insertFrm = this.fb.group({
      id: ['',Validators.required],
      name: ['', [Validators.required, Validators.minLength(4)]],
      brand: ['',Validators.required],
      origin: ['',Validators.required],
      money: ['',Validators.required],
      status: ['',Validators.required],
    });
  } 
  
  onSubmit() {
    this.itemsrv.insertItem(this.insertFrm.value).subscribe(data=>{
      
    })
  }
  ngOnInit(): void {
  }

}
