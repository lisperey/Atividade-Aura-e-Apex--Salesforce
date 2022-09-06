({  //função para enviar para o apex o nome do registro solicitado
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

    //função para enviar para o apex a atualização

    atualizacao: function(component, event, helper){
        var action = component.get('c.atualizarRegistro');
        var draftValores = event.getParam('draftValues');

        action.setParams({
            registro : draftValores   
        });
        
        action.setCallback(this, function(response){
            let state = response.getState()

            if(state == "SUCCESS"){
                
                helper.showToast(component, event, helper);

            }
             
        });

        $A.enqueueAction(action);
    },
    
    //função para mostrar mensagem 
    showToast : function() {

        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Successo!",
            "message": "Registro atualizado com sucesso.",
            "type": "success"
        });
        toastEvent.fire();
    },
})
