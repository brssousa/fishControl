package br.com.getservicos.fishControl.service;

import br.com.getservicos.fishControl.core.service.AbstractCrudService;
import br.com.getservicos.fishControl.model.EntradaPeixe;
import br.com.getservicos.fishControl.repository.EntradaPeixeRepository;
import br.com.getservicos.fishControl.service.api.EntradaPeixeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class EntradaPeixeServiceImpl  extends AbstractCrudService<EntradaPeixe, Integer> implements EntradaPeixeService {

    @Autowired
    EntradaPeixeRepository entradaPeixeRepository;

    @Override
    public JpaRepository getRepository() {
        return entradaPeixeRepository;
    }
}
