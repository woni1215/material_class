import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
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
import { MatPaginatorModule} from '@angular/material/paginator';//table
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';//分頁器
import { MatCheckboxModule} from '@angular/material/checkbox';//checkbox
import { MatGridListModule} from '@angular/material/grid-list';//gridlist
import { MatStepperModule} from '@angular/material/stepper';//stepper
import { MatDialogModule} from '@angular/material/dialog';//dialog
// import { MatDialog } from '@angular/material/dialog';
import { MatRadioModule} from '@angular/material/radio';//radio
import { MatTabsModule} from '@angular/material/tabs';//tabs
import { MatSelectModule} from '@angular/material/select';
//router
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PositionComponent } from './position/position.component';
import { ManagerComponent } from './manager/manager.component';
import { SurveyComponent } from './survey/survey.component';
import { ScoreComponent } from './score/score.component';
import { DialogComponent } from './dialog/dialog.component';
@NgModule({
  entryComponents: [DialogComponent],
  declarations: [
    AppComponent,
    TopBarComponent,
    FormComponent,
    PositionComponent,
    ManagerComponent,
    SurveyComponent,
    ScoreComponent,
    DialogComponent,
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
    // MatDialog,
    MatRadioModule,
    MatTabsModule,
    MatSelectModule,
    // MatTableDataSource,
    // MatPaginator, MatPaginatorIntl,
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
