import { Component, OnInit } from '@angular/core';
import { CadastroColaboradoresService } from './cadastr-colaboradores.service';
import { GlobalAuth } from '../global-auth';

@Component({
  selector: 'app-cadastro-colaboradores',
  templateUrl: './cadastro-colaboradores.component.html',
  styleUrls: ['./cadastro-colaboradores.component.css']
})
export class CadastroColaboradoresComponent implements OnInit {

  constructor(private cadastrarColaboradoresService: CadastroColaboradoresService, private authGlobal: GlobalAuth) { }

  selectedFiles: FileList;
  fileToUpload: File;

  ngOnInit() {

    this.authGlobal.ngOnInit();

  }

  selectFile(event) {
    console.log("testando");
    this.selectedFiles = event.target.files;
  }

  onSubmit(event) {

    this.fileToUpload = this.selectedFiles.item(0);
    console.log(this.cadastrarColaboradoresService.uploadFile(this.fileToUpload).subscribe());

  }
}
