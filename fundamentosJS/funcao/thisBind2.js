function Pessoa(){
    this.idade = 0;

    //dispara uma funçao de um determinado intervalo que for passado
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) 
}

//instanciando a funçao
new Pessoa