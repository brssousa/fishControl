import {Injectable} from "@angular/core";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {AlertModalComponent} from "../util/alert-model/alert.modal.component";
import {TypeAlertEnum} from "../model/type-alert-enum";

@Injectable({
  providedIn: "root"
})
export class AlertModelService {

  constructor(private modelService: BsModalService) {
  }

  private alert(message: string, type: TypeAlertEnum) {
    const bsModelRef = this.modelService.show(AlertModalComponent);
    bsModelRef.content.type = type;
    bsModelRef.content.message = message;
    setTimeout( x => {
      bsModelRef.hide();
    }, 2000);
  }

  showAlertError(message: string) {
    this.alert(message, TypeAlertEnum.DANGER);
  }

  showAlertSuccess(message: string) {
    this.alert(message, TypeAlertEnum.SUCCESS);
  }

  showAlert(message: string, type: TypeAlertEnum) {
    this.alert(message,type);
  }

  showGeneralMessage() {
    let message = 'Ops!'
    this.alert(message, TypeAlertEnum.DARK);
  }

  showConfirmMessage(template: any): BsModalRef {
    return this.modelService.show(template);
  }
}
