import { Component, OnInit, Inject, Input  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfumeItem } from '../models/Item';
import { PerfumeItemService } from '../services/item.service';


@Component({
  selector: 'app-item-dialog-detail',
  templateUrl: './item-dialog-detail.component.html',
  styleUrls: ['./item-dialog-detail.component.css']
})
export class ItemDialogDetailComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<PerfumeItem>;
  form !: FormGroup;
  myFlag = "unavailable";
  constructor(
    private readonly afs: AngularFirestore,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ItemDialogDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.itemsCollection = this.afs.collection<PerfumeItem>('items');
    this.form = this.formBuilder.group({
      id:[`${this.data.id}`,Validators.required],
      name:[`${this.data.name}`,[Validators.required, Validators.minLength(4)]],
      brand:[`${this.data.brand}`,[Validators.required]],
      origin:[`${this.data.origin}`,[Validators.required]],
      money:[`${this.data.money}`,[Validators.required]],
      status:[`${this.data.status}`]
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }
}
