package br.com.getservicos.fishControl.repository;

import br.com.getservicos.fishControl.model.TabelaCrescimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TabelaCrescimentoRepository extends JpaRepository<TabelaCrescimento, Integer> {
}
