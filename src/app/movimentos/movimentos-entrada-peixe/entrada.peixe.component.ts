import {Component} from "@angular/core";
import {BaseCrudComponent} from "../../core/base.crud.component";
import {AlertModelService} from "../../services/alert.model.service";
import {PeixeService} from "../../services/peixe.service";
import {EntradaPeixe} from "../../model/entrada.peixe";
import {TanqueService} from "../../services/tanque.service";
import {Tanque} from "../../model/tanque";
import {Peixe} from "../../model/peixe";
import {EntradaPeixeService} from "../../services/entrada.peixe.service";

@Component({
  selector: 'entrada-peixe',
  templateUrl: './entrada.peixe.component.html',
  styleUrls: ['./entrada.peixe.component.css']
})
export class EntradaPeixeComponent extends BaseCrudComponent<EntradaPeixe> {


  tanques: Tanque[]=[];
  peixes: Peixe[]=[];

  info: string = '';

  constructor(public mainService: EntradaPeixeService,
              public tanqueServie: TanqueService,
              public peixeServie: PeixeService,
              public alertService: AlertModelService) {
    super(mainService,alertService,false)
  }

  ngOnInit() {
    this.init();
    this.carregarCombos();
  }

  clean() {
    this.init();
    super.clean();
  }

  init(){
    this.filter = new EntradaPeixe()
    this.filter.tanque = new Tanque()
    this.filter.peixe = new Peixe()
  }

  carregarCombos(){
    this.tanqueServie.list().subscribe( tanques => this.tanques = tanques);
    this.peixeServie.list().subscribe( peixes => this.peixes = peixes);
  }

  infoTanque(id: number){
    if(id){
      this.tanques.forEach( tanque => {
        if(tanque.id == id) {
          this.info = `Capacidade: ${tanque.capacidade}
          | Quantidade: 0
          | Peso: 0
          | Semana: 0`
        }
      })
    }
  }

}
