import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})

export class Component2Component {
  @Input() customersData: any[] = [];
  filterData: any[] = [];

  ngOnInit(): void {
    this.filterData = this.customersData;
  }
  onFilter=(event:any)=>{
    const searchTerm = event.target.value;

    if (searchTerm.length < 1) {
      this.filterData = this.customersData;
    } else {
      this.filterData = this.customersData.filter(
        (customer: any) =>
          customer.firstName?.toLocaleLowerCase().includes(searchTerm) ||
          customer.lastName?.toLocaleLowerCase().includes(searchTerm) ||
          customer.city?.toLocaleLowerCase().includes(searchTerm) ||
          customer.address?.toLocaleLowerCase().includes(searchTerm)|| 
          customer.state?.toLocaleLowerCase().includes(searchTerm)
      );
    }
  }

}
