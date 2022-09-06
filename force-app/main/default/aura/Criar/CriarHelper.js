({  //enviar para o banco de dados as infromações que foram passadas
    enviarRegistro: function(component, event, helper) {

        var action = component.get('c.salvarNovoRegistro');

        action.setParams({
            nomeDoRegistro : component.get('v.nomeDoRegistro'),
            telefone : component.get('v.telefone'),
            descricao : component.get('v.descricao')
        })

        action.setCallback(this, function(response){
            
            var argumentoNome = component.get('v.nomeDoRegistro');
            var argumentoTelefone = component.get('v.telefone');
            
            if(argumentoNome == null || argumentoTelefone == null){

                helper.showToasterror(component, event, helper);
                helper.limparCampos(component, event, helper);
                
            
            }else{
                helper.showToast(component, event, helper);
                helper.limparCampos(component, event, helper);
                
            
            }

        });


        $A.enqueueAction(action);


    },
  // função para mostrar mensagem 
    showToast : function() {

        
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Successo!",
            "message": "Registro criado com sucesso.",
            "type": "success"
        });
        toastEvent.fire();
    },

    showToasterror : function() {

        
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Error!",
            "message": "Ocorreu um error.",
            "type": "error"
        });
        toastEvent.fire();
    },

   //função para limpar os campos
    limparCampos : function(component, event, helper){

        component.set('v.nomeDoRegistro', null);
        component.set('v.telefone', null);
        component.set('v.descricao', '');

    },

    
})
