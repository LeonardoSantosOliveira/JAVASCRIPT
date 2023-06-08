//criando de maneira recursiva. (recursiva é quando uma função chama ela mesma)

//RECURSIVIDADE
function fatorial(n){
    if (n == 1){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))