function validar(){
    var formulario = document.forms["formu"];
    var nome = formulario.nome.value;
    var cpf = formulario.cpf.value;
    var email = formulario.email.value;
    var erro = false //não tem erro
    if(nome == "" || nome.indexOf(" ") == -1){
        window.alert("Preencha o NOME, ou nome COMPLETO")
        erro = true //quando indetifica um erro
    }
    if(cpf.length != 11){
        window.alert("Erro no CPF")
        erro = true
    }
    if(email.indexOf("@") == -1){
        window.alert("Faltou o @")
        erro = true
    }
    if(erro){   
     return false
    }else{
     return true
    }
}