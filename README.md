# DEVTOPMIX-OS

## Sistema de gerenciamento de OS (ordens de serviço)

Projeto não foi finalizado 100%, porém já é possível realizar as principais funcionalidades

![image](https://user-images.githubusercontent.com/65303066/189224143-026b438e-8b4e-4d3c-be50-b917bdf7c788.png)


### Como Rodar

#### Requisitos:

* Algúm programa para 'startar' o servidor MySql (Xampp pro exemplo) , obs: por padrão o backend roda na porta 3306, caso queria mudar será necessário mudar nas configs (será mostrado mais a frente)
* no servidor local Criar uma database , obs: por padrão o nome da database é DEVTOPMIX, caso queria mudar será necessário mudar nas configs (será mostrado mais a frente)

#### Passos: 

* Primeiro vá até a pasta backend pelo terminal e rode o comando ``` npm i ```, em seguida ``` npm run build  ``` e após ``` npm start ```
* Após isso como o servidor rodando use um programa ou extensão (ex: postman) para fazer uma request do tipo post para criar um colaborador de teste no endpoint 'http://loclhost:3003/colaboradores' com um body contendo nome, email e senha.  ``` {
"nome": "admin",
"email": "admin@admin.com",
"senha": "admin"
} ```
* Abra outro terminal e vá até a pasta fronend e siga o primeiro passo  ``` npm i ```, em seguida ``` npm run build  ``` e após ``` npm start ```
* Pronto agora na a aplicação web pode ser acessada no localhost:3000

##### Como mudar as configs do banco de dados:

Na arquivo do backend app.module.ts está toda a configuração de integração com o banco de dados:

![image](https://user-images.githubusercontent.com/65303066/189225144-52d0e709-5b00-4254-8fa1-865305cf2201.png)

Se alguma mudança for feita deverá ser rodado os comandos ``` npm run build  ``` e ``` npm start ``` novamente

### Funcionalidades:

* fazer login, ao logar um cookie é criado com um token recebido do backend com duração de sessão de uma hora após esse tempo não será possível acessar as funcionalidades de usuário sendo redirecionado para login
* É possível criar novas ordens de serviço , caso esteja logado
* Para acessar a área de Gestor é nescessário criar um colaborador com o email 'admin@admin.com'
* Como gestor é possível cadastrar clienetes, colaboradores e visualizar as ordens de serviço criadas
* É possível filtrar as OS por cliente e colaborador
* É possíbvel ordenar as OS por cliente, colaborador e data em ordem 'asc' ou 'desc'
* A lista de OS tem paginação podendo alterar também a quantidade de OS a serem exibidas (ex: 10)

#### Algumas observações

* todas as entidades possuem id gerado pelo backend
* a data de criação das OS é gerada pelo backend
* o banco de dados começa zerado
* não possuo experiência com docker, foi a única tecnologia que não consegui implementar no projeto =/

### Considerações

Agradeço pela oportunidade e gostaria de destacar que foi o meu primeiro contato com NestJS e NextJS, foi um aprendizado muito grande. Caso seja o gostem do projeto espero poder aprender mais dessas stacks ( principalmente Docker que não consegui implementar) com vocês!
