const mostrarTodos = () => {

    let info = '';
    const listElement = document.getElementById('teste');
    
    const listAll = [
        { name: 'fulano', age: 23},
        { name: 'ciclano', age: 24},
        { name: 'beltano', age: 99},
        { name: 'teste', age: 1000 }
    ]
    
    // exemplo com foreach
     listAll.forEach((item) => {
         info += `nome: ${item.name} idade: ${item.age}<br><br>`;
    });
    
    // exemplo com for loop array
    // for(let i in listAll){
    //     info += `nome: ${lista[i].name} <br> idade: ${lista[i].age} <br><br>`;
    // }

    if(listElement.style.display === 'flex') {
        listElement.style.display = 'none';
    } else {
        listElement.style.display = 'flex';
        listElement.innerHTML = info;
    }

    mudarTextoBotao();

    console.log(listAll);
};

const mudarTextoBotao = () => {

    const button = document.querySelector("#botao");

    if(button.value === "mostrar")
    {
        button.value = "esconder";
    } 
    else
    {
        button.value = "mostrar";
    }
};





