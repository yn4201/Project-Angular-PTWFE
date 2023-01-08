import { PerfumeItem } from '../models/Item';
import { PerfumeItemService } from '../services/item.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.css']
})
export class DialogUpdateComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<PerfumeItem>;
  form !: FormGroup;
  myFlag = "unavailable";
  constructor(
    private itemsrv: PerfumeItemService,
    private readonly afs: AngularFirestore,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.itemsCollection = this.afs.collection<PerfumeItem>('items');
    this.form = this.formBuilder.group({
      id:[`${this.data.id}`, Validators.required],
      name:[`${this.data.name}`,[Validators.required, Validators.minLength(4)]],
      brand:[`${this.data.brand}`,[Validators.required]],
      origin:[`${this.data.origin}`,[Validators.required]],
      money:[`${this.data.money}`,[Validators.required]],
      status:[`${this.data.status}`]
    })
   }

  ngOnInit(): void {
    console.log(this.data)
  }

  public async update(){

    if(this.form.valid){
      alert('Update Successfull !!!');
      this.dialogRef.close();
    }
 
    this.itemsCollection.doc(this.data.docId).update(this.form.value);
  }

}
