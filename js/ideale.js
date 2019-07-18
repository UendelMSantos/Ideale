function carregar(){
    var msg = document.querySelector('#msg');
    var data = new Date();
    var hora = data.getHours();
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        msg.innerHTML = 'Bom Dia, Seja Bem Vindo(a) à IdealeTshirt!'
    }else if(hora >= 12 && hora <= 18){
        //BOA TARDE!    
        
        msg.innerHTML = 'Boa tarde, Seja Bem Vindo(a) à IdealeTshirt!'
    }else{
        //BOA NOITE!
        msg.innerHTML = 'Boa Noite, Seja Bem Vindo(a) à IdealeTshirt!'
    }
    
}

