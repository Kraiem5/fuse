import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'environments/environment';

@Component({
    selector       : 'settings-plan-billing',
    templateUrl    : './plan-billing.component.html',
    styleUrls       : ['./plan-billing.component.css'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsPlanBillingComponent implements OnInit
{
    @ViewChild('singleInput',{static:false}) singleInput:ElementRef
    planBillingForm: FormGroup;
    plans: any[];

    image:any

    constructor(
        private _formBuilder: FormBuilder,
        private http:HttpClient
    )
    {
    }


    

    selectImage(event){
        if(event.target.files.lenght>0){
        const file = event.target.files[0]
        console.log(file);
        
        this.image=file
      }
    }

      onsubmit() {
        const formdata = new FormData()
        formdata.append('file',this.image)  
        // post request to express backend
        this.http.post<any>(environment.backend_url+'api/user/file',formdata)
        .subscribe((res)=>{
            console.log(res)
        },err =>{
            console.log(err);
            
        })
      }

    ngOnInit(): void
    {

        
        // Create the form
        this.planBillingForm = this._formBuilder.group({
            plan          : ['team'],
            cardHolder    : ['Brian Hughes'],
            cardNumber    : [''],
            cardExpiration: [''],
            cardCVC       : [''],
            country       : ['usa'],
            zip           : ['']
        });

        // Setup the plans
        this.plans = [
            {
                value  : 'basic',
                label  : 'BASIC',
                details: 'Starter plan for individuals.',
                price  : '10'
            },
            {
                value  : 'team',
                label  : 'TEAM',
                details: 'Collaborate up to 10 people.',
                price  : '20'
            },
            {
                value  : 'enterprise',
                label  : 'ENTERPRISE',
                details: 'For bigger businesses.',
                price  : '40'
            }
        ];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }


}
