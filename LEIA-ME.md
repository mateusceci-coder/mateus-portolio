# Portfólio — mateusceci.cloud

Site pessoal em React + Vite + Tailwind CSS: uma página só, em português e inglês, com tema claro e escuro.

## Rodar no seu PC

```bash
npm install
npm run dev        # abre em http://localhost:5173
npm run build      # confere os tipos e gera a pasta dist/
```

## Onde mudar o conteúdo

Todo o texto do site fica em **`src/content.ts`**, com o português e o inglês lado a lado. Se faltar uma das duas traduções, o `npm run build` acusa o erro.

### O que ainda falta preencher

- **Link de verificação da Security+:** cole o link da Credly (ou da CompTIA) em `verifyUrl`, no fim do arquivo. Sem link, o botão "Verificar credencial" não aparece.
- **Vídeos e GIFs do Crash Bash:** coloque os arquivos em `public/projects/crash-bash/` e adicione na lista `media` do projeto. Tem um exemplo comentado no próprio arquivo.
  - Prefira **MP4 ou WebM** curtos e sem som (`type: 'video'`): ficam bem menores que GIF. Eles tocam sozinhos, em loop e mudos.
  - GIF também funciona: use `type: 'image'`.

### Trocar a foto

A foto fica em `public/me.webp` (quadrada, recortada no rosto). Para trocar, substitua o arquivo. Para voltar ao monograma "MC", use `photo: undefined` em `profile`.

### Adicionar outro projeto

Adicione um item na lista `projects` em `src/content.ts` e as imagens em `public/projects/<nome-do-projeto>/`. Ele aparece como mais um bloco na seção de projetos.

---

# Deploy no Coolify (primeira vez)

Funciona igual ao Crash Bash: o Coolify baixa o repositório, monta o container pelo `Dockerfile` e cuida do domínio e do HTTPS.

## 1. Apontar o domínio (Hostinger)

No hPanel, em **Domínios → mateusceci.cloud → DNS / Nameservers**:

| Tipo | Nome | Aponta para |
|---|---|---|
| A | `@` | o IP da VPS onde o Coolify está |
| CNAME | `www` | `mateusceci.cloud` (opcional) |

Se já existir um registro A para `@` (da página padrão da Hostinger), edite esse em vez de criar outro.

## 2. Mandar o projeto para o GitHub

Crie um repositório **público** vazio no GitHub (sem README), por exemplo `portfolio`, e dentro da pasta do projeto:

```bash
git remote add origin git@github.com:mateusceci-coder/portfolio.git
git push -u origin main
```

## 3. Criar o app no Coolify

1. No GitHub, dê ao **GitHub App do Coolify** acesso ao repositório novo (o mesmo App que você usa no Crash Bash: **Settings → Applications → Configure**).
2. No Coolify, abra um **Project**, clique em **+ New** e escolha **Private Repository (with GitHub App)**. Funciona com repositório público também, e assim cada push na `main` já faz deploy sozinho.
3. Selecione o repositório, branch **main**, e em **Build Pack** escolha **Dockerfile**.
4. Em **Domains**, coloque `https://mateusceci.cloud` (e `https://www.mateusceci.cloud`, se criou o `www`).
5. Em **Ports Exposes**, coloque **80**.
6. Clique em **Deploy**. O primeiro leva uns 2 minutos.

## Deploys seguintes

Mudou alguma coisa: é só mandar para o GitHub. O Coolify percebe o push e publica sozinho.

```bash
git add .
git commit -m "o que mudou"
git push
```

## Testar o container no seu PC (opcional)

```bash
docker build -t portfolio .
docker run --rm -p 8081:80 portfolio     # abre em http://localhost:8081
```

---

# Segurança

O `Caddyfile` manda cabeçalhos de segurança em todas as respostas. O principal é a **Content-Security-Policy**, que só deixa carregar arquivos do próprio site: nada de script inline, fonte externa ou serviço de terceiros. As fontes ficam junto com o site, sem chamar o Google Fonts.

Se um dia você adicionar analytics, um formulário externo ou qualquer coisa de outro domínio, libere esse domínio na linha `Content-Security-Policy` do `Caddyfile`. Senão o navegador bloqueia.

# Imagem de compartilhamento

`public/og.png` é a prévia que aparece ao mandar o link no LinkedIn, WhatsApp etc. Ela foi gerada a partir do topo do site. Se você mudar o título, vale gerar outra.
