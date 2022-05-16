# R2-D2 - Discord Bot

O _R2-D2_ é um pequeno robô e um dos principais personagens da saga Star Wars. Ele é um droide astromecânico, responsável por manutenção e navegação de astronaves. Fala uma "linguagem" incompreensível, de bipes e sons eletrônicos. Assim como toda a série, o personagem teve forte impacto cultural e se transformou em um ícone pop.

Este respositório contém um bot inspirado no personagem _R2-D2_ que você pode vincular ao seu servidor do Discord para ajudar em várias tarefas, seja no gerenciamento e moderação do servidor ou mesmo para garantir o entretenimento dos membros!

## Indíce

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Interações](#interações)

## Requisitos

- [NodeJS (v16.6.0)](https://nodejs.org/en/)

## Instalação

Para iniciar as configurações clone o projeto

```bash
git clone https://github.com/FilipeBiasoli/r2-d2-discord-bot.git
```

Acesse a pasta raiz do projeto e instale as dependências:

```cmd
npm install
```

**Variáveis de ambiente:**

Crie um arquivo `.env` na raíz do projeto, usando o arquivo `.env.example` como referência.

**Criando seu bot:**

- Ative o **"Modo de desenvolvedor"** do Discord. Para isso abra seu aplicativo e vá para suas configurações. Na página _"Avançado"_, ative o _"Modo de desenvolvedor"_.
- Abra o portal do desenvolvedor do Discord clicando [aqui](https://discord.com/developers/applications) e faça login em sua conta.
- Clique no botão _"New Application"_, nomeie seu aplicativo como _R2-D2_ e confirme a janela pop-up clicando no botão _"Create"_.
- Prossiga selecionando a guia _"Bot"_ no painel esquerdo.
- Clique no botão _"Add Bot_" à direita e confirme a janela pop-up clicando em _"Yes, do it!_".
- Clique no botão _"Copy"_ para copiar o token de seu bot, e adicione ao campo **TOKEN** nas variáveis de ambiente.

**Adicionando o bot ao servidor:**

Para gerar o link de convite que adiciona o bot aos servidores siga os passos a seguir:

- Selecione a guia _"OAuth2"_ no painel esquerdo do portal do desenvolvedor do Discord.
- Na parte inferior da página, você encontrará o gerador de URL OAuth2 do Discord. Selecione as opções **bot** e **applications.commands**.
- Depois de selecionar a opção de **bot**, uma lista de permissões aparecerá, selecione **Administrator**.
- Acima da lista de permissões pegue o link de convite através do botão _"Copy"_ e insira-o em seu navegador.
- Escolha o servidor ao qual deseja adicioná-lo e clique em _"Continuar"_. Observe que você precisará da permissão **"Gerenciar servidor"** para poder adiciona-lo em um servidor.
- Em seguida clique em _"Autorizar"_.

**Implantando os comandos ao servidor:**

- Navegue até o servidor onde o seu bot foi adicionado, clique com o botão direito do mouse no ícone do servidor e depois em _"Copiar ID"_. Esse será o valor de **GUILD_ID** nas variáveis de ambiente, que representa o id do seu servidor.
- No mesmo servidor, clique com o botão direito do mouse no perfil de usuário do bot em questão, no lado direito da tela, e depois clique em _"Copiar ID"_. Esse será o valor de **CLIENT_ID** nas variáveis de ambiente, que representa o id do seu bot.

Acesse a pasta raiz do projeto e execute o _deploy_ para implantar os comandos do bot ao servidor. Nota: sempre que criar um novo comando será necessário executar o _deploy_ dos comandos novamente:

```cmd
npm run deploy-commands
```

## Interações

### Jogar um dado:

- **Comando:** `/dice (nº máximo)`

Retorna um número aleatório entre 1 e o número máximo passado no comando.
