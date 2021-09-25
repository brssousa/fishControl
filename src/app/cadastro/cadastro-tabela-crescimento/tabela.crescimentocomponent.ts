import {Component} from "@angular/core";
import {BaseCrudComponent} from "../../core/base.crud.component";
import {AlertModelService} from "../../services/alert.model.service";
import {TabelaCrescimento} from "../../model/tabela.crescimento";
import {TabelaCrescimentoService} from "../../services/tabela.crescimento.service";

@Component({
  selector: 'tabela-crescimento',
  templateUrl: './tabela.crescimento.component.html',
  styleUrls: ['./tabela.crescimento.component.css']
})
export class TabelaCrescimentocomponent extends BaseCrudComponent<TabelaCrescimento> {


  constructor(public mainService: TabelaCrescimentoService,
              public alertService: AlertModelService) {
    super(mainService,alertService)
  }

  ngOnInit() {
    this.filter = new TabelaCrescimento();
  }

}
