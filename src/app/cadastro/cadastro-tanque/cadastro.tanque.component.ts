import {Component} from "@angular/core";
import {BaseCrudComponent} from "../../core/base.crud.component";
import {AlertModelService} from "../../services/alert.model.service";
import {TanqueService} from "../../services/tanque.service";
import {Tanque} from "../../model/tanque";

@Component({
  selector: 'cad-tanque',
  templateUrl: './cadastro.tanque.component.html',
  styleUrls: ['./cadastro.tanque.component.css']
})
export class CadastroTanqueComponent extends BaseCrudComponent<Tanque> {


  constructor(public mainService: TanqueService,
              public alertService: AlertModelService) {
    super(mainService,alertService)
  }

  ngOnInit() {
    this.filter = new Tanque();
  }

  clean() {
    this.filter = new Tanque();
    super.clean();
  }

  validator() {
    if(this.isNew()){
      let index = this.dataSource.findIndex( value => {
        return value.tanque == this.filter.tanque;
      })
      if(index > -1){
        this.alertService.showAlertError(`Ja existe um tanque com este nome. ${this.filter.tanque}`);
        return;
      }
    }
    super.validator();
  }

}
