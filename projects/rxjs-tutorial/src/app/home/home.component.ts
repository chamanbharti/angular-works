import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // approach I

  // ngOnInit(): void{
  //   interval(100).subscribe(
  //     count => {
  //       console.log(count);
  //     }
  //   );

  // approach II
  private firstObsSubscription: Subscription;
  ngOnInit(): void{
  //  this.firstObsSubscription = interval(1000).subscribe(
  //     count => {
  //       console.log(count);
  //     }
  //   );

  /*
  const customObservable = new Observable(
    observer => {
      let count = 0;
      setInterval( () => {
        observer.next(count);
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000);
    }
  );

  this.firstObsSubscription = customObservable.subscribe(
    data => {
      console.log(data);
    },
    error => {
      console.log(error);
      alert(error.message);
    }
  );
  */

  /*
  const customObservable = new Observable(
    observer => {
      let count = 0;
      setInterval( () => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000);
    }
  );

  this.firstObsSubscription = customObservable.subscribe(
   (data: number) => {
    console.log('Round: ' + ( data + 1));
  },
    error => {
      console.log(error);
      alert(error.message);
    },
    () => {
      console.log('completed!');
    }
  );
*/

/*
const customObservable = new Observable(
  observer => {
    let count = 0;
    setInterval( () => {
      observer.next(count);
      if (count === 5) {
        observer.complete();
      }
      if (count > 3) {
        observer.error(new Error('Count is greater 3!'));
      }
      count++;
    }, 1000);
  }
);

this.firstObsSubscription =
customObservable.pipe(
  map( (data: number) => {
    return 'Round: ' + (data + 1);
  }))
.subscribe(
  data => {
    console.log(data);
  },
  error => {
    console.log(error);
    alert(error.message);
  },
  () => {
    console.log('completed!');
  }
);
*/

const customObservable = new Observable(
  observer => {
    let count = 0;
    setInterval( () => {
      observer.next(count);
      if (count === 5) {
        observer.complete();
      }
      if (count > 3) {
        observer.error(new Error('Count is greater 3!'));
      }
      count++;
    }, 1000);
  }
);


this.firstObsSubscription =
customObservable.pipe(
  filter( data => {
    return data > 0;
  }),

  map( (data: number) => {
    return 'Round: ' + (data + 1);
  })

  )
.subscribe(
  data => {
    console.log(data);
  },
  error => {
    console.log(error);
    alert(error.message);
  },
  () => {
    console.log('completed!');
  }
);

  }

  ngOnDestroy(): void{
    this.firstObsSubscription.unsubscribe();
  }

}
