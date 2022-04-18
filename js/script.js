
//Comunicação com o servdidor
let userName= prompt("Qual é o seu lindo nome?")

const nomeUsuario = {
    name: userName
}

const requisicao = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", nomeUsuario)
requisicao.catch(trataErro)

const promiseGet = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants")

function trataErro(data){
    console.log(data.response.status)
    let statusCode = data.response.status
    if(statusCode === 400){


      alert("Nome já existente no sistema. Tente outro.")
        window.location.reload()
    }
}

setInterval(function(){
    axios.post("https://mock-api.driven.com.br/api/v6/uol/status",nomeUsuario)
}, 4000)

let mensagem = [
    names = {},
    
    
]
//Pegar as mensagens
setInterval(function(){
    let container = document.querySelector(".container")
    const promiseMensagens = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages")
    promiseMensagens.then(renderizarMensagens)
    console.log(mensagem)
    container.innerHTML = mensagem.name
},3000)


let textControl = ""
let statusControl = ""



function renderizarMensagens(resposta){
   
        for(let i = 89; i < 100; i++){
            mensagem.name = resposta.data[i].from
        }   
}





    //let promise = get.post("https://mock-api.driven.com.br/api/v6/uol/messages")


    /*
promisePost.then()
promisePost.catch(trataErro)


function trataErro(resposta){
    const code = resposta.response.status
      while(code === 400){
        console.log(code)
        nomeUsuario = prompt(`O nome de usuário "${nomeUsuario}" já existe! Escolha outro.`)
        promisePost = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", nomesUsuarios)
        code = resposta.response.status
      }
    }

let promiseGet = "";

let textControl;

setInterval(function(){
    promiseGet = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages")
    promiseGet.then(renderizarChat)
    },3000)

 function renderizarChat(mensagem){
    let container = document.querySelector(".container")

    if(mensagem.data[99].from !== nameControl || (mensagem.data[99].type == "message" && mensagem.data[99].text !== textControl)){
        if(mensagem.data[99].type == "status"){
            container.innerHTML += `<div class="element-chat status">(${mensagem.data[99].time})<p><strong>${mensagem.data[99].from}</strong> </p> 
            ${mensagem.data[99].text}</div>`
        }else if(mensagem.data[99].type == "message" ){
            container.innerHTML += `<div class="element-chat message">(${mensagem.data[99].time})<p><strong>${mensagem.data[99].from}</strong> para <strong>${mensagem.data[99].to} </strong> </p> 
            ${mensagem.data[99].text}</div>`
        }else if(mensagem.data[99].type == "private-message"){
            container.innerHTML += `<div class="element-chat private-message">(${mensagem.data[99].time})<p><strong>${mensagem.data[99].from}</strong> para <strong>${mensagem.data[99].to} </strong> </p> 
            ${mensagem.data[99].text}</div>`
        } 
    }

    nameControl = mensagem.data[99].from
    textControl = mensagem.data[99].text
 }

 */
function enviarmensagem(){
    let mensagem = document.querySelector("input").value
    userMensagem = {
        from:userName,
        to:"Todos",
        text:mensagem,
        type:"message",
    }
    axios.post('https://mock-api.driven.com.br/api/v6/uol/messages',userMensagem)
     
}

/*
function abrirsidebar(){
    document.querySelector(".side-bar").classList.remove("hidden")
    document.querySelector(".black").classList.remove("hidden")
    document.querySelector(".escrever").classList.add("opacity")
    document.querySelector(".escrever").classList.add("priority")
}

function fecharsidebar(){
    document.querySelector(".side-bar").classList.add("hidden")
    document.querySelector(".black").classList.add("hidden")
    document.querySelector(".escrever").classList.remove("opacity")
    document.querySelector(".escrever").classList.remove("priority")
    document.querySelector("body").classList.remove("overflow")
}

function escolherVisibilidade(elemento){
 let publico = document.querySelector(".pub")
 let reservado = document.querySelector(".reserv")

   console.log(elemento)
    if(elemento.classList.contains("pub")){
        elemento.innerHTML = ` <ion-icon name="lock-open-outline"></ion-icon>Público<ion-icon name="checkmark-outline" class="right"></ion-icon>`
       reservado.innerHTML = `<li class="reserv"  onclick="escolherVisibilidade(this)">
       <ion-icon name="lock-closed-outline"></ion-icon>Reservadamente</li>`
    }

    
    if(elemento.classList.contains("reserv")){
        elemento.innerHTML = ` <ion-icon name="lock-open-outline"></ion-icon>Reservadamente<ion-icon name="checkmark-outline" class="right"></ion-icon>`
        publico.innerHTML = `  <li class="pub"  onclick="escolherVisibilidade(this)">
        <ion-icon name="lock-closed-outline"></ion-icon>Público</li>`

    }

    return elemento
}

setInterval(function (){
    let promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/participants')
    promise.then(putUsers)
}, 3000)



let usuarios = [

]


function putUsers(resposta){
    let usersDiv = document.querySelector(".side-bar").querySelector("ul")

    
    <li onclick="escolherUsuario(this)"><ion-icon name="person-circle-outline"></ion-icon>Maria<ion-icon name="checkmark-outline" class="right"></ion-icon></li>  
    
}

*/