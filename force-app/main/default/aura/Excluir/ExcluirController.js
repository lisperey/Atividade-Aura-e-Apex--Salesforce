({  //Função para alocar os valores na tabela
    buscarRegistro : function(component, event, helper) {

        component.set('v.columns', [
            {label: 'Nome do Registro', fieldName: 'Name', type: 'text'},
            {label: 'Telefone', fieldName: 'Phone', type: 'Phone'},
            {label: 'Descrição', fieldName: 'Description', type: 'text'}
            
        ]);

        helper.retornarInformação(component, event);  

    },

    //Função que é ativada depois do click, envia para o helper a ação
    enviar: function(component, event, helper){
        helper.deletarRegistro(component, event, helper);  

    },
    
    //Função para selecionar o registro 
    marcarRegistro: function(component, event, helper){

        var marcador = event.getParam('selectedRows');
        component.set("v.deletar", marcador);

    }

    
})
