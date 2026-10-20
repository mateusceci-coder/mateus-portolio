// All site copy lives here, with English and Portuguese side by side.
// Every text is a `Localized`, so a missing translation is a type error.
import type { SimpleIcon } from 'simple-icons'
import {
  siAppstore,
  siCaddy,
  siClaude,
  siCoolify,
  siDocker,
  siExpo,
  siGit,
  siGitlab,
  siGoogleplay,
  siJavascript,
  siJest,
  siKubernetes,
  siLaravel,
  siMui,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siRabbitmq,
  siReact,
  siRedux,
  siShadcnui,
  siSocketdotio,
  siSwift,
  siTailwindcss,
  siTestinglibrary,
  siTypescript,
  siWebrtc,
} from 'simple-icons'

export type Lang = 'en' | 'pt'
export type Localized = Record<Lang, string>

export type Skill = { name: string | Localized; icon?: SimpleIcon }

export type Media = {
  /** GIFs are images. Prefer short MP4/WebM loops: they are much smaller. */
  type: 'image' | 'video'
  src: string
  /** Video only: image shown before the video loads. */
  poster?: string
  alt: Localized
}

export type Project = {
  slug: string
  title: string
  summary: Localized
  highlights: Localized[]
  stack: Skill[]
  isPrivate?: boolean
  media: Media[]
}

export const profile = {
  name: 'Mateus Ceci',
  // Square photo in /public. Set to undefined to show the "MC" monogram instead.
  photo: '/me.webp' as string | undefined,
  email: 'mateusceci@gmail.com',
  github: 'https://github.com/mateusceci-coder',
  linkedin: 'https://www.linkedin.com/in/mateusceci-coder',
}

