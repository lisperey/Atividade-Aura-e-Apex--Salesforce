public with sharing class DeletarEmLista {
    //metodo para pegar os dados dos registro no banco de dados 
    @AuraEnabled
    public static List<Account> pegarLista() {

        List<Account> pegarRegistros = [Select Name, Phone, Description From Account ORDER BY Id DESC];
        return pegarRegistros;

    }
    
    //metodo para pegar excluir os dados
    @AuraEnabled
    public static void deleteEmCadeia(List<Account> idLista){
        List<Account> deletar = [Select Id From Account Where Id in:idLista];
        delete deletar;
    }
}
