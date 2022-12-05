const io =require('console-read-write')

const main = async () => {

    const  nivelPadrao = 10

    const valor = Number(await io.ask('Digite um valor de nivel entre 1 e 20: '))

    if (valor > nivelPadrao) {
        io.write('Valor é maior que nivel padrao')
    }
    else
    {
        io.write('Valor é menor que nivel padrao')
    }
}

main()