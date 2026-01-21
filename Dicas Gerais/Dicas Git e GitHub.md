Funcionamento do Git

Clone: Baixar arquivo para repositório local
Commit: Pacotes de arquivos alterados do repositório local (Versão)
Push: Envia os pacotes para repositório remoto
Pull: Baixa os arquivos alterados do repositório remoto
branch: Versões de código de forma separada
Merge: Unir branch
Pull Request: Requerimento para outra pessoa posa aprovar seu pull ou não



Comandos de Git

Criando repositório

Crie uma pasta e dentro da basta clique com mouse direito na opção "Git Bash Here" e vai abrir terminal do Git
    >git init: Comando para criar um repositório local 
    >git status: Mostra o status da pasta se existe commit
    >git add "arquivo.css": Adicionar arquivo no controle de versionamento
    >git add .: Adiciona todos os arquivos dentro da pasta
    >git commit -m "Descrição do commit": Grava a versão do código
    >git push: Envia para diretório remoto (GitHub)

Configurar Usuário no github

    >git config --global user.email "you@example.com.br": Email do GitHub
    >git config --global.name "you Name": Seu nome para atrelar ao seu código

    >git remote add origin "https://github.com/Rafael-Machado032/Curso-DankiCode-Front-End": Seta onde vai ser seu repositório no git hub
    >git push --set-upstream origin master: Envia para o master

Criando novas versões

    >git add .
    >git commit -m "Nova versão"
    >git push

Histórico das versões

    >git reflog: Mostrar o histórico das versões
    >git reset --hard 123456: 123456 é o id da versão com esse comando volta para outra versão

Trabalhando com branch (Separando trabalho para equipes)

    >git branch: Mostra quais branch esta disponíveis no repositório (a selecionada vai estar com * e as letras verdes master é a principal)
    >git branch nome da branch: Cria uma branch
    >git checkout nome da branch: seleciona a nova branch

Fazendo Marge (Unindo para branch principal)

    1.git pull da branch principal
    2.gerar uma nova branch a partir da branch principal
    3.Trabalhar e adicionar novas funcionalidades na nova branch que criou
    4.Finalizar o trabalho na branch temporária
    5.git checkout na branch principal
    6.git pull
    7.merge o código da branch temporária com a branch principal(depois de testar)
    8.git push da branch principal

    >git checkout master
    >git pull
    >git marge nome da branch
    >git push

Enviando pull request

    >git checkout nome da branch
    >git add .
    >git commit -m "alterando código"
    >git push --set-upstream origin nome da branch

    A aceitação é feita na plataforma do github
    1.Aperte no botão "Compare & pull request"
    2.Selecione a onde quer fazer o merge
    3.Coloque as observações e clique em "Create pull request"
    4.A outra pessoa se aceitar faz o marge para o principal

git ignore (ignorando arquivos)

    Comando so funciona no terminal do git
    >touch .gitignore: cria um aquivo de texto onde pode inserir caminho dos arquivos ignorados

    ex:
    segredos/
    fotos.png/