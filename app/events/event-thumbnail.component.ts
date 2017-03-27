import { Component, Input } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
    selector:'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name | uppercase}}</h2>
        <div>Date: {{event?.date | date:'shortDate'}}</div>
        <div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}">Time: {{event?.time}}</div>
         <div [ngSwitch]="event?.time">
            <span *ngSwitchCase="'8:00 am'">Early start</span>
            <span *ngSwitchCase="'10:00 am'">Late start</span>
            <span *ngSwitchDefault>Normal start</span>
         </div>
        <div>Price: {{event?.price | currency:'USD':true}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location.address}}</span>
            <span class="pad-left">{{event?.location.city}}, {{event.location.country}}</span>
        </div>
        <div [hidden]="!event?.onlineUrl">
            <span>Online URL: {{event?.onlineUrl}}</span>
         </div>
    </div>
    `,
    styles: [`
    .pad-left { margin-left: 10px; }
    .well div {color: #bbb; }
    .thumbnail { min-height: 210px; }
    .green { color: #003300 !important; }
    .bold { font-weight : bold; }`]
})
export class EventThumbnailComponent
{
    @Input() event:IEvent
}