<div align="center">

<img src="./assets/images/AuDay.png" alt="Logo do AuDay" width="180" />

# AuDay

### O dia dele, pertinho de você. 💜

Um diário digital para acompanhar os momentos especiais do seu pet na creche ou escola.

![Status](https://img.shields.io/badge/Status-Em%20desenvolvimento-A58BD4)
![React Native](https://img.shields.io/badge/React%20Native-20232A?logo=react)
![Expo](https://img.shields.io/badge/Expo-000020?logo=expo)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript)

</div>

---

## 💜 Sobre o projeto

O **AuDay** é um aplicativo mobile desenvolvido para aproximar tutores e profissionais de creches e escolas para cães.

A proposta é oferecer um diário digital no qual os profissionais possam registrar fotos, atividades e informações sobre a rotina dos pets.

Dessa forma, os tutores poderão acompanhar os momentos especiais dos seus companheiros, mesmo à distância.

O projeto está sendo desenvolvido como parte dos estudos em Desenvolvimento Mobile, utilizando React Native, Expo e TypeScript.

## ✨ Funcionalidades

As funcionalidades previstas para o AuDay incluem:

- 🐾 Cadastro de tutores e pets.
- 🔐 Autenticação de usuários e recuperação de senha.
- 📸 Registro de fotos e atividades.
- 📖 Diário digital com atualizações da rotina.
- 🔔 Notificações sobre novos registros.
- 💜 Interface intuitiva e acolhedora.

> O aplicativo está em desenvolvimento. As funcionalidades serão implementadas gradualmente.

## 🛠️ Tecnologias

| Tecnologia                   | Utilização                                    |
| ---------------------------- | --------------------------------------------- |
| **React Native**             | Desenvolvimento da interface mobile           |
| **Expo**                     | Ambiente de desenvolvimento e execução        |
| **TypeScript**               | Tipagem e organização do código               |
| **Expo Router**              | Navegação baseada na estrutura de arquivos    |
| **React Navigation (Stack)** | Navegação entre telas por meio do Expo Router |

## 🗂️ Estrutura do projeto

O AuDay utiliza **File-Based Routing**, uma abordagem em que os arquivos e diretórios definem as rotas do aplicativo.

As telas de autenticação estão organizadas em um **Route Group**, identificado pela pasta `(auth)`, que permite agrupar páginas relacionadas sem adicionar o nome do grupo ao endereço das rotas.

```text
src/
└── app/
    ├── _layout.tsx
    ├── index.tsx
    ├── explore.tsx
    │
    └── (auth)/
        ├── _layout.tsx
        ├── login/
        │   └── index.tsx
        ├── cadastro/
        │   └── index.tsx
        └── recuperarSenha/
            └── index.tsx
```

O arquivo `_layout.tsx` da raiz configura a navegação principal com `Stack`, enquanto o layout do grupo `(auth)` organiza a navegação entre as telas de autenticação.

Essa estrutura facilita a manutenção e a expansão do aplicativo conforme novas funcionalidades forem desenvolvidas.

## 📱 Identidade visual

O AuDay utiliza uma paleta de cores suaves, com destaque para tons de lilás, azul e branco.

A identidade visual busca transmitir carinho, leveza e proximidade entre tutores e seus pets.

O mascote é um cachorro da raça Dachshund, que representa a personalidade acolhedora e divertida do aplicativo.

## 🚀 Como executar o projeto

**1. Clone o repositório**

```bash
git clone https://github.com/BiancaB3/AuDay.git
```

**2. Acesse a pasta do projeto**

```bash
cd AuDay
```

**3. Instale as dependências**

```bash
npm install
```

**4. Inicie o Expo**

```bash
npx expo start
```

Para executar no emulador Android, mantenha o emulador configurado e aberto e pressione `a` no terminal do Expo.

## 📌 Status do desenvolvimento

🚧 **Em desenvolvimento**

O projeto está sendo construído gradualmente, com foco na organização da navegação, no desenvolvimento das telas de autenticação e na implementação das funcionalidades previstas.

As próximas etapas incluem a construção dos formulários, o gerenciamento dos dados e a integração com recursos nativos do dispositivo.

---

<div align="center">

**Feito com 💜 e muitas patinhas.**

_AuDay — O dia dele, pertinho de você._

</div>
