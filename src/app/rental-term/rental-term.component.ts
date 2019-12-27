import { Component, OnInit } from '@angular/core';
import { RentalTermService } from './rental-term.service';
import { AlertService } from '../_alert';
import { GlobalAuth } from '../global-auth';
import {Router} from "@angular/router"

@Component({
  selector: 'app-rental-term',
  templateUrl: './rental-term.component.html',
  styleUrls: ['./rental-term.component.css']
})
export class RentalTermComponent implements OnInit {
  form: any = {};
  selectedFiles: FileList;
  constructor(private rentalTermService: RentalTermService, private alertService: AlertService, private authGlobal: GlobalAuth, private route : Router ) { }

  ngOnInit() {

    this.authGlobal.ngOnInit();

    if(this.authGlobal.authority === 'user' || this.authGlobal.authority === undefined){
      this.route.navigate(['/login']);  
      return;
    }
    
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    document.querySelector("#file-name").textContent = event.target.files[0].name;
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.form.termTitle === undefined) {
      this.alertService.info("Favor preencher o título do termo.");
      return;
    }

    if (this.selectedFiles === undefined) {
      this.alertService.info("Favor selecionar um termo.");
      return;
    }

    if (!this.selectedFiles.item(0).name.includes(".docx")) {
      this.alertService.info("Favor selecionar um termo em formato docx.");
      return;
    }

    this.rentalTermService.uploadTerm(this.selectedFiles.item(0), this.form.termTitle).subscribe(data => {
      this.alertService.success('Termo cadastrado com sucesso!');
    }, error => {
      switch (error.status) {
        case 0:
          this.alertService.error('Servidor indisponivel.');
          break;
        case 500:
          this.alertService.error('Erro interno do servidor.');
          break;
        case 406:
          this.alertService.error('Extensão do arquivo é inválida.');
          break;
        case 401:
          this.alertService.error('Necessário efetuar o login.');
          break;
      }
    });
  }
}
