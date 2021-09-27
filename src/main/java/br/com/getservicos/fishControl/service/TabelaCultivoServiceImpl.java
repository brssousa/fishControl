package br.com.getservicos.fishControl.service;

import br.com.getservicos.fishControl.core.service.AbstractCrudService;
import br.com.getservicos.fishControl.model.TabelaCultivo;
import br.com.getservicos.fishControl.repository.TabelaCultivoRepository;
import br.com.getservicos.fishControl.service.api.TabelaCultivoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class TabelaCultivoServiceImpl extends AbstractCrudService<TabelaCultivo, Integer> implements TabelaCultivoService {

    @Autowired
    TabelaCultivoRepository tabelaCultivoRepository;

    @Override
    public JpaRepository getRepository() {
        return tabelaCultivoRepository;
    }

    @Override
    public TabelaCultivo getByTanque(String tanque) {
        return tabelaCultivoRepository.getByTanque(tanque);
    }
}
