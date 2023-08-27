# API de Banco Digital

Esta é uma API para um banco digital que permite a gestão de contas bancárias, depósitos, saques, transferências e consulta de saldo. A API foi construída usando Node.js, TypeScript, Express e Prisma, seguindo os princípios SOLID.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

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

## Rotas da API

### Contas Bancárias

**Criar Conta Bancária**
```http
POST /account/create
```
Exemplo de requisição:
```json
{
    "accountNumber": "123456",
    "balance": 1000,
    "accountType": "Conta Corrente",
    "agency": "0001",
    "bankNumber": "001",
    "openingDate": "2021-01-01",
    "withdrawalLimit": 1000,
    "userId": "30ab2214-d1cf-4d11-af5f-39596ad47524"
}
```

**Buscar Detalhes da Conta Bancária**
```http
GET /account/:id
```
Exemplo de requisição:
```http
GET /account/30ab2214-d1cf-4d11-af5f-39596ad47524
```

**Excluir Conta Bancária**
```http
DELETE /account/:id
```
Exemplo de requisição:
```http
DELETE /account/30ab2214-d1cf-4d11-af5f-39596ad47524
```

### Usuários

**Criar Usuário**
```http
POST /user/create
```
Exemplo de requisição:
```json
{
    "name": "João da Silva",
    "cpf": "12345678901"
}
```

**Buscar Detalhes do Usuário**
```http
GET /user/:id
```
Exemplo de requisição:
```http
GET /user/30ab2214-d1cf-4d11-af5f-39596ad47524
```

**Listar Todos os Usuários**
```http
GET /user
```
Exemplo de requisição:
```http
GET /user
```
Exemplo de resposta:
```json
[
    {
        "id": "30ab2214-d1cf-4d11-af5f-39596ad47524",
        "name": "João da Silva",
        "cpf": "12345678901",
        "created_at": "2021-01-01T00:00:00.000Z"
    }
]
```

**Excluir Usuário**
```http
DELETE /user/:id
```
Exemplo de requisição:
```http
DELETE /user/30ab2214-d1cf-4d11-af5f-39596ad47524
```

### Transações

**Realizar Depósito**
```http
POST /deposit
```
Exemplo de requisição:
```json
{
    "id": "30ab2214-d1cf-4d11-af5f-39596ad47524",
    "amount": 1000
}
```

**Realizar Saque**
```http
POST /withdraw
```
Exemplo de requisição:
```json
{
    "id": "30ab2214-d1cf-4d11-af5f-39596ad47524",
    "amount": 1000
}
```

**Realizar Transferência**
```http
POST /transfer
```
Exemplo de requisição:
```json
{
    "id": "30ab2214-d1cf-4d11-af5f-39596ad47524",
    "amount": 1000,
    "accountNumber": "123456"
}
```


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
