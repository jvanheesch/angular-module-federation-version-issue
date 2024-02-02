import { Component } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  emitted = false;

  clicked() {
    of('irrelevant')
      .pipe(delayWhen(() => EMPTY))
      .subscribe(() => {
        this.emitted = true;
      });
  }
}
