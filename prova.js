let aluno1 = {
    nome: "Isabelle Natale", 
    idade: 16,
    cursando: ["TIA", "PDM", "POO", "BD2", "AOS"],
    presença: ["2024-01-01", "2024-02-22", "2022-02-24"],
    ra: "22346783"
}
//é uma funçao,ela ira validar o cadastro.
function validarCadastro() {

    //se caso o nome do aulo tiver menos de 10 caracteres mostara uma mensagem que o nome esta invalido.
    if(aluno1.nome.length < 10){
      console.log("Nome invalido")
      return
   }

    //se caso a idade for menor que 14 anos,mostara uma mensagem, falando que a idade esta invalida.
   if(aluno1.idade < 14){
    console.log("Idade invalida")
    return
   }
    //se caso o aluno estiver cursando menos q tres cursos,mostara uma mensagem, falando que falta materia.
   if(aluno1.cursando.length < 3){
     console.log("Falta de Materia")
     return
   }
    //se o aluno nao tiver pelo menos 2 dias de presença,ira aparecer uma mensagem dizendo que ha falta de presença.
   if(aluno1.presença.length < 2){
     console.log("Falta de Presença") 
     return
   }
    //se o RA do aluno nao tiver 7 caracteres(o minimo),ira aparecer uma mensagem alertando que esta invalido.
   if(aluno1.ra.length < 7){
      console.log("RA invalido")
      return
   }
    //ira retornar no aluno.
   return[
    console.log(aluno1)
   ]
}
//valida o cadastro.
validarCadastro()

//Objeto aluno1: Primeiro, um objeto JavaScript chamado aluno1 é definido. Este objeto contém várias informações sobre um aluno, como nome, idade, disciplinas cursadas, 
//datas de presença e seu registro acadêmico (RA).

//Função validarCadastro(): Esta função é responsável por validar o cadastro do aluno com base em certos critérios.
//Validação do Nome: A primeira verificação na função é se o nome do aluno (aluno1.nome) tem menos de 10 caracteres. Se for o caso,
//a função exibe "Nome inválido" no console e retorna, encerrando a execução da função.

//Validação da Idade: Em seguida, verifica-se se a idade do aluno (aluno1.idade) é menor que 14 anos. Se for o caso,
//a função exibe "Idade inválida" no console e retorna.

//Validação das Disciplinas Cursadas: A função verifica se o aluno está cursando menos de três disciplinas (aluno1.cursando.length). 
//Se estiver, exibe "Falta de Matéria" e retorna.

//Validação da Presença: A próxima verificação é para garantir que o aluno tenha pelo menos duas datas registradas de presença (aluno1.presença.length).
//Se não, exibe "Falta de Presença" e retorna.

//Validação do Registro Acadêmico (RA): Por fim, é verificado se o registro acadêmico (RA) do aluno (aluno1.ra.length) tem menos de sete caracteres. 
//Se sim, exibe "RA inválido" e retorna.

//Impressão dos Detalhes do Aluno: Se todas as verificações forem bem-sucedidas, ou seja, se o aluno atender a todos os critérios de validação, 
//os detalhes do aluno são impressos no console usando console.log(aluno1).

//Chamada da Função validarCadastro(): Por fim, a função validarCadastro() é chamada para iniciar o processo de validação do cadastro do aluno aluno1.
