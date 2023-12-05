class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
  
    atacar() {
        let atk1 = "Shuriken";
        let atk2 = "Espada";
        let atk3 = "Magia";
        let atk4 = "Artes Marciais";
  
        if (this.tipo === "Ninja") {
            console.log(`O ${this.tipo} atacou usando ${atk1}`);
        } 
        else if (this.tipo === "Guerreiro") {
            console.log(`O ${this.tipo} atacou usando ${atk2}`);
        } 
        else if (this.tipo === "Mago") {
            console.log(`O ${this.tipo} atacou usando ${atk3}`);
        } 
        else if (this.tipo === "Monge") {
            console.log(`O ${this.tipo} atacou usando ${atk4}`);
        }
    }
}
    const ninja = new Hero("Jackie Chan", 69, "Ninja");
    const guerreiro = new Hero("Leonidas", 42, "Guerreiro");
    const mago = new Hero("Nicholas Flamel", 88, "Mago");
    const monge = new Hero("Benkei", 34, "Monge");
  
    ninja.atacar();
    guerreiro.atacar();
    mago.atacar();
    monge.atacar();