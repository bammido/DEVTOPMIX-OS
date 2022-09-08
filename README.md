# DEVTOPMIX-OS

## Sistema de gerenciamento de OS (ordens de serviço)

Projeto não foi finalizado 100%, porém já é possível realizar as principais funcionalidades

### Como Rodar

#### Requisitos:

* Algúm programa para 'startar' o servidor MySql (Xampp pro exemplo) , obs: por padrão o backend roda na porta 3306, caso queria mudar será necessário mudar nas configs (será mostrado mais a frente)
* no servidor local Criar uma database , obs: por padrão o nome da database é DEVTOPMIX, caso queria mudar será necessário mudar nas configs (será mostrado mais a frente)


#### Passos: 

* Primeiro vá até a pasta backend e rode o comando ``` npm i ```, em seguida ``` npm run build  ``` e após ``` npm start ```
* Após isso use um programa ou extensão para fazer uma request do tipo post para criar um colaborador de teste no endpoint 'http://loclhost:3003/colaboradores' com um body contendo nome, email e senha.  ``` {
"nome": "admin",
"email": "admin@admin.com",
"senha": "admin"
} ```
* Agora vá até a pasta fronend e siga o primeiro passo  ``` npm i ```, em seguida ``` npm run build  ``` e após ``` npm start ```
* Pronto agora na a aplicação web pode ser acessada no localhost:3000

### Funcionalidade:

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
