// 10 - importou a classe App, já instanciada de app.ts
import app from "./app";
// 11 - Criamos uma função main(), que será executada quando o arquivo for chamado | ela será executada por primeiro
function main() {
    // Lembrete, ao chamar app.listen, já estamos informando ao servidor, as configurações que foram feitas em app.ts
    try {
        // 12 - Estamos utilizando o método listen do express para criar um servidor, passando como paramêtro
        // a porta, "dominio", uma função assincrona e anonima, que irá executar a escrita da mensagem 'starting server' toda vez que o servidor for levantado
        app.listen(3000, 'localhost', async () => {
            console.log('starting server')
        })
        // 13 - no catch estamos capturando qualquer erro que possa ocorrer na criação do servidor, e printando ele no console
    } catch (err) {
        console.error('Starting server Error', err)
    }
}
// 14 - estamos executando a função main()
main()