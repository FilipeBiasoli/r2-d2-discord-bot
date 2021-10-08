# Discord Bot - J.A.R.V.I.S.
O *J.A.R.V.I.S.* é um bot que você pode vincular ao seu servidor do Discord para ajudar em várias tarefas, seja no gerenciamento e moderação do canal ou mesmo para garantir o entretenimento dos membros!

## Indíce
* [Requisitos](#requisitos)
* [Instalação](#instalação)

## Requisitos
* [NodeJS (v16.6.0)](https://nodejs.org/en/)

## Instalação
Para iniciar as configurações clone o projeto
```bash
git clone https://github.com/FilipeBiasoli/discord-bot-jarvis.git
```

Acesse a pasta raiz do projeto e instale as dependências:
```cmd
npm install
```

**Criando seu bot:**

* Abra o portal do desenvolvedor do Discord clicando [aqui](https://discord.com/developers/applications) e faça login em sua conta;
* Clique no botão *"New Application"*, nomeie seu aplicativo como *J.A.R.V.I.S.*  e confirme a janela pop-up clicando no botão *"Create"*;
* Prossiga selecionando a guia *"Bot"* no painel esquerdo;
* Clique no botão *"Add Bot*" à direita e confirme a janela pop-up clicando em *"Yes, do it!*".
* Clique no botão *"Copy"* para acessar o token de seu bot.

**Conexão com o projeto:**

Para conectar o bot criado com o nosso projeto crie o arquivo `src/config/config.json`, usando o arquivo `src/config/config.example.json` como referência. Preencha o campo **token** com o token acessado no portal do desenvolvedor do Discord no passo anterior. Se arquivo ficará assim:
```json
{
  "token": "seu-token-vai-aqui"
}
```