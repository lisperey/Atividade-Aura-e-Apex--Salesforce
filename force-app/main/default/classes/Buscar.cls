public with sharing class Buscar {
   //metodo para buscar os registro em account
    @AuraEnabled
    public static List<Account> buscarListaRegistros(){

        List<Account> camposLista = [Select Id, Name, Phone, Description From Account where (Phone != null) ORDER BY Id DESC limit 10];

        return camposLista;

    }
}
