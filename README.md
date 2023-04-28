# Introdução ao Create React App

No diretório de seu projeto você deve executar o seguinte comando:
### `npm install react-scripts --save`

Execute esse comando no seu terminal "CMD" para instalar todos os componentes necessarios para utilização dos arquivos React.
Se o pacote já estiver instalado, verifique se a pasta node_modules/.bin está presente no diretório do projeto. Se estiver ausente, pode ser necessário excluir a pasta node_modules e reinstalar todas as dependências do projeto executando o comando:
### `rm -rf node_modules`
### `npm install`

Após garantir que o react-scripts está instalado e a pasta node_modules/.bin está presente, tente executar novamente o comando:
### `npm run build.`

O comando:
### `npm start`

Executa o aplicativo em modo de desenvolvimento em uma pagina we, usando a porta 3000 em localhost. A pagina sempre é recarregada ao fazer alterações e salvar o arquivo.

Para iniciar em modo de teste no modo de observação interativo basta usar o comando:
### `npm test`

Para criar o aplicativo para produção na pasta 'build'.\ basta usar o seguinte comando:
### `npm run build`

Ele funciona de uma maneira otimizada para obter melhor desempenho.
