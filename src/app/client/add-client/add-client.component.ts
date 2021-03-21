import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  
  client : Client = new Client ();
 

  submitted = false;

  registerForm: FormGroup;

  constructor(public clientservice:ClientService, public fb:FormBuilder,public toastr:ToastrService,private router: Router) { }

  ngOnInit(): void {
    if(this.clientservice.choixmenu=='A')
    {
      this.initForm();
    }
  }

  initForm()
  {
    this.registerForm = this.fb.group
    ({
      libelle : ['',[Validators.required]],
      adresse : ['',[Validators.required]],
      tel : ['',[Validators.required]],
      email : ['',[Validators.required]],
      fax : ['',[Validators.required]],
      login : ['',[Validators.required]],
      pwd : ['',[Validators.required]],
    }

    );
  }

  get f() { return this.registerForm.controls; }

  ResetForm()
  {
   // this.clientservice.dataForm.reset();
  }

  onSubmit()
  {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {

      return;
    }

    const client = new Client();
    if(this.clientservice.choixmenu=='A')
    {
      this.addData();
    }

    else 
    {
     // this.updateData();
    }

  }

  addData()
  {
    this.clientservice.createData(this.client).subscribe(
      data=>{
        this.toastr.success ('Validation faite par succes ');
        this.onreset();

        const link =['allclient'];
   
        this.router.navigate(link);
      }
    );
  }

  onreset() {
    this.submitted = false;
    this.registerForm.reset();
  }
 /* updateData()
  {
    this.clientservice.updateData(this.clientservice.dataForm.value.id,this.clientservice.dataForm).
    subscribe(data=>{
      this.toastr.success ('Validation faite par succes ');
      this.ResetForm();
    });
  }*/
}
