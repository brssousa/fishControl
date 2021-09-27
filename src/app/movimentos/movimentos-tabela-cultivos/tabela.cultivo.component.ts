import {Component} from "@angular/core";
import {BaseCrudComponent} from "../../core/base.crud.component";
import {AlertModelService} from "../../services/alert.model.service";
import {TabelaCultivo} from "../../model/tabela.cultivo";
import {TabelaCultivoService} from "../../services/tabela.cultivo.service";

@Component({
  selector: 'tabela-cultivo',
  templateUrl: './tabela.cultivo.component.html',
  styleUrls: ['./tabela.cultivo.component.css']
})
export class TabelaCultivoComponent extends BaseCrudComponent<TabelaCultivo> {

  constructor(public mainService: TabelaCultivoService,
              public alertService: AlertModelService) {
    super(mainService,alertService
    )
  }

  ngOnInit() {
    this.filter = new TabelaCultivo();
  }

}
