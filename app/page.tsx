'use client';

import { useEffect, useState } from 'react';

const APP_URL = 'https://sentimi.netlify.app';

const navLinks = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Free', href: '#free' },
  { label: 'Premium', href: '#premium' },
  { label: 'FAQ', href: '#faq' },
] as const;

const feelLines = [
  'Você abre e vê a história de vocês tomando forma.',
  'Você lembra datas antes que virem cobrança.',
  'Você entende o clima antes de falar no impulso.',
  'Você guarda detalhes que viram cuidado depois.',
] as const;

const whyItMatters = [
  {
    title: 'Sem um lugar só de vocês',
    text: 'A rotina espalha lembranças entre foto, conversa, nota e promessa solta.',
  },
  {
    title: 'Datas chegam sem contexto',
    text: 'O que era para virar presença acaba parecendo correria de última hora.',
  },
  {
    title: 'Detalhes somem',
    text: 'Gostos, sinais e pequenos combinados desaparecem quando tudo depende da memória do dia.',
  },
  {
    title: 'O cuidado muda de tom',
    text: 'Sem ler o momento, até a boa intenção pode soar como cobrança.',
  },
] as const;

const freeEntryCards = [
  {
    title: 'Entre grátis',
    text: 'Sem cartão e sem pressão para começar a sentir o Sentimi por dentro.',
  },
  {
    title: 'Crie sua casa digital',
    text: 'Monte um lugar privado para o casal guardar o que merece permanecer vivo.',
  },
  {
    title: 'Guarde os primeiros momentos',
    text: 'Comece com memórias, datas e pequenos detalhes que já mudam a sensação de cuidado.',
  },
  {
    title: 'Explore cuidado, memórias e datas',
    text: 'Veja valor real antes de decidir se querem liberar a experiência completa no Premium.',
  },
] as const;

const experienceBlocks = [
  {
    title: 'Casa do Relacionamento',
    text: 'O painel onde a história, os sinais e o vínculo aparecem com cara de app vivo.',
    note: 'Tudo o que importa deixa de ficar solto.',
    accent: 'pink',
    size: 'wide',
    variant: 'home',
    badge: 'Painel principal',
    tags: ['história viva', 'vínculo ativo'],
    rows: ['Próxima data pronta', 'Última memória salva', 'Cuidado em destaque'],
    stats: [
      { label: 'Memórias', value: '18' },
      { label: 'Datas', value: '07' },
      { label: 'Status', value: 'Conectados' },
    ],
  },
  {
    title: 'Casa do Cuidado',
    text: 'Antes de cobrar, vocês conseguem ler o dia e escolher melhor o jeito de falar.',
    note: 'Menos impulso. Mais presença emocional.',
    accent: 'cyan',
    size: 'standard',
    variant: 'care',
    badge: 'Clima do dia',
    tags: ['temperatura', 'ciclo'],
    rows: ['Energia sensível', 'Melhor ouvir', 'Cuidado sugerido'],
    stats: [
      { label: 'Clima', value: 'Baixo ruído' },
      { label: 'Leitura', value: 'Agora' },
      { label: 'Tom', value: 'Mais leve' },
    ],
  },
  {
    title: 'Memórias',
    text: 'As lembranças deixam de parecer arquivo perdido e viram capítulo bonito de revisitar.',
    note: 'A história de vocês começa a ter forma.',
    accent: 'purple',
    size: 'standard',
    variant: 'memory',
    badge: 'Linha viva',
    tags: ['fotos + texto', 'capítulos'],
    rows: ['Maio: 3 memórias', 'Junho: 2 memórias', 'Julho: 1 memória'],
    stats: [
      { label: 'Capítulos', value: '12' },
      { label: 'Revisitas', value: 'Fáceis' },
      { label: 'Sensação', value: 'Filme' },
    ],
  },
  {
    title: 'Datas importantes',
    text: 'Lembretes, promessas e marcos ficam visíveis antes que o cotidiano passe por cima.',
    note: 'O que merece cuidado não compete com o caos do dia.',
    accent: 'blue',
    size: 'wide',
    variant: 'dates',
    badge: 'Agenda afetiva',
    tags: ['próximas datas', 'alertas'],
    rows: ['Jantar do casal', 'Aniversário lembrado', 'Promessa marcada'],
    stats: [
      { label: 'Próxima', value: '05 Jul' },
      { label: 'Alertas', value: 'Ativos' },
      { label: 'Foco', value: 'Presença' },
    ],
  },
  {
    title: 'Tudo sobre meu amor',
    text: 'Gostos, detalhes e pistas importantes ficam salvos para virar cuidado na hora certa.',
    note: 'Surpresa boa costuma nascer de detalhe bem guardado.',
    accent: 'green',
    size: 'standard',
    variant: 'love',
    badge: 'Detalhes que contam',
    tags: ['gostos', 'surpresas'],
    rows: ['Café preferido', 'Flores favoritas', 'Jeito melhor de acolher'],
    stats: [
      { label: 'Detalhes', value: '26' },
      { label: 'Ideias', value: 'Sempre à mão' },
      { label: 'Cuidado', value: 'Constante' },
    ],
  },
  {
    title: 'Biblioteca emocional',
    text: 'Conteúdos e reflexões para ampliar repertório sem transformar o relacionamento em teoria fria.',
    note: 'Mais clareza para viver melhor o vínculo.',
    accent: 'violet',
    size: 'standard',
    variant: 'library',
    badge: 'Base emocional',
    tags: ['comunicação', 'cuidado'],
    rows: ['Leitura do momento', 'Conversa melhor', 'Mais compreensão'],
    stats: [
      { label: 'Leituras', value: 'Selecionadas' },
      { label: 'Reflexões', value: 'Práticas' },
      { label: 'Uso', value: 'No cotidiano' },
    ],
  },
] as const;

