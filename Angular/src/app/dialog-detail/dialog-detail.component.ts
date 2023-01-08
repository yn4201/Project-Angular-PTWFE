import { PerfumeItem } from '../models/Item';
import { PerfumeItemService } from '../services/item.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.css']
})
export class DialogDetailComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<PerfumeItem>;
  form !: FormGroup;


  constructor(

    private readonly afs: AngularFirestore,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) 
    {
      this.itemsCollection = this.afs.collection<PerfumeItem>('items');
      this.form = this.formBuilder.group({
      // id:[`${this.data.id}`, Validators.required],
      // name:[`${this.data.name}`,[Validators.required, Validators.minLength(4)]],
      // brand:[`${this.data.brand}`,[Validators.required]],
      // origin:[`${this.data.origin}`,[Validators.required]],
      // money:[`${this.data.money}`,[Validators.required]],
      // status:[`${this.data.status}`]
    })
    }

  ngOnInit(): void {
    console.log(this.data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
