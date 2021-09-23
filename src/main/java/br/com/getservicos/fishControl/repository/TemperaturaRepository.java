package br.com.getservicos.fishControl.repository;

import br.com.getservicos.fishControl.model.Temperatura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TemperaturaRepository extends JpaRepository<Temperatura, Integer> {

    @Override
    @Query("select a from Temperatura a Order By a.mes")
    List<Temperatura> findAll();
}
