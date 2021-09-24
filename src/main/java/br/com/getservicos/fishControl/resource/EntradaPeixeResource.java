package br.com.getservicos.fishControl.resource;

import br.com.getservicos.fishControl.model.EntradaPeixe;
import br.com.getservicos.fishControl.service.api.EntradaPeixeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/entrada-peixe")
public class EntradaPeixeResource {

    @Autowired
    EntradaPeixeService entradaPeixeService;

    @GetMapping("/list")
    public ResponseEntity<List<EntradaPeixe>> list() {
        List<EntradaPeixe> entityList = entradaPeixeService.findAll();
        if(entityList!=null) {
            return ResponseEntity.status(HttpStatus.OK).body(entityList);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<EntradaPeixe> save(@RequestBody EntradaPeixe entity) {
        EntradaPeixe save = entradaPeixeService.save(entity);
        return ResponseEntity.status(HttpStatus.CREATED).body(save);
    }

    @PutMapping("/edit")
    public ResponseEntity<EntradaPeixe> update(@RequestBody EntradaPeixe entity) {
        EntradaPeixe update = entradaPeixeService.update(entity);
        return ResponseEntity.status(HttpStatus.OK).body(update);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable(value = "id") Integer id) {
        entradaPeixeService.delete(id);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<EntradaPeixe> getById(@PathVariable(value = "id") Integer id) {
        Optional<EntradaPeixe> entity = entradaPeixeService.findById(id);
        if(entity.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(entity.get());
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
