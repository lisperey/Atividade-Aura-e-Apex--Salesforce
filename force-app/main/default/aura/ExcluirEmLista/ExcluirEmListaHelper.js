({
    //Função para pegar os dados do banco de dados
    retornarInformação: function(component, event, helper) {
        var action = component.get('c.pegarLista');

        action.setCallback(this, function(response){
            let resposta = response.getReturnValue();
            console.log(resposta)
            component.set('v.contas', resposta);    

        });

        $A.enqueueAction(action);


    },

    //Função que enviar para o apex a ordem para deletar
    deletarRegistro: function(component, event, helper) {
        var action = component.get('c.deleteEmCadeia');
        var ondeDeletar = component.get('v.deleteId');
        console.log(ondeDeletar)
        
        //Condição para confirmar a exclução do registro
        if(confirm("Deseja deletar?") == true){
            console.log("aloaloalo")
            action.setParams({idLista: ondeDeletar});

        }

      
        action.setCallback(this, function(response){
            let state = response.getState();
                            
            if(state == 'SUCCESS'){
                $A.get('e.force:refreshView').fire();  
                helper.showToast(component, event, helper);
                
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
    
    
    

    

})
