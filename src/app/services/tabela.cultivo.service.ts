import {BaseCrudService} from "../core/base.crud.service";
import {TabelaCultivo} from "../model/tabela.cultivo";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TabelaCultivoService extends BaseCrudService<TabelaCultivo> {

  constructor(public http: HttpClient) {
    super(http, "/tabela-cultivo");
  }
}
