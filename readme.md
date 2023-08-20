# API de Banco Digital

Esta é uma API para um banco digital que permite a gestão de contas bancárias, depósitos, saques, transferências e consulta de saldo. A API foi construída usando Node.js, TypeScript, Express e Prisma, seguindo os princípios SOLID.

## Tecnologias Utilizadas

- Node.js: Ambiente de execução JavaScript.
- TypeScript: Linguagem que adiciona tipagem estática ao JavaScript.
- Express: Framework web para construir APIs.
- Prisma: ORM para acesso ao banco de dados.
- PostgreSQL: Banco de dados relacional usado com o Prisma.

## Funções Principais

1. Gerenciamento de Contas Bancárias: Criação, atualização e consulta de contas bancárias.
2. Depósitos: Realização de depósitos em contas.
3. Saques: Processamento de saques em contas.
4. Transferências: Transferências de fundos entre contas.
5. Consulta de Saldo: Verificação dos saldos das contas.

## Padrão de Design

O projeto segue os princípios SOLID, promovendo a criação de código modular, coeso e de fácil manutenção. O código está organizado em pastas por responsabilidade, incluindo entidades, casos de uso, repositórios e rotas.

Para a interação com o banco de dados, foi implementado o padrão Repository usando o Prisma. As interfaces de repositório estabelecem contratos de comunicação com o banco de dados, enquanto as implementações concretas no diretório 'repositories/implementations' encapsulam a lógica de acesso.

Este projeto serve como um exemplo de como construir uma API de banco digital seguindo boas práticas de desenvolvimento e design.

## Explicação de Pastas e Arquivos

    src/entities/: Contém as entidades (modelos de dados) da aplicação, como Account e Transaction.

    src/useCases/: Contém pastas para cada caso de uso. Cada pasta representa um caso de uso diferente que a aplicação oferece.

        CreateAccount/: Contém o controlador e o serviço para criar uma conta.

        GetAccount/: Contém o controlador e o serviço para obter uma conta 

        Deposit/: Contém o controlador e o serviço para realizar um depósito.

        Withdraw/: Contém o controlador e o serviço para realizar um saque.

        GetAccountBalance/: Contém o controlador e o serviço para obter o saldo da conta.

        Transfer/: Contém o controlador e o serviço para realizar uma transferência entre contas.

    src/repositories/: Contém as interfaces que estabelecem o contrato de comunicação do caso de uso com o banco de dados.

    src/repositories/implementations/: Contém as implementações concretas dos repositórios, usando Postgres.

    src/routes/: Contém os arquivos de definição das rotas do Express para cada entidade. Aqui você agrupa as rotas relacionadas a contas e transações.

    src/app.ts: Aqui você configura o servidor Express, define o middleware, roteia as requisições e lida com a inicialização do servidor.

    prisma/: Contém o arquivo schema.prisma para configurar a conexão com o banco de dados e definir os modelos do Prisma.

Essa estrutura enfatiza a separação das responsabilidades e a organização por casos de uso, o que torna o projeto mais escalável e fácil de manter. Os "use cases" são classes que encapsulam a lógica de negócios específica para cada cenário, enquanto as "entities" representam as estruturas de dados do seu domínio. Isso facilita a adição de novos casos de uso ou alterações futuras sem afetar outras partes do sistema.


## Como Usar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Configure o arquivo 'prisma/schema.prisma' de acordo com suas necessidades.
4. Execute `npx prisma migrate dev` para aplicar as migrações.
5. Inicie o servidor com `npm start`.

---

Sinta-se à vontade para ajustar este README conforme necessário para refletir os detalhes específicos do seu projeto. Esperamos que este projeto seja uma base sólida para a construção de sua API de banco digital!
