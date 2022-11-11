class Carro{
    NomeEquipe
    Potencia
    VelocidadeMax
    Aceleração

    CalculoTempo(DistanciaEmMetros){
        let resultado = DistanciaEmMetros / (this.VelocidadeMax / this.Aceleração)
        return resultado
    }
}

let carroUm = new Carro()
carroUm.NomeEquipe = "Tesla Roadster"
carroUm.Potencia = 1034
carroUm.VelocidadeMax = 410
carroUm.Aceleração = 47

let carroDois = new Carro()
carroUm.NomeEquipe = "Nissa GT-R"
carroUm.Potencia = 572
carroUm.VelocidadeMax = 395
carroUm.Aceleração = 37

let carroTres = new Carro()
carroUm.NomeEquipe = "Supra"
carroUm.Potencia = 330
carroUm.VelocidadeMax = 250
carroUm.Aceleração = 19

let carros = [carroUm, carroDois, carroTres]

class Corrida{
    NomeLocal
    TipoCorrida
    Distancia
    Vencedor

    VerificarQuemFezMenosTempo(){

    }
}

let corridaUm = new Corrida()
corridaUm.NomeLocal = "Interlagos"
corridaUm.TipoCorrida = "F1"
corridaUm.Distancia = 500