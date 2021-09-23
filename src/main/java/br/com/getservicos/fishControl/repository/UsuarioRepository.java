package br.com.getservicos.fishControl.repository;

import br.com.getservicos.fishControl.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}
