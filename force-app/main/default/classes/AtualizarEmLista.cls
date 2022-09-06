public with sharing class AtualizarEmLista {
    //metodo para peagr os dados dos registros no banco de dados
    @AuraEnabled
    public static List<Account> pegarRegistro() {

        List<Account> pesquisar = [Select Name, Phone, Description from Account ORDER BY Id DESC];
        return pesquisar;
        

    }
   //metodo para atualizar os dados no banco de dados
    @AuraEnabled
    public static List<Account> atualizarRegistro(List<Account> registro){
        Update registro;
        return registro;
    }
}
