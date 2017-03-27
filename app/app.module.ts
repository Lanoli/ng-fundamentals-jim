import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { NavbarComponent } from './nav/navbar.component'
import { HttpModule } from '@angular/http'
import { TOASTR_TOKEN, 
    Toastr,
    JQ_TOKEN,
    CollapsibleWellComponent, 
    SimpleModalComponent,
    ModalTriggerDirective,
 } from './common/index'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { EventsAppComponent } from './events-app.component'
import {
    EventListResolver,
    EventResolver,
    EventRouteActivator,
    CreateEventComponent,
    EventDetailsComponent,
    EventService,
    EventThumbnailComponent,
    EventsListComponent,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    UpvoteComponent,
    VoterService,
    LocationValidator
} from './events/index'
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

declare let toastr: Toastr
declare let jQuery : Object

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpModule],
    declarations: [EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidator
    ],
    providers: [EventService,
        {provide: TOASTR_TOKEN, useValue: toastr},
        {provide: JQ_TOKEN, useValue: jQuery},
        EventRouteActivator,
        EventListResolver,
        EventResolver,
        AuthService,
        VoterService,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event do you really want to cancel?')
    return true
}