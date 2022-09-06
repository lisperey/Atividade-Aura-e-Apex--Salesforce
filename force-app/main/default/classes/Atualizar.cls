public with sharing class Atualizar {
    
    //metodo que retornar os dados do registro depois de pesquisar pelo nome no banco de dados
    @AuraEnabled
    public static List<Account> pegarRegistro(String nomeRegistro) {

        List<Account> pesquisar = [Select Name, Phone, Description from Account Where Name=:nomeRegistro];
        return pesquisar;
        

    }
    
    //metodo que salva a atalização
    @AuraEnabled
    public static List<Account> atualizarRegistro(List<Account> registro){
        Update registro;
        return registro;
    }
}