export const ui = {
  meta: {
    title: {
      en: 'Mateus Ceci — Full Stack Developer',
      pt: 'Mateus Ceci — Desenvolvedor Full Stack',
    },
  },
  skipToContent: { en: 'Skip to content', pt: 'Pular para o conteúdo' },
  nav: {
    about: { en: 'About', pt: 'Sobre' },
    skills: { en: 'Skills', pt: 'Habilidades' },
    projects: { en: 'Projects', pt: 'Projetos' },
    education: { en: 'Education', pt: 'Formação' },
    certificates: { en: 'Certificates', pt: 'Certificações' },
    contact: { en: 'Contact', pt: 'Contato' },
  },
  header: {
    language: { en: 'Language', pt: 'Idioma' },
    // Each language is named in itself, as language switchers usually do.
    languageNames: { en: 'English', pt: 'Português' } satisfies Record<Lang, string>,
    toDark: { en: 'Switch to dark theme', pt: 'Mudar para o tema escuro' },
    toLight: { en: 'Switch to light theme', pt: 'Mudar para o tema claro' },
    openMenu: { en: 'Open menu', pt: 'Abrir menu' },
    closeMenu: { en: 'Close menu', pt: 'Fechar menu' },
  },
  hero: {
    role: { en: 'Full Stack Developer', pt: 'Desenvolvedor Full Stack' },
    // `note` marks a word with a footnote number that points into `footnotes`.
    // The \u00a0 (non-breaking space) keeps the last word from sitting alone on its line.
    headline: {
      en: [
        'A generalist developer across ',
        { text: 'web', note: 1 },
        ', ',
        { text: 'mobile', note: 2 },
        ' and ',
        { text: 'back-end', note: 3 },
        ', with security at\u00a0heart.',
      ],
      pt: [
        'Desenvolvedor generalista em ',
        { text: 'web', note: 1 },
        ', ',
        { text: 'mobile', note: 2 },
        ' e ',
        { text: 'back-end', note: 3 },
        ', com foco em\u00a0segurança.',
      ],
    } satisfies Record<Lang, (string | { text: string; note: number })[]>,
    footnotes: [
      { en: 'React · Next.js · Tailwind CSS', pt: 'React · Next.js · Tailwind CSS' },
      {
        en: 'React Native · Expo · native modules in Swift and Java',
        pt: 'React Native · Expo · módulos nativos em Swift e Java',
      },
      {
        en: 'Node.js · NestJS · Laravel · PostgreSQL',
        pt: 'Node.js · NestJS · Laravel · PostgreSQL',
      },
    ] satisfies Localized[],
    contact: { en: 'Get in touch', pt: 'Entre em contato' },
    project: { en: 'View project', pt: 'Ver projeto' },
  },
  about: {
    paragraphs: [
      {
        en: "I'm a full stack developer who likes owning a product end to end. For more than two years I've built web and mobile products from scratch to production — interfaces, APIs, queues and the pipelines that ship them — including apps published on both the App Store and Google Play.",
        pt: 'Sou desenvolvedor full stack e gosto de cuidar de um produto de ponta a ponta. Há mais de dois anos construo produtos web e mobile do zero até a produção — interfaces, APIs, filas e as pipelines que colocam tudo no ar — incluindo apps publicados na App Store e no Google Play.',
      },
      {
        en: 'Being a generalist is a choice. I move between React, React Native and Node.js or Laravel back-ends depending on what the problem needs, and I use AI-assisted, spec-driven development in my day-to-day work.',
        pt: 'Ser generalista é uma escolha. Transito entre React, React Native e back-ends em Node.js ou Laravel conforme o problema pede, e uso desenvolvimento assistido por IA e guiado por especificação no dia a dia.',
      },
      {
        en: "Security is the part of the craft I care about most. I'm CompTIA Security+ certified and have worked hands-on with digital certificates, digital signatures, asymmetric cryptography and email authentication. To me, security is a design decision made from the first line, not a checklist at the end.",
        pt: 'Segurança é a parte do ofício que mais me interessa. Tenho a certificação CompTIA Security+ e experiência prática com certificados digitais, assinaturas digitais, criptografia assimétrica e autenticação de e-mail. Para mim, segurança é uma decisão de projeto tomada desde a primeira linha, não um checklist no final.',
      },
    ] satisfies Localized[],
  },
  skills: {
    spokenTitle: { en: 'Spoken languages', pt: 'Idiomas' },
    spoken: {
      en: 'Portuguese (native) · English (B2, upper-intermediate)',
      pt: 'Português (nativo) · Inglês (B2, intermediário avançado)',
    },
  },
  projects: {
    title: { en: 'Personal projects', pt: 'Projetos pessoais' },
    private: { en: 'Private — login required', pt: 'Privado — requer login' },
    highlights: { en: 'Highlights', pt: 'Destaques' },
    stack: { en: 'Stack', pt: 'Stack' },
    expand: { en: 'Open fullscreen', pt: 'Abrir em tela cheia' },
    previous: { en: 'Previous', pt: 'Anterior' },
    next: { en: 'Next', pt: 'Próxima' },
    close: { en: 'Close', pt: 'Fechar' },
  },
  certificates: {
    issuedBy: { en: 'Issued by', pt: 'Emitido por' },
    holder: { en: 'Holder', pt: 'Titular' },
    valid: { en: 'Valid', pt: 'Validade' },
    verify: { en: 'Verify credential', pt: 'Verificar credencial' },
  },
  contact: {
    heading: { en: "Let's talk.", pt: 'Vamos conversar.' },
    text: {
      en: "The quickest way to reach me is email. I'm also on LinkedIn and GitHub.",
      pt: 'O jeito mais rápido de falar comigo é por e-mail. Também estou no LinkedIn e no GitHub.',
    },
    copy: { en: 'Copy email', pt: 'Copiar e-mail' },
    copied: { en: 'Copied', pt: 'Copiado' },
  },
  footer: {
    builtWith: {
      en: 'Built with React, Vite and Tailwind CSS.',
      pt: 'Feito com React, Vite e Tailwind CSS.',
    },
  },
}

