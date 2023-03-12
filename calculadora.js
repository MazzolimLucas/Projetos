var display = document.getElementById('display'); // Pegando o node do display
var numeros = ['0','1','2','3','4','5','6','7','8','9']; // Coleção de dígitos
var operacoes = ['+','-','*','/', '%']; // Operações disponíveis
var operacao = ''; // Operação escolhida

window.addEventListener('keypress', function(event){ // Remover o zero padrão do display
 
    if(numeros.includes(event.key) && (display.textContent == '0')){

        display.textContent =''

    }

});

window.addEventListener('keypress', function(event){ // Adicionar dígitos ao display

    switch(event.key){

        case '1':
            display.textContent += 1;
        break;
        case '2': 
            display.textContent += 2;
        break;
        case '3':
            display.textContent += 3;
        break;
        case '4':
            display.textContent += 4;
        break;
        case '5':
            display.textContent += 5;
        break;
        case '6':
            display.textContent += 6;
        break;
        case '7':
            display.textContent += 7;
        break;
        case '8':
            display.textContent += 8;
        break;
        case '9':
            display.textContent += 9;
        break;
        case '0':
            display.textContent += 0;
        break;

    }

});

window.addEventListener('keypress', function(event){ // Selecionando uma primeira operação

    if(operacoes.includes(event.key) && (operacao == '')){

        numero_1 = Number(display.firstChild.nodeValue);
        display.textContent = '';

        switch(event.key){
             
            case '+':
                operacao = '+';
            break;
            case '-':
                operacao = '-';
            break;
            case '*':
                operacao = '*'
            break;
            case '/':
                operacao = '/'
            break;
            case '%':
                operacao = '%';
            break;

        }

    }
        
});

window.addEventListener('keypress', function(event){  // Selecionando segunda operação
    
    
    if(((operacoes.includes(event.key)) && (operacao != '')) || event.key == '=' || event.key == 'Enter'){

        numero_2 = Number(display.firstChild.nodeValue);
        
            switch(operacao){
    
                case '+':
                    display.textContent = (numero_1 + numero_2);
                    numero_1 = (numero_1 + numero_2);
                    operacao = ''
                break;
                case '-':
                    display.textContent = (numero_1 - numero_2);
                    numero_1 = (numero_1 - numero_2)
                    operacao = ''
                break;
                case '*':
                    display.textContent = (numero_1 * numero_2);
                    numero_1 = (numero_1 * numero_2);
                    operacao = ''
                break;
                case '/':
                    display.textContent = (numero_1 / numero_2);
                    numero_1 = (numero_1 / numero_2);
                    operacao = ''
                break;
                case '%':
                    display.textContent = ((numero_1/100)*numero_2);
                    numero_1 = (numero_1 / numero_2);
                    operacao = '';
                break;
    
            }}



});

window.addEventListener('keypress', function(event){ // Limpar memória

    if((event.key == 'c') || (event.key == 'C')){

        display.textContent = '0';
        numero_1 = '';
        numero_2 = '';
        operacao = '';

    }


});

window.addEventListener('keydown', function(event){

    if(event.key == "Backspace"){

        var display1_2 = display.textContent.replace(display.textContent.slice(-1), '');
        display.textContent = display1_2;}
});

window.addEventListener('keydown', function(event){

    if(!(operacao.includes(event.key)) && !(numeros.includes(event.key))){

        this.alert('Símbolo não permitido.')


    }

})

