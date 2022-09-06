({  //função para pegar os dados do banco de dados
    retornarListaRegistros: function(component, event) {

        var action = component.get('c.buscarListaRegistros');

        action.setCallback(this, function(response){
            let resposta = response.getReturnValue();

            component.set('v.contas', resposta);

        });

        $A.enqueueAction(action);


    }
})