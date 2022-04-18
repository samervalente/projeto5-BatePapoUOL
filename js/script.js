
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


let container = document.querySelector(".container")
let mensagens = []
let mensagemElement = document.querySelector(".element-chat")

//Pegar as mensagens
setInterval(function(){
    const promiseMensagens = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages")
    mensagens = []
    promiseMensagens.then(renderizarMensagens)
  
},3000)


function renderizarMensagens(resposta){
    container.innerHTML = ""
    for(let i = 0 ; i < 100; i++){
        mensagens = resposta.data[i]
        if(mensagens.type == "status"){
            container.innerHTML += `<div class="element-chat status">(${mensagens.time})<p><strong>${mensagens.from}</strong> ${mensagens.text}   </p> `  
            container.scrollIntoView(false)
        }else if(mensagens.type == "message"){
            container.innerHTML += `<div class="element-chat message">(${mensagens.time})<p><strong>${mensagens.from}</strong> para <strong>${mensagens.to} </strong> </p> ${mensagens.text}</div>`
            container.scrollIntoView(false)
        }else if(mensagens.type == "private_message"){
            container.innerHTML += `<div class="element-chat private">(${mensagens.time})<p><strong>${mensagens.from}</strong> para <strong>${mensagens.to} </strong> </p> ${mensagens.text}</div>`
            container.scrollIntoView(false)
           
        }
    }  
}

function enviarmensagem(){
    let mensagem = document.querySelector("input").value
    userMensagem = {
        from:userName,
        to:"Todos",
        text:mensagem,
        type:"message",
    }
    axios.post('https://mock-api.driven.com.br/api/v6/uol/messages',userMensagem)
     document.querySelector("input").value = ""
}


function abrirsidebar(){
    document.querySelector(".side-bar").classList.remove("hidden")
    document.querySelector(".black").classList.remove("hidden")
}

function fecharsidebar(){
    document.querySelector(".side-bar").classList.add("hidden")
    document.querySelector(".black").classList.add("hidden")
}

function escolherVisibilidade(elemento){
 let publico = document.querySelector(".pub")
 let reservado = document.querySelector(".reserv")

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



function putUsers(resposta){
    let usersDiv = document.querySelector(".side-bar").querySelector("ul")

    usersDiv.innerHTML += ` <li onclick="escolherUsuario(this)"><ion-icon name="person-circle-outline"></ion-icon>${resposta.data.name}<ion-icon name="checkmark-outline" class="right"></ion-icon></li>`
     
    
}

