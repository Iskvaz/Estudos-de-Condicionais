/* Desafio realizado na aula #8 do youtube prof: Leoci Melo.
*
* Crie uma aplicação para entrada de 4 notas
*
* As notas 1 e 2 devem ser maiores ou iguais a 0 e menores ou iguais a 20
* se as notas 1 e 2 não estiverem dentro da regra anterior, avise e saia do programa.
*
* Junte as 4 notas e tire a media
*
* Se a media for maior ou igual a 60% escreva que o aluno foi aprovado
* e o valor da media com 2 casas de precisão decimal
*Ex: "Aluno aprovado com media: 15.00"
*
* Se a media for maior ou igual a 30% ou for menor que 60% escreve que o aluno esta em recuperação
* e o valor da media com 2 casas de precisão decimal
* Ex: "Aluno em recuperação com media; 10.50"
*
* Se a media for menor que 30% escreva o aluno foi reprovado
* e o valor da media com 2 casas de precisão decimal
* EX: "Aluno reprovado com Media: 6.00
*
* caso de teste:
* 12,12,18,18
* 12,12,18,0
* 12,12,0,0
* 11.36,12.66,18.11,17.98
*
*/

const io =require('console-read-write')

const main = async () => {
    io.write('Notas 1 e 2 devem ser maiores ou iguais a 0 e menores ou iguais a 20')

    
    const nota1 = Number(await io.ask('Digite a nota entre 1 do aluno:  '))

    if (nota1 < 0 || nota1> 20){
        io.write( 'A nota 1 deve ser entre 0 e 20')
        process.exit(0)
    }

    const nota2 = Number(await io.ask('Digite a nota 2 do aluno:  '))

    if (nota2 < 0 || nota2> 20){
        io.write( 'A nota 2 deve ser entre 0 e 20')
        process.exit(0)
    }

    io.write( 'Notas 3 e 4 devem ser maiores ou iguais a 0 e menores a 30')

    const nota3 = Number(await io.ask('Digite a nota 3 do aluno:  '))

    if (nota3 < 0 || nota3> 30){
        io.write( 'A nota 3 deve ser entre 0 e 30')
        process.exit(0)
    }
    const nota4 = Number(await io.ask('Digite a nota entre 4 do aluno:  '))

    if (nota4 < 0 || nota4> 30){
        io.write( 'A nota 4 deve ser entre 0 e 30')
        process.exit(0)
    } 
    
    const media = (nota1 + nota2 + nota3 + nota4) /4

    const perc60 = 25 * 0.6

    const perc30 = 25 * 0.3

    if (media >= perc60){
        io.write(`Aluno aprovado com media: ${media.toFixed(2)}`)
    }
    else if (media >= perc30 && media < perc60){
        io.write(`Aluno recuperação com media: ${media.toFixed(2)}`)
    }
    else {
        io.write(`Aluno reprovado com media: ${media.toFixed(2)}`)
    }
}

main()