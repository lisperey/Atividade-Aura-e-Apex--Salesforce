({
    //Função para enviar para o banco de dados de qual registro queremos os dados
    retornarInformação: function(component, event) {
        var action = component.get('c.pegarRegistro');

        action.setParams({
            nomeRegistro : component.get('v.nomeRegistro')
            
        });
        

        action.setCallback(this, function(response){
            let resposta = response.getReturnValue();
            component.set('v.contas', resposta);    

        });

        $A.enqueueAction(action);
    },

    //Função que enviar para o apex a ordem para deletar
    deletarRegistro: function(component, event, helper) {
        var action = component.get('c.registroParaExcluir');
        var ondeDeletar = component.get('v.deletar');
        
        //Condição para confirmar a exclução do registro
        if(confirm("Deseja deletar?") == true){
            action.setParams({

                registro: ondeDeletar,
                
                });

        }

      
        action.setCallback(this, function(response){
            let state = response.getState();                
            if(state == 'SUCCESS'){
                    
                helper.showToast(component, event, helper);
                helper.limparCampos(component, event, helper);
                }
            });
        
        $A.enqueueAction(action);
            
    },
    //Função para mostrar mensagem de confirmação 
    showToast : function() {

        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Successo!",
            "message": "Registro deletado com sucesso.",
            "type": "success"
        });
        toastEvent.fire();
    },
    
    //Função para limpar a pesquisa
    limparCampos : function(component, event, helper){

        component.set('v.columns', "");
        

    }

    


})
