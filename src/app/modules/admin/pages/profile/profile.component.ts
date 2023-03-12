import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProfileService } from '../settings/service/profile.service';

@Component({
    selector       : 'profile',
    templateUrl    : './profile.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent
{
    /**
     * Constructor
     */
    constructor(private srv :ProfileService)
    {
    }


    
}
