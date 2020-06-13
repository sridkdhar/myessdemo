import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'modelparameters.component.html' })
export class ModelparametersComponent {
    user: User;
     
    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}
