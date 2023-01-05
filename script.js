function calcular(){
    let numero = window.document.getElementById('txtnum')
    let tab = window.document.getElementById('seltab')
    if (numero.value.length == 0){
        window.alert ('[ERRO] PRENCHA O CAMPO NÚMERO PARA SEGUIR')
    } else{
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = '' //para limpar a tabuada antes de começar outra
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.valeu = `tab${c}` //para saber o item que foi selecionado (util para outras linguagens)
            tab.appendChild(item)
            c++
        }
    }
}