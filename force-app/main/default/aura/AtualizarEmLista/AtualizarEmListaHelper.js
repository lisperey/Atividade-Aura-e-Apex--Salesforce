({  //função que pega as informações dos registro no apex
    retornarInformação: function(component, event) {
        
        var action = component.get('c.pegarRegistro');

        action.setCallback(this, function(response){
            let resposta = response.getReturnValue();
            component.set('v.contas', resposta);
        });

        $A.enqueueAction(action);

    },
    //função que envia as informações de atualização do registro para o apex
    atualizacao: function(component, event, helper){
        var action = component.get('c.atualizarRegistro');
        var draftValores = event.getParam('draftValues');

        action.setParams({
            registro : draftValores   
        });
        
        action.setCallback(this, function(response){
            let state = response.getState()
            let resposta = response.getReturnValue();

            console.log("voltando2");
            console.log(resposta);

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
