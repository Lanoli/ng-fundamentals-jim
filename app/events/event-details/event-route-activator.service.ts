import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router"
import { Injectable } from "@angular/core"
import { EventService } from '../shared/events.service'

@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private eventservice: EventService, private router: Router)
    {

    }

    canActivate(route: ActivatedRouteSnapshot) {
       const eventExists =  !!this.eventservice.getEvent(+route.params['id'])

        if (!eventExists)
        this.router.navigate(['/404'])

        return eventExists
    }

}