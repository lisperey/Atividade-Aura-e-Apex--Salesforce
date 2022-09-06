({ //função que guarda os dados do registro
    buscarRegistro : function(component, event, helper) {

        component.set('v.columns', [
            {label: 'Nome do Registro', fieldName: 'Name', type: 'text', editable: true},
            {label: 'Telefone', fieldName: 'Phone', type: 'Phone', editable: true},
            {label: 'Descrição', fieldName: 'Description', type: 'text', editable: true}
            
            
        ]);

        helper.retornarInformação(component, event);  

    },
    
    //função que envia para o helper a solicitação de atualização
    salvarAtualizacao: function(component, event, helper){
        

        helper.atualizacao(component, event, helper);
    }

      
})
