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

**Adicionando o bot aos servidores:**

Para gerar o link de convite que adiciona o bot aos servidores siga os passos a seguir:
* Selecione a guia *"OAuth2"* no painel esquerdo do portal do desenvolvedor do Discord;
* Na parte inferior da página, você encontrará o gerador de URL OAuth2 do Discord. Selecione as opções **bot** e **applications.commands**;
* Depois de selecionar a opção de **bot**, uma lista de permissões aparecerá, selecione **Administrator**;
* Acima da lista de permissões pegue o link de convite através do botão *"Copy"* e insira-o em seu navegador;
* Escolha o servidor ao qual deseja adicioná-lo e clique em *"Continuar"*. Observe que você precisará da permissão **"Gerenciar servidor"** para poder adiciona-lo em um servidor;
* Em seguida clique em *"Autorizar"*.