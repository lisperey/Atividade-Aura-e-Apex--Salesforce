public with sharing class Criar {
    
   // metodo para salvar o registro no banco de dados
    @AuraEnabled
    public static void salvarNovoRegistro(String nomeDoRegistro, String telefone, String descricao){

        Account novoRegistro = new Account();

        if(nomeDoRegistro == null || telefone == null){
            
                    
        }else{

            novoRegistro.Name= nomeDoRegistro;
            novoRegistro.Phone = telefone;
            novoRegistro.Description = descricao;
            Insert novoRegistro;

        }
        

    } 

    

    
}
