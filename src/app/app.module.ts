import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
//material
import { MatSliderModule } from '@angular/material/slider';//加入material
import { MatMenuModule} from '@angular/material/menu';//menu
import { MatCardModule} from '@angular/material/card';//card
import { MatButtonModule} from '@angular/material/button';//button
import { MatAutocompleteModule} from '@angular/material/autocomplete';//input
import { MatInputModule} from '@angular/material/input';//input
import { MatIconModule} from '@angular/material/icon';//icon
import { MatToolbarModule} from '@angular/material/toolbar';//toolbar
import { MatFormFieldModule} from '@angular/material/form-field';//form-field
import { MatSidenavModule} from '@angular/material/sidenav';//sidemodule
import { MatTableModule} from '@angular/material/table';//table
import { MatListModule} from '@angular/material/list';//List
import { MatSortModule} from '@angular/material/sort';//table
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';//paginator
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DATE_LOCALE_FACTORY } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
// import { MatTableDataSource } from '@angular/material/table';
import { MatCheckboxModule} from '@angular/material/checkbox';//checkbox
import { MatGridListModule} from '@angular/material/grid-list';//gridlist
import { MatStepperModule} from '@angular/material/stepper';//stepper
import { MatDialogModule} from '@angular/material/dialog';//dialog
import { MatRadioModule} from '@angular/material/radio';//radio
import { MatTabsModule} from '@angular/material/tabs';//tabs
import { MatSelectModule} from '@angular/material/select';
//router
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PositionComponent } from './position/position.component';
import { ManagerComponent } from './manager/manager.component';
import { SurveyComponent } from './survey/survey.component';
// import { SurveyComponent MyCustomPaginatorIntl } from './survey/survey.component';
import { ScoreComponent, } from './score/score.component';
import { DialogComponent } from './form/dialog/dialog.component';
import { ShopComponent } from './shop/shop.component';
import { AddCartDialogComponent } from './shop/add-cart-dialog/add-cart-dialog.component';
import { AppleDialogComponent } from './shop/apple-dialog/apple-dialog.component';

//primeng
import {ButtonModule} from 'primeng/button';
import { PrimngComponent } from './primng/primng.component';
import { GetTableComponent } from './get-table/get-table.component';
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
    ScoreComponent,
    DialogComponent,
    ShopComponent,
    AddCartDialogComponent,
    AppleDialogComponent,
    PrimngComponent,
    GetTableComponent,
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
    HttpClientModule,
    // MatTableDataSource,
    RouterModule.forRoot([
      {path:"form",component:FormComponent}
    ]),
    RouterModule.forRoot([
      {path:"score",component:ScoreComponent}
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
      {path:"dialog",component:DialogComponent}
    ]),
    RouterModule.forRoot([
      {path:"shop",component:ShopComponent}
    ]),
    RouterModule.forRoot([
      {path:"primng",component:PrimngComponent}
    ]),
    RouterModule.forRoot([
      {path:"GetTable",component:GetTableComponent}
    ])
  ],

  providers: [
    // {provide: MAT_DATE_LOCALE, useValue: 'zh-TW'},//改成中文
    { provide: MAT_DATE_FORMATS, useValue: TW_FORMATS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
