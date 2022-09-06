({  //função para criar a tabela com os dados que veio do banco de dados
    buscarRegistro : function(component, event, helper) {

        component.set('v.columns', [
            {label: 'Nome do Registro', fieldName: 'Name', type: 'text', editable: true},
            {label: 'Telefone', fieldName: 'Phone', type: 'Phone', editable: true},
            {label: 'Descrição', fieldName: 'Description', type: 'text', editable: true}
            
        ]);

        helper.retornarInformação(component, event);  

    },
    //função do botão para enviar a informação de salvar a atualização
    salvarAtualizacao: function(component, event, helper){
        
        helper.atualizacao(component, event, helper);
    }

})
