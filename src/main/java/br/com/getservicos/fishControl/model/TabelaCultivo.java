package br.com.getservicos.fishControl.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
public class TabelaCultivo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tanque")
    private Tanque tanque;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "peixe")
    private Peixe peixe;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "semana")
    private TabelaCrescimento semana;

    private Integer quantidade;

    @Temporal(TemporalType.TIMESTAMP)
    private Date ultimaAtualizacao;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Tanque getTanque() {
        return tanque;
    }

    public void setTanque(Tanque tanque) {
        this.tanque = tanque;
    }

    public Peixe getPeixe() {
        return peixe;
    }

    public void setPeixe(Peixe peixe) {
        this.peixe = peixe;
    }

    public TabelaCrescimento getSemana() {
        return semana;
    }

    public void setSemana(TabelaCrescimento semana) {
        this.semana = semana;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public Date getUltimaAtualizacao() {
        return ultimaAtualizacao;
    }

    public void setUltimaAtualizacao(Date ultimaAtualizacao) {
        this.ultimaAtualizacao = ultimaAtualizacao;
    }
}
