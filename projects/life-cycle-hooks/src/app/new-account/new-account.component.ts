import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(
    private loggingService: LoggingService,
    private accountService:AccountsService){
      this.accountService.statusUpdated.subscribe(
        (status:string) => alert('New status: '+status)
      )
  }
  // onCreateAccount(accountName: string, accountStatus: string) {
  //   this.accountAdded.emit({
  //     name: accountName,
  //     status: accountStatus
  //   });

    // hard coded 
   // console.log('A server status changed, new status: ' + accountStatus);
    
   // manual
   // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    
    // using service
    // this.loggingService.logStatusChange(accountStatus);

    onCreateAccount(accountName: string, accountStatus: string) {
     this.accountService.addAccount(accountName,accountStatus);
    // this.loggingService.logStatusChange(accountStatus);

  }
}
