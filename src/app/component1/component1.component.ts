import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  
})
export class Component1Component {
  customerData = new FormGroup({
    orderTotal: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required, Validators.minLength(4)]),
    state: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });
  @Input() addUser: any;
  onSubmit=(event:any)=>{event.preventDefault();
    const userData = {
      city: this.customerData.value.city,
      state: this.customerData.value.state,
      address: this.customerData.value.address,
      lastName: this.customerData.value.lastName,
      firstName: this.customerData.value.firstName,
      orderTotal: this.customerData.value.orderTotal,
    };

    this.addUser(userData);
  }
}
