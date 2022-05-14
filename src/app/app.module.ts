import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//material
import { MatSliderModule } from '@angular/material/slider';//加入material
import { MatMenuModule } from '@angular/material/menu';//menu
import { MatCardModule } from '@angular/material/card';//card
import { MatButtonModule } from '@angular/material/button';//button
import { MatAutocompleteModule } from '@angular/material/autocomplete';//input
import { MatInputModule } from '@angular/material/input';//input
import { MatIconModule } from '@angular/material/icon';//icon
import { MatToolbarModule } from '@angular/material/toolbar';//toolbar
import { MatFormFieldModule,MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';//form-field
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//雙向連結要加FormsModule
import { MatSidenavModule } from '@angular/material/sidenav';//sidemodule
import { MatTableModule } from '@angular/material/table';//table
import { MatListModule } from '@angular/material/list';//List
import { MatSortModule } from '@angular/material/sort';//sort
import { MatPaginatorModule } from '@angular/material/paginator';//paginator
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DATE_LOCALE_FACTORY } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';//checkbox
import { MatGridListModule } from '@angular/material/grid-list';//gridlist
import { MatStepperModule } from '@angular/material/stepper';//stepper
import { MatDialogModule} from '@angular/material/dialog';//dialog
import { MatRadioModule} from '@angular/material/radio';//radio
import { MatTabsModule} from '@angular/material/tabs';//tabs
import { MatSelectModule } from '@angular/material/select';

//primeng
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

//router
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormComponent } from './form/form.component';
import { PositionComponent } from './position/position.component';
import { ManagerComponent } from './manager/manager.component';
import { SurveyComponent } from './survey/survey.component';
import { TableComponemt } from './table/table.component';
import { DialogComponent } from './form/dialog/dialog.component';
import { ShopComponent } from './shop/shop.component';
import { AddCartDialogComponent } from './shop/add-cart-dialog/add-cart-dialog.component';
import { AppleDialogComponent } from './shop/apple-dialog/apple-dialog.component';
import { GetTableComponent } from './get-table/get-table.component';
import { PrimengComponemt } from './primeng/primeng.component';
import { GetTable2Component } from './get-table2/get-table2.component';
import { EditDialogComponent } from './get-table2/edit-dialog/edit-dialog.component';
import { PostApiComponent } from './post-api/post-api.component';
import { PatchApiComponent } from './patch-api/patch-api.component';

export const TW_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY MMM',
    dateAllyLabel: 'YYYY/MM/DD',
    monthYearAllyLabel: 'YYYY MMM'
  }
};
@NgModule({
  // entryComponents: [DialogComponent],
  declarations: [
    AppComponent,
    TopBarComponent,
    FormComponent,
    PositionComponent,
    ManagerComponent,
    SurveyComponent,
    TableComponemt,
    DialogComponent,
    ShopComponent,
    AddCartDialogComponent,
    AppleDialogComponent,
    PrimengComponemt,
    GetTableComponent,
    GetTable2Component,
    EditDialogComponent,
    PostApiComponent,
    PatchApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatGridListModule,
    MatStepperModule,
    MatDialogModule,
    MatRadioModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatTreeModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,//需在BrowserModule之後
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"form",component:FormComponent}
    ]),
    RouterModule.forRoot([
      {path:"table",component:TableComponemt}
    ]),
    RouterModule.forRoot([
      {path:"position",component:PositionComponent}
    ]),
    RouterModule.forRoot([
      {path:"manager",component:ManagerComponent}
    ]),
    RouterModule.forRoot([
      {path:"survey",component:SurveyComponent}
    ]),
    RouterModule.forRoot([
      {path:"shop",component:ShopComponent}
    ]),
    RouterModule.forRoot([
      {path:"primeng",component:PrimengComponemt}
    ]),
    RouterModule.forRoot([
      {path:"GetTable",component:GetTableComponent}
    ]),
    RouterModule.forRoot([
      {path:"GetTable2",component:GetTable2Component}
    ]),
    RouterModule.forRoot([
      {path:"postApi",component:PostApiComponent}
    ]),
    RouterModule.forRoot([
      {path:"patchApi",component:PatchApiComponent}
    ]),
  ],

  providers: [
    // {provide: MAT_DATE_LOCALE, useValue: 'zh-TW'},//改成中文
    { provide: MAT_DATE_FORMATS, useValue: TW_FORMATS },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