const storyChapters = [
  {
    month: 'Maio',
    title: '3 memórias',
    text: 'Primeiros capítulos do mês salvos com foto, contexto e sentimento.',
    side: 'left',
    photo: 'one',
  },
  {
    month: 'Junho',
    title: '2 memórias',
    text: 'Uma noite, um cuidado e uma promessa que mereceram continuar vivas.',
    side: 'right',
    photo: 'two',
  },
  {
    month: 'Julho',
    title: '1 memória',
    text: 'O tipo de detalhe que seria esquecido sem um lugar para existir de novo.',
    side: 'left',
    photo: 'three',
  },
] as const;

const careCards = [
  {
    title: 'Temperatura Emocional',
    text: 'Perceba se o dia pede escuta, leveza ou espaço antes de insistir na conversa.',
  },
  {
    title: 'Cuidado do Ciclo',
    text: 'Registre fases sensíveis e transforme contexto em presença mais respeitosa.',
  },
  {
    title: 'Frase do dia',
    text: 'Pequenos lembretes que ajudam o casal a voltar para o tipo de amor que quer praticar.',
  },
  {
    title: 'Clima do parceiro',
    text: 'Menos adivinhação. Mais leitura real para escolher o melhor momento de se aproximar.',
  },
] as const;

const valueReasons = [
  {
    title: 'Uma data lembrada no momento certo',
    text: 'Vale mais do que correr atrás depois que o dia já passou.',
  },
  {
    title: 'Uma memória que não fica perdida',
    text: 'Porque história importante merece contexto, não esquecimento.',
  },
  {
    title: 'Um cuidado antes da cobrança',
    text: 'Muitas conversas melhoram quando o momento é respeitado.',
  },
  {
    title: 'Um detalhe salvo para surpreender',
    text: 'Presença de verdade costuma morar nos pequenos gestos.',
  },
  {
    title: 'Uma biblioteca para entender melhor',
    text: 'Mais repertório emocional para viver o relacionamento com mais consciência.',
  },
  {
    title: 'Uma casa digital que cresce com vocês',
    text: 'O espaço acompanha a história em vez de deixar tudo espalhado.',
  },
] as const;

