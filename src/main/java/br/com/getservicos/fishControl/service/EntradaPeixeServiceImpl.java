package br.com.getservicos.fishControl.service;

import br.com.getservicos.fishControl.core.service.AbstractCrudService;
import br.com.getservicos.fishControl.model.EntradaPeixe;
import br.com.getservicos.fishControl.model.TabelaCrescimento;
import br.com.getservicos.fishControl.model.TabelaCultivo;
import br.com.getservicos.fishControl.repository.EntradaPeixeRepository;
import br.com.getservicos.fishControl.repository.TabelaCrescimentoRepository;
import br.com.getservicos.fishControl.repository.TabelaCultivoRepository;
import br.com.getservicos.fishControl.service.api.EntradaPeixeService;
import br.com.getservicos.fishControl.service.api.TabelaCrescimentoService;
import br.com.getservicos.fishControl.service.api.TabelaCultivoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class EntradaPeixeServiceImpl  extends AbstractCrudService<EntradaPeixe, Integer> implements EntradaPeixeService {

    @Autowired
    EntradaPeixeRepository entradaPeixeRepository;

    @Autowired
    TabelaCultivoService tabelaCultivoService;

    @Autowired
    TabelaCrescimentoService tabelaCrescimentoService;

    @Override
    public JpaRepository getRepository() {
        return entradaPeixeRepository;
    }

    @Override
    protected void beforeSave(EntradaPeixe entity) {
        populaTabelaCultivo(entity);
        //super.beforeSave(entity);
    }

    private void populaTabelaCultivo(EntradaPeixe entity) {

        TabelaCultivo tabelaCultivo = new TabelaCultivo();
        TabelaCrescimento tabelaCrescimento = new TabelaCrescimento();
        tabelaCultivo = tabelaCultivoService.getByTanque(entity.getTanque().getTanque());
        if(tabelaCultivo!=null && tabelaCultivo.getId()!=null){
            //update
        } else {
            tabelaCrescimento = tabelaCrescimentoService.getByPeso(entity.getPeso());
        }

    }
}
