import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientInterface } from 'src/app/client-interface';
import { ClientService } from 'src/app/client.service';


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  dataHolder?: ClientInterface;
  clientFormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required,Validators.email]],
    amount: ['', Validators.required],
    city:  ['', Validators.required],
    gender: ['', Validators.required],
    age: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private service: ClientService
  ) { }

  ngOnInit(): void {
  }

  createClient(): void{
    if(this.clientFormGroup.status == "VALID"){
      this.dataHolder = {
        name: String(this.clientFormGroup.value.name),
        email: String(this.clientFormGroup.value.email),
        age: Number(this.clientFormGroup.value.age),
        amount: String(this.clientFormGroup.value.amount),
        city: String(this.clientFormGroup.value.city),
        gender: String(this.clientFormGroup.value.gender)
      }
      this.service.createClient(this.dataHolder).subscribe(() => this.dataHolder);
      alert(this.clientFormGroup)
    }else{
      alert("The form is Invalid!");
    }
  }

}
