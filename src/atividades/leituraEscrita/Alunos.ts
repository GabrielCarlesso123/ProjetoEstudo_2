import { writeFile , readFile } from 'fs/promises'

const alunosArr = [
    {
        nome: 'Luana',
        idade: 19,
        ra: '00000-01'
    },
    {
        nome: 'Mykaelly',
        idade: 20,
        ra: '000000-02'
    },
    {
        nome: 'Gabriel',
        idade: 23,
        ra: '000000-3'
    },
    {
        nome: 'Wilson',
        idade: 102,
        ra: '00000-00'
    }
]
export class Alunos {
    private alunos = alunosArr

    constructor(){

    }
    
    writeStudent() {
        try {
            console.log('Criando lista de alunos')
            writeFile('alunos.json', JSON.stringify(this.alunos, null, 2))
        
        } catch(err) {
            console.error('Erro ao tentar escrever no arquivo', err)
        }   
    }

    async readStudent() {
        const leuMemo = await readFile('alunos.json', "utf-8")
        let result = JSON.parse(leuMemo)

        let findMyka = result.find(pessoa => pessoa.nome === "Mykaelly")

        console.log(result[1].nome)
        console.log('usando find', findMyka.nome)
    }
}



