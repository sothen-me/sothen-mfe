## Índice
- [Introdução](#introdução)
- [Instalação](#instalacao)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Tecnologias](#tecnologias)
- [Contribuindo](#contribuindo)
- [Licenças](#licenças)

## Introdução
 
 Este repositório é um template base para projetos que desejam trabalhar com micro-frontends em um monorepo. Toda sua arquitetura foi pensada para diminuir ao máximo os problemas já conhecidos deste cenário.

## Instalação

1. **Clonando o repositório**

	```sh
	$ git clone git@github.com:sothen-me/sothen-mfe.git
	```

2. **Rodando o servidor**

	Entre na pasta principal do projeto:

	```sh
	$ cd sothen-mfe
	```

	Use o Npm para instalar as dependências:

	```sh
	$ npm i
	```

	Execute todos os pacotes utilizando o turborepo

	```sh
	$ npm run dev
	```

	Ou execute individualmente os pacotes, acessando-os diretamente
  (pacotes dependentes podem precisar ser rodados simultaneamente)

	```sh
	$ cd packages/design/docs && npm run dev
	```

## Estrutura do projeto

- **`packages`**: Toda a estrutura de arquivos e pastas dos monorepos,
seguindo a funcionalidades de [Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).

  - **`apps`**: Contém todas as aplicações inseridas no monorepo.
  	- **`host`**: Aplicação base que serve como o host que consome os demais micro-frontends.
  	- **`remote1`**: Primeira aplicação remota, construida com react, consumida pelo host.
  	- **`remote2`**: Segunda aplicação remota, construida com react, consumida pelo host.

  - **`configs`**: Contém os pacotes de configurações globais compartilhadas entre os demais pacotes.
  	- **`eslint`**: Configuração padrão do eslint, contendo um arquivo para aplicações com React e outro com NextJs.
  	- **`ts-config`**: Configuração padrão do ts-config, contendo uma básica e outra para aplicações com React.
  	- **`webpack`**: Configuração padrão do webpack para as aplicações que usam React.

  - **`design`**: Contem os pacotes referentes ao design system que será implementado pelas aplicações do monorepo.
  	- **`docs`**: Projeto que usa React e Storybook para documentar todos os componentes disponiveis na biblioteca de componentes em React.
  	- **`react`**: Biblioteca de componentes em react que será consumida pelas aplicações para padronização do estilo.
  	- **`tokens`**: Tokens básicos de estilização que são utilizados na biblioteca de React, mas podem ser utilizados para libs de qualquer natureza.

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
- [Turborepo](https://turbo.build/repo)
- [Stitches](https://stitches.dev/)
- [Polished](https://polished.js.org/)
- [Phosphor icons](https://phosphoricons.com/)
- [Vite](https://vitejs.dev/)
- [Tsup](https://tsup.egoist.dev/)

Mais ferramentas serão incrementadas a medida que o projeto for crescendo...

## Contribuindo

Para ler informações sobre contribuição, confira nosso guia
de contribuição em **EM CONSTRUÇÃO**

## Licenças

Veja as licenças em **EM CONSTRUÇÃO**.

