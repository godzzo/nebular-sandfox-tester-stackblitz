import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormAutocompleteHandler } from 'sandfox-nebu-form-controls';


@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {
  formGroup: FormGroup;

  users: any[] = [
    {name: 'Apple Gate', value: 19},
    {name: 'Bernadett', value: 33},
    {name: 'Jasmine', value: 11},
    {name: 'Joe', value: 79},
    {name: 'Zoey', value: 199},
  ];

  userHandler = new class implements FormAutocompleteHandler {
    constructor(public parent: RocketComponent) {}

    search(comp, search) {
      comp.options = this.parent.users;
    }

    select(comp, value) {
      of(this.parent.users[1])
      .pipe(
        delay(1000)
      )
      .subscribe(val => {
        comp.optionForValue(val);
      });
    }
  }(this);

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      title: 'Hello World',
      type: null,
      isActive: true,
      userId: 79,
      created: new Date(), // '2020-11-02'
      planTime: new Date(),
      content: '<h1>Hello World :)</h1><p>How are You?</p>',
    });
  }

  ngOnInit(): void {}
}
