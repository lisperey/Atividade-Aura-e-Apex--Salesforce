({  //função para criar a tabela com os dados que veio do banco de dados
    criarTabela : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Nome do Registro', fieldName: 'Name', type: 'text'},
            {label: 'Telefone', fieldName: 'Phone', type: 'Phone'},
            {label: 'Descrição', fieldName: 'Description', type: 'text'}
            
            
        ]);
        //retorna os dados do banco de dados
        helper.retornarListaRegistros(component, event);
    
    }
})