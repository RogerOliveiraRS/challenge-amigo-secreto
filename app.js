let amigos = [];

function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let nomeAmigo = document.querySelector(".input-name").value.trim();

    // Validar a entrada para garantir que não esteja vazia
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Validar a entrada para garantir que contenha apenas letras, espaços e até dois dígitos
let regex = /^(?=.*[A-Za-zÁ-ú])[A-Za-zÁ-ú\s]*(\d{1,2}\s*)?[A-Za-zÁ-ú\s]*$/;
if (!regex.test(nomeAmigo)) {
    alert("Por favor, insira um nome válido (somente letras, espaços e números de até dois dígitos).");
    return;
}



    // Atualizar o array de amigos
    amigos.push(nomeAmigo);

    // Limpar o campo de entrada
    document.querySelector(".input-name").value = "";

    // Atualizar a lista de amigos exibida
    atualizarListaDeAmigos();
}


function atualizarListaDeAmigos() {
        //atribui à variavel listaAmigos os nomes que estiverem na id "listaAmigos" da <ul> (lista)
    let listaAmigos = document.getElementById("listaAmigos");
// Limpa a lista atual
    listaAmigos.innerHTML = "";
     //Para cada nome que estiver na  LISTA (amigos), será executado o seguinte:
    amigos.forEach((amigo) => {
    
        //li é um novo ítem de lista, "li" significa "Ítem de Lista"
        //li é uma variável que representa um elemento HTML <li> (item de lista).
        //  Esse elemento <li> é criado no código com document.createElement("li")
        let li = document.createElement("li");//O que estiver no elemento de lista a ser criado estará na variável li
        li.textContent = amigo;
       /*Quando o código li.textContent = amigo; é executado, ele faz o seguinte:
Acessa a variável li: A variável li representa o elemento HTML <li> recém-criado.
Define o textContent de li: A propriedade textContent do elemento <li> é definida para o valor da variável amigo.
Exibe o Nome do Amigo: O nome do amigo (contido na variável amigo) é exibido dentro do elemento <li> na página HTML.*/
        listaAmigos.appendChild(li);
    });
}
/*EEXMPLO:  let amigos = ["João", "Maria", "Pedro", "Ana"];
let listaAmigos = document.getElementById("listaAmigos");

amigos.forEach((amigo) => {
    let li = document.createElement("li"); // Cria um novo elemento <li>
    li.textContent = amigo;                // Define o conteúdo de texto do <li> como o nome do amigo
    listaAmigos.appendChild(li);           // Adiciona o <li> ao elemento <ul>
}); 

Passo a Passo
Iteração pelo Array de Amigos:

O código percorre cada amigo no array amigos usando forEach.

Criação do Elemento <li>:

Para cada amigo, um novo elemento <li> é criado com document.createElement("li").

Definição do Conteúdo de Texto:

O conteúdo de texto do elemento <li> é definido como o nome do amigo atual com li.textContent = amigo.

Adição do Elemento <li> à Lista:

O novo elemento <li> é adicionado ao elemento <ul> existente na página com listaAmigos.appendChild(li).

Resultado Final
O resultado final é que, para cada amigo no array amigos, um novo item de lista (<li>) é criado, seu conteúdo de texto é definido como o nome do amigo, e ele é adicionado à lista exibida na página HTML.

Espero que essa explicação tenha sido clara e fácil de entender! Se tiver mais perguntas ou precisar de mais detalhes, estou aqui para ajudar! 😊*/

