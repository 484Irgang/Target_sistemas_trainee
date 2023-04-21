window.addEventListener("load",showResults);

function showResults(){
    var res1 = questao1();

    var li = document.querySelector("ul .li1"); 
    li.innerText = "1)  "+res1;
}

function questao1(){
    let indice = 13;
    let soma = 0;
    let k = 0;

    while(k < indice){
        k = k+1;
        soma = soma + k;
    }

    return soma;
}

function questao2(){
    var num = document.querySelector(".numfab").value;
    console.log(num)
    if(num == ''){
        window.alert("Digite um numero por favor");
    }
    else{
        var sf = [0,1];
        var stop = false;
        var numfounded = false;
        var i0 = 0;
        var i1 = 1;
    
        while(stop === false){
            var numtemp = sf[i0] + sf[i1];
            sf.push(numtemp);
            i0++;
            i1++;
            stop = numtemp > 1000000? true : false;
            if(numtemp == num || num == 0){
                numfounded = true;
                stop = true;
            }
        }

        var res2 = document.querySelector("ul .li2");
        res2.innerText = numfounded? "2) Seu numero faz parte da sequência!":"2) Seu numero não faz parte da sequência!"

    }


}

function inverterString(){
    var string = document.querySelector(".string").value;
    if(string == ''){
        window.alert("Por favor digite alguma coisa");
    }
    else{
        var arr = string.split('');
        var meio = arr.length / 2;
        var last = arr.length -1;
        for(i=0;i<meio;i++){
            var temp = arr[i];
            arr[i] = arr[last];
            arr[last] = temp;
            last--;
        }
        
        var res5 = document.querySelector("ul .li5");
        res5.innerText = "5) "+arr.join('');
    }
}