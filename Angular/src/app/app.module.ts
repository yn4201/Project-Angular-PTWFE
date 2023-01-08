import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HeaderComponent } from './header/header.component';
import { InsertItemComponent } from './insert-item/insert-item.component';
import { PerfumeItemComponent } from './perfume-item/perfume-item.component';
import { UpdateItemsComponent } from './update-items/update-items.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DialogUpdateComponent } from './dialog-update/dialog-update.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { DialogDetailComponent } from './dialog-detail/dialog-detail.component';
import {MatSortModule} from '@angular/material/sort';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {CommonModule } from '@angular/common';
import { NhidetailsComponent } from './nhidetails/nhidetails.component';
import { MainComponent } from './main/main.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ItemDialogDetailComponent } from './item-dialog-detail/item-dialog-detail.component';
import { ItemDialogUpdateComponent } from './item-dialog-update/item-dialog-update.component';
import { InsertPerfumeItemComponent } from './insert-perfume-item/insert-perfume-item.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    PerfumeItemComponent,
    LoginComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
    HeaderComponent,
    InsertItemComponent,
    PerfumeItemComponent,
    UpdateItemsComponent,
    SignUpComponent,
    DialogUpdateComponent,
    DialogDetailComponent,
    NhidetailsComponent,

    MainComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent,
    ItemDialogDetailComponent,
    ItemDialogUpdateComponent,
    InsertPerfumeItemComponent,
    DialogDeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatSortModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    Ng2SearchPipeModule,
    MatTooltipModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
