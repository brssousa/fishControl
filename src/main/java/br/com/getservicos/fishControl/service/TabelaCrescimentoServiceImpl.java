package br.com.getservicos.fishControl.service;

import br.com.getservicos.fishControl.core.service.AbstractCrudService;
import br.com.getservicos.fishControl.model.TabelaCrescimento;
import br.com.getservicos.fishControl.repository.TabelaCrescimentoRepository;
import br.com.getservicos.fishControl.service.api.TabelaCrescimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class TabelaCrescimentoServiceImpl extends AbstractCrudService<TabelaCrescimento, Integer> implements TabelaCrescimentoService {

    @Autowired
    TabelaCrescimentoRepository tabelaCrescimentoRepository;

    @Override
    public JpaRepository getRepository() {
        return tabelaCrescimentoRepository;
    }
}