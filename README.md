# Café Project

Este projeto consiste em um sistema que integra front-end e back-end para a gestão de pedidos em um café. Siga os passos abaixo para configurar e executar o ambiente localmente.

## Passos para Configuração e Execução

1. **Configuração do Back-End:**
   ```bash
   cd cafe-react
   cd back-end
   ```
   - Modifique o arquivo `.env`:
     ```bash
     DATABASE_URL="postgresql://postgres:root@172.17.0.2:5432/cafeDB"
     ```
     (Ajuste conforme o ambiente da sua máquina).
   - Instale as dependências:
     ```bash
     npm install
     ```
   - Crie as tabelas:
     ```bash
     npx prisma migrate dev
     ```
   - Abasteça o banco de dados:
     ```bash
     npm run seed
     ```
   - Rode o back-end:
     ```bash
     npm run dev
     ```
     O projeto será executado na porta 3000 por padrão.

2. **Configuração do Front-End:**
   ```bash
   cd cafe-react
   cd front-end
   ```
   - Instale as dependências:
     ```bash
     npm install
     ```
   - Rode o front-end:
     ```bash
     npm run start
     ```
     Se for perguntado sobre o uso da porta 3000, digite `Y` ou `yes`.

## Melhorias para o Futuro

- Apenas administradores podem adicionar outros administradores.
- O dashboard deverá possuir um card chamado "Últimos pedidos".
```
Participantes: João Gabriel, João Arthur e Railine
