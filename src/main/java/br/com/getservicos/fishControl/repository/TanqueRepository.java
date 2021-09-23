package br.com.getservicos.fishControl.repository;

import br.com.getservicos.fishControl.model.Tanque;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TanqueRepository extends JpaRepository<Tanque, Integer> {
}
