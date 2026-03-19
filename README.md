# O Trilema do Torcedor ⚽

Site humorístico que prova, de forma interativa, que a vida do torcedor brasileiro é impossível.

Três toggles. Uma verdade dolorosa: **você não pode torcer, assistir e ser feliz ao mesmo tempo.**

## Como funciona

O site apresenta três toggles interdependentes:

| Toggle | Label |
|--------|-------|
| A | Torcer para o clube |
| B | Assistir o clube |
| C | Ser feliz! |

Sempre que o usuário tenta ligar os três ao mesmo tempo, um deles é **forçado para OFF** automaticamente — com animação dramática e som engraçado. É o trilema do torcedor: escolha dois, nunca três.

### Regras de interdependência

| Ação | Condição | Resultado |
|------|----------|-----------|
| Ligar C (Ser Feliz) | A e B já estão ON | C liga, B é forçado OFF |
| Ligar B (Assistir) | A e C já estão ON | B liga, A é forçado OFF |
| Ligar A (Torcer) | B e C já estão ON | A liga, C é forçado OFF |

## Features

- **Toggles animados** com Framer Motion — slide para a esquerda quando forçado OFF
- **Sons engraçados** no momento do "force off" (com botão global para mutar)
- **Dados de clubes via API** (mock local por enquanto)
- **Mobile-first** e responsivo
- **Micro-interações** em todos os elementos interativos
- **Tom visual** vibrante e engraçado — feito para compartilhar com os amigos

## Stack

- **React 19** + **Vite 8**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion**
- **React Router DOM**
- **Axios** (consumo de API)

## Estrutura do projeto

```
src/
  components/       # Componentes de UI reutilizáveis
  hooks/            # Custom hooks (useTrilema, useClubData, useSound)
  pages/            # Páginas da aplicação
  services/         # Instância Axios + mock da API
  types/            # Interfaces TypeScript
  assets/           # Assets estáticos (sons, imagens)
  lib/              # Utilitários
```

## Licença

Projeto pessoal — feito por diversão e pela dor de ser torcedor.
