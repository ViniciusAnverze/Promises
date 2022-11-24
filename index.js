function pegarCPF(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(58475983744);
        }, 1000);
    })
}

function verificarCPF(cpf){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cpfValido;
            if(cpf == 58475983744){
                cpfValido = true;
                resolve(cpfValido);
            }else{
                cpfValido = false
                reject(cpfValido);
            }
        }, 1500);        
    })
}

function cadastrarUsuario(valido){
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(valido){
                res("Usuario Cadastrado");
            }else{
                rej("Falha no cadastro. CPF inválido");
            }
        }, 3000)
    })
}

pegarCPF().then((cpf) => {
    verificarCPF(cpf).then((valido) => {

        console.log("CPF valido: "+valido);
        cadastrarUsuario(valido).then((resultado) => {
            console.log(resultado);
        }).catch((resultado) => {
            console.log(resultado)
        })

    }).catch((valido) => {
        cadastrarUsuario(valido).then((resultado) => {
            console.log(resultado);
        }).catch((resultado) => {
            console.log(resultado);
        })
    })
})