export const skillGroups: { title: Localized; items: Skill[] }[] = [
  {
    title: { en: 'Languages', pt: 'Linguagens' },
    items: [
      { name: 'TypeScript', icon: siTypescript },
      { name: 'JavaScript', icon: siJavascript },
      { name: 'PHP', icon: siPhp },
      { name: 'Swift', icon: siSwift },
      { name: 'Java', icon: siOpenjdk },
    ],
  },
  {
    title: { en: 'Front-end', pt: 'Front-end' },
    items: [
      { name: 'React', icon: siReact },
      { name: 'Next.js', icon: siNextdotjs },
      { name: 'Redux', icon: siRedux },
      { name: 'Zustand' },
      { name: 'Tailwind CSS', icon: siTailwindcss },
      { name: 'shadcn/ui', icon: siShadcnui },
      { name: 'Material UI', icon: siMui },
      { name: 'SEO' },
    ],
  },
  {
    title: { en: 'Mobile', pt: 'Mobile' },
    items: [
      { name: 'React Native', icon: siReact },
      { name: 'Expo', icon: siExpo },
      { name: { en: 'Native modules (Swift, Java)', pt: 'Módulos nativos (Swift, Java)' } },
      { name: 'App Store', icon: siAppstore },
      { name: 'Google Play', icon: siGoogleplay },
    ],
  },
  {
    title: { en: 'Back-end', pt: 'Back-end' },
    items: [
      { name: 'Node.js', icon: siNodedotjs },
      { name: 'NestJS', icon: siNestjs },
      { name: 'Laravel', icon: siLaravel },
      { name: 'REST APIs' },
      { name: { en: 'Microservices', pt: 'Microsserviços' } },
      { name: 'RabbitMQ', icon: siRabbitmq },
      { name: 'Webhooks' },
      { name: 'WebSocket' },
    ],
  },
  {
    title: { en: 'Data', pt: 'Dados' },
    items: [
      { name: 'PostgreSQL', icon: siPostgresql },
      { name: 'MySQL', icon: siMysql },
    ],
  },
  {
    title: { en: 'DevOps & cloud', pt: 'DevOps e nuvem' },
    items: [
      { name: 'Docker', icon: siDocker },
      { name: 'Git', icon: siGit },
      { name: 'GitLab CI/CD', icon: siGitlab },
      { name: 'Kubernetes', icon: siKubernetes },
      { name: 'AWS' },
    ],
  },
  {
    title: { en: 'Security', pt: 'Segurança' },
    items: [
      {
        name: {
          en: 'PKI and digital certificates (ICP-Brasil A1/A3)',
          pt: 'PKI e certificados digitais (ICP-Brasil A1/A3)',
        },
      },
      { name: { en: 'PDF digital signatures', pt: 'Assinatura digital de PDF' } },
      { name: { en: 'Asymmetric cryptography', pt: 'Criptografia assimétrica' } },
      { name: 'OTP' },
      { name: { en: 'Liveness detection', pt: 'Prova de vida (liveness)' } },
      { name: { en: 'Trusted timestamping', pt: 'Carimbo do tempo' } },
      { name: 'SPF · DKIM · DMARC' },
    ],
  },
  {
    title: { en: 'Practices', pt: 'Práticas' },
    items: [
      { name: 'Jest', icon: siJest },
      { name: 'React Testing Library', icon: siTestinglibrary },
      { name: 'Claude Code', icon: siClaude },
      { name: 'Spec-Driven Development' },
      { name: { en: 'AI-assisted development', pt: 'Desenvolvimento assistido por IA' } },
    ],
  },
]

