# Ap01DS870 - Times de Futebol

## AVISOS

- A aplicação a seguir deve ser enviada por e-mail para validação. 
- Deve ser desenvolvido em trios.
- Realizar o upload do projeto para o GitHub e enviar o link para download do projeto para o e-mail brawerman@ufpr.br Assunto: DS870 -Noite –Aplic01
- Enviar até 23:59 de 31/05.
- Não esqueça de informar no e-mail nome completo e GRR dos alunos participantes.

## Especificações

Um gestor de futebol solicitou uma aplicação capaz de gerenciar um banco de informação sobre times de futebol.

Ele solicita as seguintes funções:

- [x] Cadastro de times – informando nome, cidade e estado do time. Série que o time atua no campeonato nacional (permitir séries A, B, C ou vazio para não atua no campeonato). Um jsonarray(titles) guardando a quantidade de títulos do time {estadual, nacional e internacional}. A folha de pagamento do time. Apenas o campo série do campeonato brasileiro pode ser vazio.

- [x] Listagem de todos os times cadastrados (retornando todos os dados)

- [x] Pesquisa de time por nome (retornando todos os dados dos times com aqueles caracteres fornecidos)

- [x] Edição de um time –permitindo atualizar qualquer um dos campos

- [x] Remoção de um time –permitindo deletar um time fornecido a partir do ID.

- [ ] A equipe deve criar endpointspara todos as possíveis ações fornecidas pela API.

- [x] Use um módulo com um json array para simular a base de dados dos times (conforme visto na API_HP).
