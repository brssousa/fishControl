import {Component} from "@angular/core";
import {BaseCrudComponent} from "../../core/base.crud.component";
import {AlertModelService} from "../../services/alert.model.service";
import {PeixeService} from "../../services/peixe.service";
import {EntradaPeixe} from "../../model/entrada.peixe";
import {TanqueService} from "../../services/tanque.service";
import {Tanque} from "../../model/tanque";
import {Peixe} from "../../model/peixe";
import {EntradaPeixeService} from "../../services/entrada.peixe.service";
import {TabelaCultivoService} from "../../services/tabela.cultivo.service";

@Component({
  selector: 'entrada-peixe',
  templateUrl: './entrada.peixe.component.html',
  styleUrls: ['./entrada.peixe.component.css']
})
export class EntradaPeixeComponent extends BaseCrudComponent<EntradaPeixe> {


  tanques: Tanque[]=[];
  peixes: Peixe[]=[];

  info: string = '';
  style: string;

  constructor(public mainService: EntradaPeixeService,
              private tanqueServie: TanqueService,
              private peixeServie: PeixeService,
              private tabelaCultivoServico: TabelaCultivoService,
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

  infoTanque(id: number) {
    if (id) {
      this.tanques.forEach(tanque => {
        if (tanque.id == id) {
          this.filter.tanque = tanque;
          this.tabelaCultivoServico.getByTanque(tanque.id).subscribe(dados => {
            if (dados) {
              if (dados.quantidade > tanque.capacidade) {
                this.style = "danger"
              } else {
                this.style = "info"
              }
              this.info = `Capacidade: ${tanque.capacidade}
              | Quantidade: ${dados.quantidade}
              | Peso: D?? ${dados.semana.pesoInicial}g at?? ${dados.semana.pesoFinal}g
              | Semana: ${dados.semana.semana}`
            } else {
              this.style = "info"
              this.info = `Capacidade: ${tanque.capacidade}`
            }
          })
        }
      })
    }
  }

  validator() {
    if(this.isNew()){
      if(this.mainForm.controls.quantidade.value > this.filter.tanque.capacidade && this.filter.tanque.limite){
        this.alertService.showAlertError(`A quantidade ?? maior que a capacidade do ${this.filter.tanque.tanque}`);
        return;
      }
    }
    super.validator();
  }

}
