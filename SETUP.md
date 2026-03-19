# Setup e Execução

## Pré-requisitos

- **Node.js** >= 18 (recomendado: v24+)
- **npm** >= 9

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd toggle-misery-engine
npm install
```

## Scripts disponíveis

### Desenvolvimento

Inicia o servidor de desenvolvimento com hot reload:

```bash
npm run dev
```

O app estará disponível em `http://localhost:5173`.

### Build de produção

Compila o TypeScript e gera o bundle otimizado:

```bash
npm run build
```

Os arquivos de saída ficam no diretório `dist/`.

### Preview do build

Serve o build de produção localmente para verificação:

```bash
npm run preview
```

### Lint

Roda o ESLint no projeto:

```bash
npm run lint
```

## Configuração

### Path aliases

O projeto usa o alias `@` para importações absolutas a partir de `src/`:

```ts
import { Something } from '@/components/Something'
```

Configurado em `vite.config.ts` e `tsconfig.app.json`.

### API Mock

Os dados de clubes são servidos por um mock local em `src/services/mock/`. Quando uma API real estiver disponível, basta atualizar a URL base em `src/services/api.ts`.

## Estrutura de configuração

| Arquivo | Descrição |
|---------|-----------|
| `vite.config.ts` | Configuração do Vite (plugins, aliases) |
| `tsconfig.json` | Configuração base do TypeScript |
| `tsconfig.app.json` | Configuração TS para o código da aplicação |
| `tsconfig.node.json` | Configuração TS para arquivos de config (Vite, etc.) |
| `eslint.config.js` | Configuração do ESLint |
