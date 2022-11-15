class Carro{
    NomeEquipe = []
    Potencia = []
    VelocidadeMax = []
    Aceleração = []

    CalculoTempo(distanciaEmMetros){
        let tempoEmSegundosArray = []
        let tempoEmSegundos = 0
        for(let index = 0; index < 3; index++){
            tempoEmSegundos = distanciaEmMetros / (this.VelocidadeMax[index] / this.Aceleração[index])
            tempoEmSegundosArray.push(tempoEmSegundos)
        }
        return tempoEmSegundosArray
    }
}

let carros = new Carro()
 
carros.NomeEquipe[0] = "Tesla Roadster"
carros.Potencia[0] = 1034
carros.VelocidadeMax[0] = 410
carros.Aceleração[0] = 47

carros.NomeEquipe[1] = "Nissa GT-R"
carros.Potencia[1] = 572
carros.VelocidadeMax[1] = 395
carros.Aceleração[1] = 37

carros.NomeEquipe[2] = "Supra"
carros.Potencia[2] = 330
carros.VelocidadeMax[2] = 250
carros.Aceleração[2] = 19

class Corrida{
    NomeLocal 
    TipoCorrida 
    Distancia 
    Vencedor 

    VerificarQuemFezMenosTempo(carros){
        let menorTempo = 10000
        let tempoEmSegundos = carros.CalculoTempo(this.DistanciaEmMetros)

        for(let index = 0; index < 3 ; index++)
        {
            if(menorTempo > tempoEmSegundos[index]){
            menorTempo = tempoEmSegundos[index]
            this.Vencedor = carros.NomeEquipe[index]
            }
        }
        return this.Vencedor
    }

    ExibirVencedor(){
        console.log("O vencedor foi: " + this.Vencedor)
    }
}

let corridaUm = new Corrida()
corridaUm.NomeLocal = "Interlagos"
corridaUm.TipoCorrida = "F1"
corridaUm.Distancia = 500