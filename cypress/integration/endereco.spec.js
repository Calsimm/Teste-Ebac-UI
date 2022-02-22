///<reference types="cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{ 
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it.only('Deve fazer cadastro de faturamento com sucesso ', () => {
        EnderecoPage.editarEnderecoFaturamento('Ana', 'Silva', 'EBAC', 'Brasil', 'Rua São Paulo', '21', 'Presidente Prudente', 'São Paulo', '19025510', '18912321929', 'teste@teste.com.br')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});