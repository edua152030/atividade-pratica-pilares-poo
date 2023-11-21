/*1 ----------------------------------------------------------------------

abstract class Ingresso {
    protected valor: number;
  
    constructor(valor: number) {
      this.valor = valor;
    }
  
    abstract imprimeValor(): void;
  }
  
  class Normal extends Ingresso {
    imprimeValor(): void {
      console.log(`Ingresso Normal: R$${this.valor}`);
    }
  }
  
  class VIP extends Ingresso {
    private valorAdicional: number;
  
    constructor(valor: number, valorAdicional: number) {
      super(valor);
      this.valorAdicional = valorAdicional;
    }
  
    imprimeValor(): void {
      const valorTotal = this.valor + this.valorAdicional;
      console.log(`Ingresso VIP: R$${valorTotal} (Valor: R$${this.valor} + Adicional: R$${this.valorAdicional})`);
    }
  }
  
  class Camarote extends Ingresso {
    private valorAdicionalCamarote: number;
  
    constructor(valor: number, valorAdicionalCamarote: number) {
      super(valor);
      this.valorAdicionalCamarote = valorAdicionalCamarote;
    }
  
    imprimeValor(): void {
      const valorTotal = this.valor + this.valorAdicionalCamarote;
      console.log(`Ingresso Camarote: R$${valorTotal} (Valor: R$${this.valor} + Adicional Camarote: R$${this.valorAdicionalCamarote})`);
    }
  }
  
  // Exemplo de uso:
  
  const ingressoNormal = new Normal(50);
  ingressoNormal.imprimeValor();
  
  const ingressoVIP = new VIP(80, 20);
  ingressoVIP.imprimeValor();
  
  const ingressoCamarote = new Camarote(100, 30);
  ingressoCamarote.imprimeValor();
  */

/* 2--------------------------------------------------------------------------------

class Imovel {
    constructor(protected endereco: string, protected preco: number) {}
  }
  
  class Novo extends Imovel {
    constructor(endereco: string, preco: number, private valorAdicional: number) {
      super(endereco, preco)
    }
  
    getPrecoNovo(): number {
      return this.preco + this.valorAdicional;
    }
  }
  
  const imovelNovo = new Novo("Rua A, 123", 200000, 50000);
  console.log('o seu imavel novo sai por',imovelNovo.getPrecoNovo())
  

class Velho extends Imovel {
    constructor(endereco: string, preco: number, private precoVelho: number){
    super(endereco, preco)
}

getPrecoVelho(): number {
    return this.preco + this.precoVelho;
  }
}

const imovelVelho = new Velho('a rua b', 200000, 10000)
console.log('o seu imovel velho sai por ', imovelVelho.getPrecoVelho());
*/

/* 3


class Animal {
    constructor(protected cor: string, protected patas: number){}
}

class Cachorro extends Animal{
    constructor(cor: string, patas: number, private som: string){
        super(cor, patas)
    }
    getBob(): string {
        return `Bob é da cor ${this.cor}, tem ${this.patas} patas e faz o som "${this.som}".`
      }
}
const bob = new Cachorro ('marron', 4, 'late')
console.log(bob.getBob())

class Cavalo extends Animal{
    constructor(cor: string, patas: number, private crina: string){
        super(cor, patas)
    }

    getCavalo(): string{
        return `o azarão e da cor ${this.cor} tem ${this.patas} patas e a crina e da cor ${this.crina}`
    }
}
const mimoso = new Cavalo ('preto', 4, 'branco')
console.log(mimoso.getCavalo());


class Gato extends Animal{
    constructor(cor: string, patas: number, private telhado: string){
        super(cor, patas)
    }

    getGato(){
        return `Seu gato e de cor ${this.cor} ele tem ${this.patas} patas e sobe no ${this.telhado}`
    }
}

const bichano = new Gato('cinza', 4, 'casa')
console.log(bichano.getGato);

*/