let cart = []; // array do carrinho de compra
let modalQt = 1; //vai setar o valor da seleçao para 1 quando fechar e abrir novamente o modal
let modalKey = 0; //variavel de indice de cada pizza que for adicionada ao carrinho

const selector = (el) => document.querySelector(el);
const selectorAll = (el) => document.querySelectorAll(el);

//mapeando os itens (listagens das pizzas)
pizzaJson.map((item, index) => {
  //console.log(item);
 //clonando a estrutura e preenchendo os dados true porqeu nao vai pegar somente o item e sim todo conteudo de dentro
//let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
let pizzaItem = selector('.models .pizza-item').cloneNode(true);

pizzaItem.setAttribute('data-key', index); //cria um atributo de indice para cada pizza

pizzaItem.querySelector('.pizza-item--img img').src = item.img;
pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`; //adiciona os preços das pizzas
pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name; //adiciona os nomes das pizzas
pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description; //adiciona as descriçoes das pizzas

//quando clicar na pizza
pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault(); //gera a açao de click
    let key = e.target.closest('.pizza-item').getAttribute('data-key'); //closest vai procurar o elemento mais próximo que tenha a class piza-item
    modalQt = 1;
    modalKey = key;
    
    //console.log(pizzaJson[key]);
    selector('.pizzaBig img').src = pizzaJson[key].img;
    selector('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    selector('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
    selector('.pizzaInfo--actualPrice').innerHTML = `R$: ${pizzaJson[key].price.toFixed(2)} `;
    selector('.pizzaInfo--size.selected').classList.remove('selected'); //vai remover a selecao do tamanho

    //forEach vai percorrer o array para cada um dos tamanhos das pizzas
    selectorAll('.pizzaInfo--size').forEach((size, sizeIndex) => {
        //quando estiver no tamanho grande
        if(sizeIndex == 2) {
           size.classList.add('selected'); //deixa selecionado o tamanho grande
        }
        size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]; //mostra os tamanhos 
    });
    selector('.pizzaInfo--qt').innerHTML = modalQt;
    
    //abrindo o modal apos clicar na pizza
    selector('.pizzaWindowArea').style.opacity = 0;
    selector('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
       selector('.pizzaWindowArea').style.opacity = 1;
    }, 200);
    

});

//adiciona os itens
/*let pizzas = document.querySelector('.pizza-area');
pizzas.appendChild(pizzaItem); */
let pizzas = selector('.pizza-area');
pizzas.append(pizzaItem);

});

//eventos do modal
const closeModal = () => {
    selector('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        selector('.pizzaWindowArea').style.display = 'none';
    }, 500);
};

//fechando o modal
selectorAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal);
});

//botoes aumentar e diminuir quantidades de pizzas
selector('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if(modalQt > 1) {
        modalQt--;
        selector('.pizzaInfo--qt').innerHTML = modalQt;
    }
    
});

selector('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++;
    selector('.pizzaInfo--qt').innerHTML = modalQt;
});

//opçoes tamanhos pequeno, grande, médio
selectorAll('.pizzaInfo--size').forEach((size, sizeIndex) => {
   size.addEventListener('click', (e) => {
       selector('.pizzaInfo--size.selected').classList.remove('selected'); //tira em qual tamanho está selecionado 
       size.classList.add('selected'); //adiciona em quem está selecionado
   })
});

//adicionar ao carrinho
selector('.pizzaInfo--addButton').addEventListener('click', () => {

  
    let size = parseInt(selector('.pizzaInfo--size.selected').getAttribute('data-key'));
    //console.log("o tamanho é: " + size);

    let identifier = pizzaJson[modalKey].id + '@' + size;

    //verificaçao se existe outro item com o mesmo identificador
    let key = cart.findIndex((item) => item.identifier == identifier);

    if(key > -1) {
       cart[key].qt += modalQt; //muda a quantidade
    } else {
        cart.push({
            identifier,
            id:pizzaJson[modalKey].id,
            size,
            qt:modalQt
        });
    }
    updateCart();
    closeModal();

});

//abrir carrinho na versao mobile
selector('.menu-openner').addEventListener('click', () => {
    //fazer uma verificaçao se existe um item adicionado ao carrinho para poder clicar
    if(cart.length > 0) {
        selector('aside').style.left = '0';
    }
});

//fechar carrinho na versao mobile
selector('.menu-closer').addEventListener('click', () => {
   selector('aside').style.left = '100vw';
})

//atualizar carrinho
const updateCart = () => {
    
    //vai mostrar a quantidade de tipos de pizzas adicionadas ao carrinho na versao mobile
    selector('.menu-openner span').innerHTML = cart.length;

    if(cart.length > 0) {
        selector('aside').classList.add('show');
        selector('.cart').innerHTML = ''; //sempre vai zerar o item caso for adicionado a mesma pizza com o memso tamanho no carrinho
        
        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for(let i in cart) {
            //retorna os itens da pizza
            let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id);
            //console.log(pizzaItem);
            subtotal += pizzaItem.price * cart[i].qt;

            let cartItem = selector('.models .cart--item').cloneNode(true);

            let pizzaSizeName;
            switch(cart[i].size) {
                case 0:
                    pizzaSizeName = 'Pequena';
                    break;
                case 1:
                    pizzaSizeName = 'Média';
                    break;
                case 2:
                    pizzaSizeName = 'Grande';
                    break;
            }


            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;
            

            cartItem.querySelector('img').src = pizzaItem.img; //imagem da pizza no carinho
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName; //nome da pizza no carrinho
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt; //qt de pizza no carrinho
            
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                 if(cart[i].qt > 1) {
                     cart[i].qt--;
                 } else {
                     cart.splice(i, 1); //vai remover um item
                     
                 }

                 updateCart();
            });

            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                 cart[i].qt++;
                 updateCart(); //funcao que atualiza a quantidade de item no carrinho
            });
            
            selector('.cart').append(cartItem); //vai mostrar no carrinho
        }

        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        selector('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        selector('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        selector('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;
        
    } else {
        selector('aside').classList.remove('show');
        selector('aside').style.left = '100vw';
    }
};

