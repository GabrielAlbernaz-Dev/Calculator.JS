const inptResult = document.querySelector(".result");

function calcular(type,valor) {

    let valueArea = inptResult.value;

    if (type==='acao') {
        if (valor==='c')
        inptResult.value = '';

        if (valor==='+' || valor==='-' || valor=='*' || valor== '/' || valor=== '.') {
            inptResult.value = valueArea + valor;
        }

        if (valor==='=') {
            valueArea = eval(inptResult.value);
            inptResult.value = valueArea;
        }
        
    } else {
        if (type==='valor') {
            inptResult.value = valueArea + valor;
         }   
    }
}

