# O Trilema do Torcedor — Instruções de Implementação

## Contexto

Existe um projeto React + Vite + TypeScript já inicializado. Implemente nele um site humorístico chamado **"O Trilema do Torcedor"**, inspirado na imagem de referência: três toggles com uma lógica de interdependência que forma uma piada sobre a vida de ser torcedor de futebol.

---

## Stack Obrigatória

- **React + Vite** (projeto existente)
- **TypeScript** (uso de `any` permitido quando necessário — não usar strict sem any)
- **Tailwind CSS** para estilização
- **Framer Motion** para animações e transições
- **Axios** para consumo de API

Instale as dependências que faltarem.

---

## Funcionalidade Central — O Trilema

Três toggles com interdependência. Quando dois estão ON e o usuário tenta ligar o terceiro, o terceiro liga mas um dos outros é forçado para OFF automaticamente:

| Ação do usuário | Condição | Resultado |
|----------------|----------|-----------|
| Ligar **C** (Ser Feliz) | **A** e **B** já estão ON | C → ON, **B** → OFF (forçado) |
| Ligar **B** (Assistir) | **A** e **C** já estão ON | B → ON, **A** → OFF (forçado) |
| Ligar **A** (Torcer) | **B** e **C** já estão ON | A → ON, **C** → OFF (forçado) |

Quando um toggle é desligado automaticamente (forçado para OFF):
1. Ele deve deslizar suavemente para a esquerda com **Framer Motion** antes de desligar — feedback visual claro.
2. Um **som engraçado** deve tocar (ex: efeito de "fail", "buzzer", "sad trombone" ou similar).

---

## Dados via API (Axios)

Os textos de cada toggle e o clube exibido devem vir de uma API. Enquanto não há API real, use uma **API mock** — escolha a abordagem mais adequada para o projeto (JSON local, MSW, json-server ou similar).

### Estrutura de dados esperada do endpoint de clube:

```ts
interface Club {
  id: string;
  name: string;         // ex: "Santos FC"
  shortName: string;    // ex: "Santos"
  iconUrl: string;      // URL do escudo/ícone do clube
  colors: {
    primary: string;    // hex
    secondary: string;  // hex
  };
}

interface ToggleItem {
  id: "A" | "B" | "C";
  label: string;        // ex: "torcer para o"
  club: Club;
}
```

### Clube padrão

Use o **Santos FC** como clube padrão na mock. Busque o ícone/escudo do clube em uma biblioteca ou CDN de ícones de clubes brasileiros — sugestões:
- [API-Football](https://www.api-football.com/) logos
- [cdn.jsdelivr.net com football-logos](https://github.com/nicholasmccullum/football-logos)
- Qualquer CDN pública com escudos de clubes brasileiros que funcione sem autenticação

---

## Sons

- Quando um toggle for **forçado para OFF**, tocar um som engraçado.
- Criar um **botão global** (ex: canto da tela) para habilitar ou desabilitar sons.
- O estado de som (habilitado/desabilitado) deve persistir na sessão.
- Use arquivos de som leves (`.mp3` ou `.ogg`). Busque sons de domínio público ou gere via Web Audio API se preferir não depender de assets externos.

---

## Design e UX

### Tom geral
Engraçado, vibrante, feito para dar risada. Amigos mostrando uns para os outros. Não precisa ser sério nem corporativo.

### Requisitos visuais
- **Mobile-first** e responsivo
- **Rico em animações e micro-interações** — use Framer Motion liberalmente
- Cada toggle deve ter presença visual forte: o ícone/escudo do clube deve aparecer na linha
- Quando um toggle é forçado para OFF, ele desliza para a esquerda (Framer Motion `animate` com `x: -100` ou similar, depois volta à posição)
- Transições suaves em todos os estados dos toggles (ON/OFF)
- Estado de loading enquanto a API carrega os dados (skeleton ou animação divertida)
- Estado de erro amigável e engraçado caso a API falhe

### Ideias criativas (implemente o que julgar melhor)
- Contador de quantas vezes o usuário tentou "ser feliz" e falhou
- Reação cômica quando o usuário consegue ter os três ON por um frame antes da lógica agir
- Easter eggs
- Emojis, gifs ou expressões no estilo meme quando o toggle é forçado para OFF

---

## Estrutura de Componentes Sugerida

```
src/
  components/
    ToggleItem/         # Um toggle com label + ícone do clube
    ToggleList/         # Os três toggles com a lógica do trilema
    SoundToggle/        # Botão global de som
    ClubBadge/          # Escudo/ícone do clube
  hooks/
    useTrilema.ts       # Lógica de interdependência dos toggles
    useClubData.ts      # Fetch de dados via Axios
    useSound.ts         # Controle de sons
  services/
    api.ts              # Instância do Axios + endpoints
    mock/               # Mock da API
  types/
    index.ts            # Interfaces TypeScript
```

---

## O que Evitar

- TypeScript strict sem `any` — uso de `any` é permitido
- Designs genéricos e sem personalidade
- Animações bruscas sem propósito
- Componentes monolíticos não reutilizáveis
- Hard-coded club data fora da camada de serviço/mock