const trustPoints = [
  'Comece sem cartão',
  'Privacidade como prioridade',
  'Feito para celular',
  'Experiência contínua',
  'Sem promessa milagrosa',
  'Produto para casais reais',
] as const;

const faqs = [
  {
    question: 'Posso começar sem pagar?',
    answer:
      'Sim. A entrada do Sentimi foi pensada para ser leve: você entra grátis, sente a proposta e só pensa em Premium se a experiência fizer sentido para vocês.',
  },
  {
    question: 'O que existe no modo grátis?',
    answer:
      'O modo grátis é a porta de entrada para criar a casa digital, fazer os primeiros registros e entender como memórias, datas e cuidado funcionam juntos no app.',
  },
  {
    question: 'Quanto custa o Premium?',
    answer:
      'O Premium custa R$19,90 e libera a experiência completa, com mais espaço, mais recursos e mais profundidade para a história do casal.',
  },
  {
    question: 'O Premium é obrigatório?',
    answer:
      'Não. O Free continua sendo a entrada principal. O Premium entra só quando vocês quiserem transformar o Sentimi no espaço completo da relação.',
  },
  {
    question: 'Preciso usar com meu parceiro desde o início?',
    answer:
      'Não. Você pode começar sozinho, sentir a experiência e depois decidir como quer viver isso com a outra pessoa.',
  },
  {
    question: 'O Sentimi é privado?',
    answer:
      'A proposta do Sentimi é ser um espaço privado do relacionamento, com foco em discrição, cuidado e sensação de casa digital do casal.',
  },
  {
    question: 'Funciona bem no celular?',
    answer:
      'Sim. A experiência foi pensada para celular desde o começo, para ser gostosa de abrir na rotina e não parecer uma ferramenta pesada.',
  },
  {
    question: 'Posso guardar fotos e memórias?',
    answer:
      'Sim. Memórias visuais fazem parte da proposta do Sentimi justamente para a história não ficar perdida entre arquivos soltos.',
  },
  {
    question: 'O app ajuda a lembrar datas importantes?',
    answer:
      'Sim. O Sentimi organiza datas e lembretes para que o cuidado apareça antes do esquecimento, não depois.',
  },
  {
    question: 'Posso assinar depois?',
    answer:
      'Sim. Essa é a ideia. Você entra, sente o valor e ativa o Premium quando quiser viver tudo o que a casa digital pode liberar.',
  },
] as const;

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionIntroProps) {
  return (
    <div
      className={`section-intro${align === 'center' ? ' section-intro--center' : ''}`}
      data-reveal
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function ActionGroup({ centered = false }: { centered?: boolean }) {
  return (
    <div className={`action-group${centered ? ' action-group--center' : ''}`}>
      <a className="button button--primary" href={APP_URL}>
        Começar grátis
      </a>
      <a className="button button--secondary" href="#premium">
        Ver Premium
      </a>
    </div>
  );
}

function ShowcaseVisual({
  item,
}: {
  item: (typeof experienceBlocks)[number];
}) {
  if (item.variant === 'home') {
    return (
      <div className="showcase-visual showcase-visual--home" aria-hidden="true">
        <div className="showcase-visual__aurora" />
        <div className="showcase-visual__header">
          <span>{item.badge}</span>
          <strong>sentimi</strong>
        </div>
        <div className="showcase-visual__hero">
          <div className="showcase-visual__hero-copy">
            <p>Casa do Relacionamento</p>
            <strong>O que vocês vivem continua presente.</strong>
          </div>
          <div className="showcase-couple">
            <span />
            <span />
            <b>Conectados</b>
          </div>
        </div>
        <div className="showcase-rows">
          {item.rows.map((row) => (
            <div key={row} className="showcase-row">
              <span className="showcase-row__dot" />
              <p>{row}</p>
            </div>
          ))}
        </div>
        <div className="showcase-stats">
          {item.stats.map((stat) => (
            <div key={stat.label} className="showcase-stat">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (item.variant === 'care') {
    return (
      <div className="showcase-visual showcase-visual--care" aria-hidden="true">
        <div className="showcase-visual__header">
          <span>{item.badge}</span>
          <strong>Hoje</strong>
        </div>
        <div className="care-dial">
          <div className="care-dial__ring" />
          <div className="care-dial__core">
            <span>clima</span>
            <strong>sensível</strong>
          </div>
        </div>
        <div className="showcase-tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="showcase-stats showcase-stats--two">
          {item.stats.map((stat) => (
            <div key={stat.label} className="showcase-stat">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (item.variant === 'memory') {
    return (
      <div className="showcase-visual showcase-visual--memory" aria-hidden="true">
        <div className="showcase-visual__header">
          <span>{item.badge}</span>
          <strong>Arquivo vivo</strong>
        </div>
        <div className="memory-stack">
          <div className="memory-stack__card memory-stack__card--front">
            <span>Maio</span>
            <strong>3 memórias</strong>
          </div>
          <div className="memory-stack__card memory-stack__card--mid">
            <span>Junho</span>
            <strong>2 memórias</strong>
          </div>
          <div className="memory-stack__card memory-stack__card--back">
            <span>Julho</span>
            <strong>1 memória</strong>
          </div>
        </div>
        <div className="showcase-stats">
          {item.stats.map((stat) => (
            <div key={stat.label} className="showcase-stat">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (item.variant === 'dates') {
    return (
      <div className="showcase-visual showcase-visual--dates" aria-hidden="true">
        <div className="showcase-visual__header">
          <span>{item.badge}</span>
          <strong>Agenda afetiva</strong>
        </div>
        <div className="date-lane">
          {item.rows.map((row, index) => (
            <div key={row} className="date-lane__item">
              <span>{`0${index + 1}`}</span>
              <p>{row}</p>
            </div>
          ))}
        </div>
        <div className="date-banner">
          <b>Próxima lembrança</b>
          <strong>05 Jul • noite do casal</strong>
        </div>
        <div className="showcase-stats">
          {item.stats.map((stat) => (
            <div key={stat.label} className="showcase-stat">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (item.variant === 'love') {
    return (
      <div className="showcase-visual showcase-visual--love" aria-hidden="true">
        <div className="showcase-visual__header">
          <span>{item.badge}</span>
          <strong>Favoritos</strong>
        </div>
        <div className="love-list">
          {item.rows.map((row) => (
            <div key={row} className="love-list__item">
              <span className="love-list__bullet" />
              <p>{row}</p>
            </div>
          ))}
        </div>
        <div className="love-pill">surpresa fácil de preparar</div>
        <div className="showcase-stats">
          {item.stats.map((stat) => (
            <div key={stat.label} className="showcase-stat">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="showcase-visual showcase-visual--library" aria-hidden="true">
      <div className="showcase-visual__header">
        <span>{item.badge}</span>
        <strong>Biblioteca</strong>
      </div>
      <div className="library-grid">
        <article>
          <span>comunicação</span>
          <strong>Como ouvir antes de reagir</strong>
        </article>
        <article>
          <span>presença</span>
          <strong>Pequenos gestos que diminuem ruído</strong>
        </article>
      </div>
      <div className="showcase-tags">
        {item.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="showcase-stats">
        {item.stats.map((stat) => (
          <div key={stat.label} className="showcase-stat">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    );
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    if (prefersReducedMotion.matches) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const closeMenuOnResize = () => {
      if (window.innerWidth >= 1100) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeMenuOnResize);
    return () => window.removeEventListener('resize', closeMenuOnResize);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`page-shell${menuOpen ? ' menu-open' : ''}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <span className="topbar__dot" aria-hidden="true" />
          <p>Comece grátis. Sinta o Sentimi. Premium completo por R$19,90.</p>
        </div>
      </div>

      <header className="site-header">
        <div className="container header__inner">
          <a className="brand" href="#inicio" aria-label="Sentimi, voltar ao início">
            <span className="brand__mark" aria-hidden="true" />
            <span className="brand__text">Sentimi</span>
          </a>

          <button
            type="button"
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="primary-navigation"
            className={`primary-nav${menuOpen ? ' is-open' : ''}`}
            aria-label="Navegação principal"
          >
            <div className="primary-nav__links">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="primary-nav__link"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              className="button button--primary button--small header__cta"
              href={APP_URL}
              onClick={closeMenu}
            >
              Começar grátis
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="section hero" id="inicio">
          <div className="container hero__grid">
            <div className="hero__copy" data-reveal>
              <span className="eyebrow">Casa digital do relacionamento</span>
              <h1>Seu relacionamento merece um lugar que não se perde na rotina.</h1>
              <p className="hero__lead">
                Memórias, datas, cuidado emocional e detalhes importantes reunidos
                em uma casa digital privada para o casal. Entre grátis, sinta o
                Sentimi e ative o Premium quando quiser viver tudo.
              </p>

              <ActionGroup />

              <p className="hero__microcopy">
                Sem cartão para começar • Privado para o casal • Premium por
                R$19,90
              </p>
            </div>

            <div className="hero__visual" data-reveal>
              <div className="hero-orbit hero-orbit--one">
                <span className="hero-orbit__label">Temperatura Emocional</span>
                <strong>Leia o momento antes da conversa.</strong>
              </div>
              <div className="hero-orbit hero-orbit--two">
                <span className="hero-orbit__label">Próxima data</span>
                <strong>O cuidado não chega atrasado.</strong>
              </div>
              <div className="hero-orbit hero-orbit--three">
                <span className="hero-orbit__label">Biblioteca emocional</span>
                <strong>Mais clareza para amar melhor.</strong>
              </div>
              <div className="hero-orbit hero-orbit--four">
                <span className="hero-orbit__label">Planeta da História</span>
                <strong>Uma jornada viva para revisitar juntos.</strong>
              </div>

              <div className="hero-device">
                <div className="hero-device__aurora" aria-hidden="true" />
                <div className="hero-device__top">
                  <span>sentimi</span>
                  <strong>Conectados</strong>
                </div>

                <div className="hero-device__headline">
                  <h2>Casa do Relacionamento</h2>
                  <p>Antes de cobrar, entenda o clima do coração.</p>
                </div>

                <div className="hero-couple-card">
                  <div className="hero-couple-card__avatars" aria-hidden="true">
                    <span />
                    <span />
                  </div>
                  <div>
                    <strong>Casal conectado</strong>
                    <p>Um lugar privado para guardar cuidado, memória e presença.</p>
                  </div>
                  <span className="status-pill">Conectados</span>
                </div>

                <div className="hero-highlight-card">
                  <strong>Vocês já guardaram memórias especiais</strong>
                  <p>Quando a história ganha lugar, o vínculo também ganha forma.</p>
                </div>

                <div className="hero-detail-list" aria-label="Resumo do Sentimi">
                  <div className="hero-detail-line">
                    <span>Próxima data</span>
                    <strong>05 Jul • noite do casal</strong>
                  </div>
                  <div className="hero-detail-line">
                    <span>Última memória</span>
                    <strong>Junho • cuidado que marcou</strong>
                  </div>
                </div>

                <a className="button button--primary button--full" href={APP_URL}>
                  Ver memórias
                </a>

                <div className="hero-story-card">
                  <div className="hero-story-card__copy">
                    <span className="eyebrow eyebrow--small">Nossa História</span>
                    <p>A casa onde o relacionamento continua vivo.</p>
                  </div>
                  <div className="hero-story-card__stats">
                    <div>
                      <span>Memórias</span>
                      <strong>18</strong>
                    </div>
                    <div>
                      <span>Datas</span>
                      <strong>07</strong>
                    </div>
                    <div>
                      <span>Vínculo ativo</span>
                      <strong>Sim</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section feeling-section">
          <div className="container">
            <div className="feeling-panel" data-reveal>
              <div className="feeling-panel__intro">
                <span className="eyebrow">O que você sente quando usa</span>
                <h2>O Sentimi não começa cobrando. Ele começa criando vontade de cuidar.</h2>
              </div>

              <div className="feeling-panel__list">
                {feelLines.map((line, index) => (
                  <div key={line} className="feeling-line">
                    <span>{`0${index + 1}`}</span>
                    <p>{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section impact-section" id="porque-importa">
          <div className="container">
            <div className="impact-shell" data-reveal>
              <div className="impact-shell__intro">
                <span className="eyebrow">Por que isso importa</span>
                <h2>Quase nunca falta sentimento. Falta um lugar que segure os detalhes.</h2>
                <p>
                  Quando a história fica espalhada, a rotina apaga sinais
                  importantes. O Sentimi junta tudo em um espaço bonito, privado e
                  fácil de abrir.
                </p>
              </div>

              <div className="impact-rail">
                {whyItMatters.map((item) => (
                  <article key={item.title} className="impact-card">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>

              <div className="impact-turn">
                <strong>O relacionamento não precisa disputar atenção com o resto da rotina.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section free-entry-section" id="como-funciona">
          <div className="container">
            <SectionIntro
              eyebrow="Entre grátis e sinta"
              title="Comece sem medo. Decida sobre o Premium só depois de sentir valor."
              description="O Free é a entrada principal: ele abre a casa digital, deixa vocês guardarem os primeiros momentos e mostra por que o Sentimi faz sentido antes de cobrar qualquer passo."
            />

            <div className="free-path">
              {freeEntryCards.map((item, index) => (
                <article key={item.title} className="free-step" data-reveal>
                  <span className="free-step__index">{`0${index + 1}`}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="free-note" data-reveal>
              <strong>Depois, vocês decidem se querem liberar a experiência completa.</strong>
            </div>

            <div className="section-actions" data-reveal>
              <ActionGroup centered />
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experiencia">
          <div className="container">
            <SectionIntro
              eyebrow="A experiência Sentimi"
              title="Mais do que recursos: um app que parece vivo porque foi desenhado para cuidar."
              description="Cada espaço do Sentimi tem uma função emocional real. O resultado não é uma lista de ferramentas, mas uma vitrine do relacionamento acontecendo com mais beleza, contexto e presença."
            />

            <div className="showcase-grid">
              {experienceBlocks.map((item) => (
                <article
                  key={item.title}
                  className={`showcase-card showcase-card--${item.size}`}
                  data-accent={item.accent}
                  data-reveal
                >
                  <div className="showcase-card__copy">
                    <span className="showcase-card__badge">{item.badge}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span className="showcase-card__note">{item.note}</span>
                  </div>

                  <ShowcaseVisual item={item} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section story-section">
          <div className="container story-section__grid">
            <div className="story-section__copy" data-reveal>
              <SectionIntro
                eyebrow="Reviva a história como um filme"
                title="Quando as memórias entram na casa digital, o ano de vocês ganha capítulos."
                description="O Sentimi transforma registros em uma linha viva que dá vontade de rever. Não como galeria aleatória, mas como cenas importantes da história de vocês."
              />

              <div className="story-quote">
                <strong>As memórias deixam de ficar soltas e começam a parecer um filme do casal.</strong>
              </div>
            </div>

            <div className="story-device" data-reveal>
              <button type="button" className="story-device__nav story-device__nav--left">
                <span aria-hidden="true">‹</span>
                <span className="sr-only">Capítulo anterior</span>
              </button>
              <button type="button" className="story-device__nav story-device__nav--right">
                <span aria-hidden="true">›</span>
                <span className="sr-only">Próximo capítulo</span>
              </button>

              <div className="story-device__frame">
                <div className="story-device__top">
                  <span>sentimi</span>
                  <strong>Capítulos do ano</strong>
                </div>

                <div className="story-device__chips" aria-hidden="true">
                  <span>linha viva</span>
                  <span>story mode</span>
                </div>

                <div className="story-timeline">
                  {storyChapters.map((item) => (
                    <div
                      key={item.month}
                      className={`story-chapter story-chapter--${item.side}`}
                    >
                      <span className="story-month">{item.month}</span>
                      <article className="polaroid-card">
                        <div className={`fake-photo fake-photo--${item.photo}`} />
                        <strong>{item.title}</strong>
                        <p>{item.text}</p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section planet-section">
          <div className="container">
            <div className="planet-card" data-reveal>
              <div className="planet-card__copy">
                <span className="eyebrow">Planeta da História</span>
                <h2>As memórias viram pontos vivos.</h2>
                <p>
                  Em vez de uma lista abstrata, o Sentimi mostra a história como um
                  mapa emocional bonito, navegável e desejável de revisitar.
                </p>

                <div className="planet-card__seals">
                  <span>Mapa emocional</span>
                  <span>Linha viva</span>
                </div>
              </div>

              <div className="planet-map" aria-hidden="true">
                <div className="planet-map__title">
                  <strong>Planeta da História</strong>
                  <p>Momentos importantes conectados pela jornada do casal.</p>
                </div>

                <div className="planet-map__core">
                  <div className="planet-map__planet" />
                  <div className="planet-map__tree" />
                </div>

                <div className="planet-map__orbit planet-map__orbit--one" />
                <div className="planet-map__orbit planet-map__orbit--two" />
                <div className="planet-map__orbit planet-map__orbit--three" />
                <div className="planet-map__orbit planet-map__orbit--four" />

                <article className="memory-bubble memory-bubble--one">
                  <span>Momento</span>
                  <strong>Primeira viagem</strong>
                </article>
                <article className="memory-bubble memory-bubble--two">
                  <span>Momento</span>
                  <strong>Cuidado que marcou</strong>
                </article>
                <article className="memory-bubble memory-bubble--three">
                  <span>Momento</span>
                  <strong>Promessa lembrada</strong>
                </article>
                <article className="memory-bubble memory-bubble--four">
                  <span>Momento</span>
                  <strong>Capítulo favorito</strong>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section care-section">
          <div className="container care-section__grid">
            <div className="care-section__copy" data-reveal>
              <SectionIntro
                eyebrow="Cuidado antes da cobrança"
                title="Antes de cobrar, entenda o coração."
                description="O Sentimi ajuda o casal a perceber o clima do dia, registrar cuidado e escolher melhor o momento de conversar."
              />

              <p className="care-section__quote">
                Às vezes o problema não é a conversa. É o momento.
              </p>
            </div>

            <div className="care-grid">
              {careCards.map((item) => (
                <article key={item.title} className="care-card" data-reveal>
                  <div className="care-card__icon" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="free">
          <div className="container">
            <SectionIntro
              align="center"
              eyebrow="Free vs Premium"
              title="Entre grátis. Assine só quando quiser viver a experiência completa."
              description="O Sentimi deixa você começar sem pressão. Quando a casa digital fizer sentido para vocês, o Premium libera mais espaço, mais recursos e mais cuidado."
            />

            <div className="pricing-grid">
              <article className="pricing-card pricing-card--free" data-reveal>
                <div className="pricing-card__top">
                  <span className="pricing-card__label">Free</span>
                  <strong>R$0</strong>
                </div>
                <h3>Comece sem pagar</h3>
                <p className="pricing-card__description">
                  Para conhecer o Sentimi e sentir a experiência.
                </p>
                <ul className="pricing-list">
                  <li>entrar sem cartão</li>
                  <li>criar sua casa digital</li>
                  <li>testar os primeiros registros</li>
                  <li>conhecer memórias e datas</li>
                  <li>sentir o valor do app</li>
                </ul>
                <a className="button button--secondary button--full" href={APP_URL}>
                  Começar grátis
                </a>
              </article>

              <article className="pricing-card pricing-card--premium" id="premium" data-reveal>
                <div className="pricing-card__spotlight" aria-hidden="true" />
                <div className="pricing-card__top">
                  <span className="pricing-card__label pricing-card__label--premium">
                    Melhor para casais
                  </span>
                  <strong>R$19,90</strong>
                </div>
                <h3>Experiência completa</h3>
                <p className="pricing-card__description">
                  Para transformar o Sentimi no espaço completo da história de
                  vocês.
                </p>
                <p className="pricing-card__hook">Menos esquecimento. Mais presença.</p>
                <ul className="pricing-list">
                  <li>mais memórias</li>
                  <li>mais datas</li>
                  <li>lembretes</li>
                  <li>biblioteca completa</li>
                  <li>recursos do casal</li>
                  <li>experiência completa</li>
                  <li>mais espaço para a história</li>
                </ul>
                <a className="button button--primary button--full" href={APP_URL}>
                  Ativar Premium
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section value-section">
          <div className="container">
            <SectionIntro
              align="center"
              eyebrow="Por que R$19,90 faz sentido"
              title="R$19,90 para cuidar melhor do que não tem preço."
              description="Não é sobre pagar por telas. É sobre ter um lugar para lembrar, cuidar e manter viva a história que vocês estão construindo."
            />

            <div className="value-grid">
              {valueReasons.map((item, index) => (
                <article key={item.title} className="value-card" data-reveal>
                  <span className="value-card__index">{`0${index + 1}`}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section trust-section">
          <div className="container">
            <SectionIntro
              align="center"
              eyebrow="Confiança"
              title="Uma experiência bonita, direta e feita para durar na rotina."
              description="Sem promessa milagrosa. Sem pressão artificial. Só uma casa digital pensada para casais reais."
            />

            <div className="trust-strip">
              {trustPoints.map((item) => (
                <article key={item} className="trust-pill" data-reveal>
                  <span className="trust-pill__dot" aria-hidden="true" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-section__grid">
            <div className="faq-section__intro" data-reveal>
              <SectionIntro
                eyebrow="FAQ"
                title="O que costuma passar pela cabeça antes de entrar?"
                description="Respostas humanas, curtas e honestas para você decidir com mais tranquilidade."
              />
            </div>

            <div className="faq-list">
              {faqs.map((item, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    key={item.question}
                    className={`faq-item${isOpen ? ' is-open' : ''}`}
                    data-reveal
                  >
                    <button
                      type="button"
                      className="faq-item__button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-trigger-${index}`}
                      onClick={() =>
                        setOpenFaq((current) => (current === index ? null : index))
                      }
                    >
                      <span>{item.question}</span>
                      <span className="faq-item__icon" aria-hidden="true" />
                    </button>

                    <div
                      id={`faq-panel-${index}`}
                      className="faq-item__panel"
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                    >
                      <div className="faq-item__panel-inner">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section final-cta">
          <div className="container">
            <div className="final-cta__card" data-reveal>
              <span className="eyebrow">Último passo</span>
              <h2>
                A história de vocês já existe. O Sentimi só dá um lugar para ela
                continuar viva.
              </h2>
              <p>
                Entre grátis, crie sua casa digital e descubra como memórias,
                datas e cuidado podem virar uma experiência viva para o casal.
              </p>
              <ActionGroup centered />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__grid">
          <div className="site-footer__brand">
            <a className="brand brand--footer" href="#inicio">
              <span className="brand__mark" aria-hidden="true" />
              <span className="brand__text">Sentimi</span>
            </a>
            <p>A casa digital onde o relacionamento continua vivo.</p>
          </div>

          <div className="site-footer__links">
            <a href="#faq">Privacidade</a>
            <a href="#faq">Termos</a>
            <a href={APP_URL}>Contato</a>
            <a href="#premium">Premium</a>
          </div>

          <p className="site-footer__meta">{`© ${new Date().getFullYear()} Sentimi`}</p>
        </div>
      </footer>
    </div>
  );
}
