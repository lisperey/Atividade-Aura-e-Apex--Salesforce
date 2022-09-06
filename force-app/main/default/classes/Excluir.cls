public with sharing class Excluir {
    //modulo que busca o registro no banco de dados
    @AuraEnabled
    public static List<Account> pegarRegistro(String nomeRegistro) {

        List<Account> pesquisar = [Select Id, Name, Phone, Description from Account Where Name=:nomeRegistro];

        return pesquisar;   

    }
    //modulo que manda o banco de dados deletar o registro 
    @AuraEnabled
    public static List<Account> registroParaExcluir(List<Account> registro){
        
        Delete registro;
        return registro;    
    }
}