// To add a project, add an entry here. Media files go in /public/projects/<slug>/.
export const projects: Project[] = [
  {
    slug: 'crash-bash',
    title: 'Crash Bash Online',
    summary: {
      en: 'A private, self-hosted setup so my friends and I can play a childhood favorite together online, straight from the browser. One person hosts a room, up to three friends join from anywhere, and nobody installs anything.',
      pt: 'Uma estrutura privada e auto-hospedada para eu e meus amigos jogarmos um clássico da infância juntos, online, direto do navegador. Uma pessoa cria a sala, até três amigos entram de qualquer lugar, e ninguém precisa instalar nada.',
    },
    highlights: [
      {
        en: 'Browser emulation with real-time online play over WebRTC, for up to 4 players.',
        pt: 'Emulação no navegador com jogo online em tempo real via WebRTC, para até 4 jogadores.',
      },
      {
        en: 'A self-hosted TURN server, so friends behind strict routers can still connect.',
        pt: 'Servidor TURN próprio, para que amigos atrás de roteadores restritivos também consigam conectar.',
      },
      {
        en: "Tuned the guest stream: every frame at 50 fps, 2× resolution and about 5 Mbps per guest, up from the emulator's 0.9 Mbps cap.",
        pt: 'Transmissão ajustada para os convidados: todos os quadros a 50 fps, resolução 2× e cerca de 5 Mbps por convidado, contra o limite de 0,9 Mbps do emulador.',
      },
      {
        en: 'The game keeps running in a background tab, with automatic saves.',
        pt: 'O jogo continua rodando com a aba em segundo plano, com salvamento automático.',
      },
      {
        en: 'Caddy reverse proxy with authentication, Docker Compose services and automatic deploys on every push through Coolify.',
        pt: 'Proxy reverso Caddy com autenticação, serviços em Docker Compose e deploy automático a cada push pelo Coolify.',
      },
    ],
    stack: [
      { name: 'WebRTC', icon: siWebrtc },
      { name: 'EmulatorJS' },
      { name: 'Node.js', icon: siNodedotjs },
      { name: 'Socket.IO', icon: siSocketdotio },
      { name: 'coturn' },
      { name: 'Caddy', icon: siCaddy },
      { name: 'Docker', icon: siDocker },
      { name: 'Coolify', icon: siCoolify },
    ],
    isPrivate: true,
    media: [
      {
        type: 'image',
        src: '/projects/crash-bash/01-browser.webp',
        alt: {
          en: 'The game running inside the site, in a regular browser tab.',
          pt: 'O jogo rodando dentro do site, numa aba comum do navegador.',
        },
      },
      {
        type: 'image',
        src: '/projects/crash-bash/02-gameplay.webp',
        alt: {
          en: 'A four-player match in progress.',
          pt: 'Uma partida com quatro jogadores em andamento.',
        },
      },
      {
        type: 'image',
        src: '/projects/crash-bash/03-netplay-room.webp',
        alt: {
          en: 'A netplay room open and waiting for friends (1 of 4 players).',
          pt: 'Uma sala de netplay aberta, esperando os amigos (1 de 4 jogadores).',
        },
      },
      {
        type: 'image',
        src: '/projects/crash-bash/04-players.webp',
        alt: {
          en: 'Choosing how many players will join.',
          pt: 'Escolhendo quantos jogadores vão participar.',
        },
      },
      {
        type: 'image',
        src: '/projects/crash-bash/05-characters.webp',
        alt: { en: 'Character select.', pt: 'Seleção de personagens.' },
      },
      {
        type: 'image',
        src: '/projects/crash-bash/06-controls.webp',
        alt: {
          en: 'Custom keyboard mapping, with a diagram that updates as keys change.',
          pt: 'Mapeamento de teclas personalizado, com um diagrama que se atualiza a cada mudança.',
        },
      },
      // TODO: add your netplay clips here, for example:
      // {
      //   type: 'video',
      //   src: '/projects/crash-bash/netplay.mp4',
      //   poster: '/projects/crash-bash/02-gameplay.webp',
      //   alt: { en: 'Two friends playing online.', pt: 'Dois amigos jogando online.' },
      // },
    ],
  },
]

export const education: {
  years: string
  degree: Localized
  kind: Localized
  school: Localized
  note: Localized
}[] = [
  {
    years: '2023 — 2026',
    degree: { en: 'Systems Analysis and Development', pt: 'Análise e Desenvolvimento de Sistemas' },
    kind: { en: 'Undergraduate degree (Tecnólogo)', pt: 'Tecnólogo' },
    school: {
      en: 'UNESC — Universidade do Extremo Sul Catarinense',
      pt: 'UNESC — Universidade do Extremo Sul Catarinense',
    },
    note: {
      en: 'Where I formalized the move into software.',
      pt: 'Onde formalizei a mudança para o software.',
    },
  },
  {
    years: '2016 — 2023',
    degree: { en: 'Food Engineering', pt: 'Engenharia de Alimentos' },
    kind: { en: "Bachelor's degree", pt: 'Bacharelado' },
    school: {
      en: 'UFSC — Federal University of Santa Catarina',
      pt: 'UFSC — Universidade Federal de Santa Catarina',
    },
    note: {
      en: 'An engineering background in process design, experimentation and data analysis — the analytical base I brought into software.',
      pt: 'Uma base de engenharia em projeto de processos, experimentação e análise de dados — o raciocínio analítico que trouxe para o software.',
    },
  },
]

export const certificates: {
  name: string
  issuer: string
  summary: Localized
  issued: Localized
  expires: Localized
  verifyUrl?: string
}[] = [
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    summary: {
      en: 'Vendor-neutral certification covering threats, security architecture, operations and governance.',
      pt: 'Certificação independente de fornecedor que cobre ameaças, arquitetura de segurança, operações e governança.',
    },
    issued: { en: 'Jun 2026', pt: 'jun. 2026' },
    expires: { en: 'Jun 2029', pt: 'jun. 2029' },
    // TODO: paste your Credly / CompTIA verification link here to show the "Verify credential" button.
    verifyUrl: undefined,
  },
]
