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

const entryLines = [
  'Você abre e já vê a história de vocês viva.',
  'Você lembra datas antes que virem cobrança.',
  'Você entende o clima antes de falar no impulso.',
  'Você guarda detalhes que viram cuidado depois.',
] as const;

const entrySteps = [
  {
    title: 'Entre grátis',
    text: 'Sem cartão e sem risco para sentir o app por dentro.',
  },
  {
    title: 'Crie sua casa',
    text: 'Monte o espaço privado do relacionamento em poucos toques.',
  },
  {
    title: 'Guarde os primeiros momentos',
    text: 'Memórias, datas e detalhes já começam a fazer sentido juntos.',
  },
  {
    title: 'Decida depois pelo Premium',
    text: 'O upgrade entra só quando vocês quiserem viver tudo.',
  },
] as const;

const reasonBand = [
  'Sem perder detalhes',
  'Sem esquecer datas',
  'Sem falar no pior momento',
  'Sem transformar cuidado em cobrança',
] as const;

const careStates = [
  'Muito bem',
  'Bem',
  'Normal',
  'Sensível',
  'Triste',
  'Estressado',
  'Irritado',
  'Carente',
  'Distante',
  'Carinho',
  'Espaço',
  'Conversar',
] as const;

const careSupports = [
  'Carinho',
  'Atenção',
  'Paciência',
  'Espaço',
  'Conversa',
  'Silêncio',
  'Motivação',
  'Abraço',
] as const;

const collectionTiles = [
  { label: 'Memórias', note: 'Momentos guardados', tone: 'pink' },
  { label: 'Datas', note: 'Lembretes importantes', tone: 'blue' },
  { label: 'Tudo sobre meu amor', note: 'Detalhes privados', tone: 'rose' },
  { label: 'Biblioteca', note: 'Guias emocionais', tone: 'cyan' },
] as const;

const memoryFilters = ['Todas 6', 'Recentes 3', 'Com imagem 4'] as const;

const memoryCards = [
  { title: 'Nuestro encuentro', date: '19/07/2025' },
  { title: 'mi lugar feliz', date: '12/06/2025' },
] as const;

const timelineMonths = [
  {
    month: 'Maio 2025',
    count: '3 memórias',
    label: 'viagem',
    side: 'right',
  },
  {
    month: 'Junho 2025',
    count: '2 memórias',
    label: 'Amor mio',
    side: 'left',
  },
  {
    month: 'Julho 2025',
    count: '1 memória',
    label: 'Nuestro encuentro',
    side: 'right',
  },
] as const;

const chapterCards = [
  { month: 'Maio', count: '3 memórias' },
  { month: 'Junho', count: '2 memórias' },
  { month: 'Julho', count: '1 memória' },
] as const;

const careSellingPoints = [
  'Temperatura Emocional',
  'Cuidado do Ciclo',
  'Frase do dia',
  'Clima do parceiro',
] as const;

const premiumReasons = [
  'Uma data lembrada no momento certo',
  'Uma memória que não fica perdida',
  'Um cuidado antes da cobrança',
  'Um detalhe salvo para surpreender',
  'Uma biblioteca para entender melhor',
  'Uma casa digital que cresce com vocês',
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
      'Sim. Você entra grátis, sente a experiência e só pensa em Premium quando o Sentimi fizer sentido para vocês.',
  },
  {
    question: 'O que o Free já libera?',
    answer:
      'A entrada no app, a criação da casa digital e os primeiros passos em memórias, datas e cuidado.',
  },
  {
    question: 'Quanto custa o Premium?',
    answer:
      'O Premium custa R$19,90 e libera a experiência completa do Sentimi.',
  },
  {
    question: 'Preciso colocar cartão para começar?',
    answer: 'Não. A ideia é entrar sem medo e decidir depois.',
  },
  {
    question: 'O Sentimi funciona bem no celular?',
    answer:
      'Sim. O produto foi pensado com cara e ritmo de app mobile desde o começo.',
  },
  {
    question: 'O app ajuda com datas importantes?',
    answer:
      'Sim. Datas, lembretes e próximos marcos ficam visíveis antes que a rotina passe por cima.',
  },
  {
    question: 'Posso guardar memórias e detalhes privados?',
    answer:
      'Sim. Essa é uma das bases da proposta: ter um espaço privado para o que não deveria se perder.',
  },
  {
    question: 'Posso assinar depois?',
    answer:
      'Sim. O Free é a porta de entrada. O Premium entra quando vocês quiserem viver tudo.',
  },
] as const;

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
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
      {description ? <p>{description}</p> : null}
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

function SelectorBar({ label }: { label: string }) {
  return (
    <div className="selector-bar" aria-hidden="true">
      <span className="selector-bar__menu">
        <span />
        <span />
        <span />
      </span>
      <div className="selector-bar__pill">
        <span className="selector-bar__dot" />
        <strong>{label}</strong>
      </div>
      <span className="selector-bar__chevron" />
    </div>
  );
}

function BottomNav({ active }: { active: string }) {
  const tabs = [
    { label: 'Home', icon: 'home' },
    { label: 'Cuidado', icon: 'care' },
    { label: 'Memórias', icon: 'memory' },
    { label: 'Perfil', icon: 'profile' },
  ] as const;

  return (
    <div className="bottom-tabs" aria-hidden="true">
      {tabs.map((tab) => (
        <div
          key={tab.label}
          className={`bottom-tabs__item${active === tab.label ? ' is-active' : ''}`}
        >
          <span className={`bottom-tabs__icon bottom-tabs__icon--${tab.icon}`} />
          <span>{tab.label}</span>
        </div>
      ))}
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
              <span className="eyebrow">Sentimi real por dentro</span>
              <h1>A casa onde o relacionamento continua vivo.</h1>
              <p className="hero__lead">
                Memórias, datas, cuidado emocional e detalhes importantes em um
                app privado para o casal. Comece grátis. Ative o Premium quando
                quiser viver tudo.
              </p>

              <ActionGroup />

              <p className="hero__microcopy">
                Sem cartão para começar • Privado para o casal • Premium por
                R$19,90
              </p>
            </div>

            <div className="hero__visual" data-reveal>
              <div className="hero-badge hero-badge--free">Entrada sem risco</div>
              <div className="hero-badge hero-badge--premium">Premium por R$19,90</div>

              <div className="hero-stage">
                <SelectorBar label="Casa" />

                <div className="hero-app">
                  <div className="hero-app__brand">sentimi</div>
                  <h2>Casa do Relacionamento</h2>
                  <p>Antes de cobrar, entenda o clima do coração.</p>

                  <article className="hero-card hero-card--connection">
                    <div className="hero-card__icon hero-card__icon--pink" />
                    <div>
                      <strong>ana + joao</strong>
                      <p>Seu espaço continua vivo agora.</p>
                    </div>
                    <span className="status-pill">Conectados</span>
                  </article>

                  <article className="hero-card hero-card--memory">
                    <div className="hero-card__header">
                      <strong>Vocês já guardaram 2 memórias especiais</strong>
                    </div>

                    <div className="hero-card__rows">
                      <div className="hero-row">
                        <span>Próxima data</span>
                        <strong>30/06/2026</strong>
                      </div>
                      <div className="hero-row">
                        <span>Última memória</span>
                        <strong>ontem</strong>
                      </div>
                    </div>

                    <a className="button button--primary button--full" href={APP_URL}>
                      Ver memórias
                    </a>
                  </article>

                  <div className="hero-quick-grid">
                    <article className="hero-quick-card">
                      <span className="hero-quick-card__icon hero-quick-card__icon--camera" />
                      <strong>Criar memória</strong>
                    </article>
                    <article className="hero-quick-card">
                      <span className="hero-quick-card__icon hero-quick-card__icon--calendar" />
                      <strong>Criar data</strong>
                    </article>
                    <article className="hero-quick-card">
                      <span className="hero-quick-card__icon hero-quick-card__icon--gallery" />
                      <strong>Memórias</strong>
                    </article>
                    <article className="hero-quick-card">
                      <span className="hero-quick-card__icon hero-quick-card__icon--heart" />
                      <strong>Datas</strong>
                    </article>
                  </div>

                  <article className="hero-story-panel">
                    <div className="hero-story-panel__top">
                      <strong>Nossa História</strong>
                      <span>Abrir</span>
                    </div>
                    <div className="hero-story-panel__stats">
                      <div>
                        <span>Memórias</span>
                        <strong>2</strong>
                      </div>
                      <div>
                        <span>Datas</span>
                        <strong>2</strong>
                      </div>
                      <div>
                        <span>Vínculo</span>
                        <strong>Ativo</strong>
                      </div>
                    </div>
                  </article>

                  <BottomNav active="Home" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section entry-section" id="como-funciona">
          <div className="container">
            <div className="entry-ribbon" data-reveal>
              <div className="entry-ribbon__copy">
                <span className="eyebrow">Comece grátis</span>
                <h2>O Sentimi não começa cobrando. Começa fazendo vocês quererem ficar.</h2>
              </div>

              <div className="entry-ribbon__lines">
                {entryLines.map((line, index) => (
                  <div key={line} className="entry-line">
                    <span>{`0${index + 1}`}</span>
                    <p>{line}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="entry-grid">
              {entrySteps.map((item) => (
                <article key={item.title} className="entry-card" data-reveal>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="reason-band">
              {reasonBand.map((item) => (
                <article key={item} className="reason-pill" data-reveal>
                  <span className="reason-pill__dot" aria-hidden="true" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experiencia">
          <div className="container">
            <SectionIntro
              eyebrow="Mais app por dentro"
              title="Menos cara de landing. Mais Sentimi real."
              description="Home, cuidado, memórias, datas, detalhes e biblioteca recriados com a mesma atmosfera do produto."
            />

            <div className="product-grid">
              <article className="product-card product-card--collection" data-reveal>
                <div className="product-card__copy">
                  <span className="product-card__badge">Casa da história</span>
                  <h3>Tudo que guarda vocês</h3>
                  <p>Memórias, datas, detalhes e leituras reunidos em um lugar mais claro.</p>
                </div>

                <div className="collection-grid" aria-hidden="true">
                  {collectionTiles.map((item) => (
                    <article key={item.label} className="collection-tile" data-tone={item.tone}>
                      <span className="collection-tile__icon" />
                      <strong>{item.label}</strong>
                      <p>{item.note}</p>
                    </article>
                  ))}
                </div>
              </article>

              <article className="product-card product-card--care" data-reveal>
                <div className="product-card__copy">
                  <span className="product-card__badge">Casa do Cuidado</span>
                  <h3>Temperatura Emocional</h3>
                  <p>Guarda o clima do dia como uma lembrança pequena.</p>
                </div>

                <div className="care-screen" aria-hidden="true">
                  <div className="care-screen__top">
                    <article className="care-summary care-summary--active">
                      <span>Você</span>
                      <strong>Normal</strong>
                      <b>Leve</b>
                    </article>
                    <article className="care-summary">
                      <span>Parceiro</span>
                      <strong>Sem registro</strong>
                      <b>Hoje</b>
                    </article>
                  </div>

                  <article className="care-highlight">
                    <span>Hoje meu coração está</span>
                    <strong>Normal</strong>
                    <p>Hoje está tudo estável, sem grandes altos ou baixos.</p>
                  </article>

                  <div className="care-steps">
                    <span>1 clima</span>
                    <span>2 peso</span>
                    <span>3 cuidado</span>
                    <span>4 frase</span>
                  </div>

                  <div className="care-state-grid">
                    {careStates.map((state) => (
                      <article
                        key={state}
                        className={`care-state${state === 'Normal' ? ' is-active' : ''}`}
                      >
                        <span className="care-state__orb" />
                        <strong>{state}</strong>
                      </article>
                    ))}
                  </div>
                </div>
              </article>

              <article className="product-card product-card--love" data-reveal>
                <div className="product-card__copy">
                  <span className="product-card__badge">Tudo sobre meu amor</span>
                  <h3>Espaço privado</h3>
                  <p>Detalhes, gostos e pistas que viram cuidado depois.</p>
                </div>

                <div className="love-screen" aria-hidden="true">
                  <article className="love-hero">
                    <div className="love-hero__icon" />
                    <div>
                      <strong>Tudo sobre meu amor</strong>
                      <p>Privado, surpresas e cuidado no mesmo lugar.</p>
                    </div>
                  </article>

                  <div className="love-tags">
                    <span>Privado</span>
                    <span>Surpresas</span>
                    <span>Cuidado</span>
                  </div>

                  <div className="love-inputs">
                    <div>Cor favorita</div>
                    <div>Comida favorita</div>
                    <div>Filme ou série favorita</div>
                    <div>Música favorita</div>
                  </div>
                </div>
              </article>

              <article className="product-card product-card--memories" data-reveal>
                <div className="product-card__copy">
                  <span className="product-card__badge">Memórias</span>
                  <h3>Central de memórias</h3>
                  <p>Sua história começa a ganhar forma dentro do app.</p>
                </div>

                <div className="memory-screen" aria-hidden="true">
                  <div className="memory-filters">
                    {memoryFilters.map((filter, index) => (
                      <span key={filter} className={index === 0 ? 'is-active' : ''}>
                        {filter}
                      </span>
                    ))}
                  </div>

                  <div className="memory-highlights">
                    {memoryCards.map((item, index) => (
                      <article key={item.title} className="memory-highlight">
                        <div className={`memory-highlight__cover memory-highlight__cover--${index + 1}`} />
                        <strong>{item.title}</strong>
                        <p>{item.date}</p>
                      </article>
                    ))}
                  </div>

                  <div className="memory-summary">
                    <div>
                      <span>Minhas memórias</span>
                      <strong>3</strong>
                    </div>
                    <div>
                      <span>Compartilhadas</span>
                      <strong>0</strong>
                    </div>
                  </div>

                  <div className="memory-button">Criar memória</div>
                </div>
              </article>

              <article className="product-card product-card--dates" data-reveal>
                <div className="product-card__copy">
                  <span className="product-card__badge">Datas importantes</span>
                  <h3>Central de lembretes</h3>
                  <p>Lembretes, promessas e próximos marcos com destaque certo.</p>
                </div>

                <div className="dates-screen" aria-hidden="true">
                  <div className="dates-stats">
                    <div>
                      <span>Minhas</span>
                      <strong>1</strong>
                    </div>
                    <div>
                      <span>Compart.</span>
                      <strong>0</strong>
                    </div>
                    <div>
                      <span>Total</span>
                      <strong>1</strong>
                    </div>
                  </div>

                  <div className="dates-button">Criar data importante</div>

                  <article className="dates-featured">
                    <span>Data em destaque</span>
                    <strong>aniversario,</strong>
                    <p>04/06/2026 • No dia • 08:50 • Privada</p>
                  </article>

                  <article className="dates-list-card">
                    <div>
                      <strong>Minhas datas</strong>
                      <p>1 item salvo</p>
                    </div>
                    <span>04/06/2026</span>
                  </article>
                </div>
              </article>

              <article className="product-card product-card--library" data-reveal>
                <div className="product-card__copy">
                  <span className="product-card__badge">Biblioteca emocional</span>
                  <h3>Quem entende melhor, ama melhor.</h3>
                  <p>Guias emocionais para ampliar repertório sem esfriar a relação.</p>
                </div>

                <div className="library-screen" aria-hidden="true">
                  <article className="library-hero">
                    <span>Biblioteca dinâmica</span>
                    <strong>Quem entende melhor, ama melhor.</strong>
                    <div className="library-tags">
                      <span>Psicologia leve</span>
                      <span>Comunicação</span>
                    </div>
                  </article>

                  <article className="library-progress">
                    <div className="library-progress__cover" />
                    <div>
                      <span>Continue de onde parou</span>
                      <strong>Entendendo o Homem</strong>
                      <p>7% concluído neste guia.</p>
                    </div>
                    <i />
                  </article>

                  <div className="library-stats">
                    <div>
                      <span>Livros</span>
                      <strong>2</strong>
                    </div>
                    <div>
                      <span>Capítulos</span>
                      <strong>28</strong>
                    </div>
                    <div>
                      <span>Base</span>
                      <strong>Real</strong>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section story-section">
          <div className="container story-section__grid">
            <div className="story-section__copy" data-reveal>
              <SectionIntro
                eyebrow="Linha do Tempo"
                title="Reviva a história como um filme."
                description="Meses, capítulos e cenas do ano organizados como uma experiência viva de revisitar."
              />

              <div className="story-note">
                <strong>2025 tem 6 memórias guardadas para revisitar.</strong>
              </div>
            </div>

            <div className="timeline-stage" data-reveal>
              <div className="timeline-stage__brand">sentimi</div>
              <div className="timeline-stage__year">2025</div>

              <button
                type="button"
                className="timeline-stage__nav timeline-stage__nav--left"
                aria-label="Capítulo anterior"
              >
                <span aria-hidden="true">‹</span>
              </button>
              <button
                type="button"
                className="timeline-stage__nav timeline-stage__nav--right"
                aria-label="Próximo capítulo"
              >
                <span aria-hidden="true">›</span>
              </button>

              <div className="timeline-phone" aria-hidden="true">
                <div className="timeline-phone__top">
                  <span className="is-live" />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="timeline-phone__rail" />

                {timelineMonths.map((item, index) => (
                  <article
                    key={item.month}
                    className={`timeline-month timeline-month--${item.side}`}
                  >
                    <div className={`timeline-polaroid timeline-polaroid--${index + 1}`}>
                      <div className="timeline-polaroid__photo" />
                      <strong>{item.label}</strong>
                    </div>

                    <div className="timeline-copy">
                      <strong>{item.month}</strong>
                      <span>{item.count}</span>
                      <p>{item.label}</p>
                      <button type="button">Abrir mês</button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="chapter-strip">
                {chapterCards.map((item) => (
                  <article key={item.month} className="chapter-card">
                    <div className={`chapter-card__cover chapter-card__cover--${item.month.toLowerCase()}`} />
                    <strong>{item.month}</strong>
                    <p>{item.count}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section planet-section">
          <div className="container">
            <div className="planet-panel" data-reveal>
              <div className="planet-panel__copy">
                <span className="eyebrow">Planeta da História</span>
                <h2>Cada memória floresce como um ponto vivo.</h2>
                <p>
                  Um mapa emocional com árvore central, conexões e capítulos que
                  fazem a jornada de vocês parecer real, organizada e desejável de
                  abrir de novo.
                </p>

                <div className="planet-seals">
                  <span>Mapa emocional</span>
                  <span>Linha viva</span>
                </div>
              </div>

              <div className="planet-map" aria-hidden="true">
                <div className="planet-map__top">
                  <div>
                    <strong>Planeta da História</strong>
                    <p>6 frutos • 10 fotos guardadas</p>
                  </div>
                  <span>100%</span>
                </div>

                <div className="planet-map__controls">
                  <div className="planet-field">Escolher data no calendário</div>
                  <div className="planet-button">Calendário</div>
                </div>

                <div className="planet-map__toolbar">
                  <span>+ +</span>
                  <span>- -</span>
                  <span>Centro</span>
                  <span>Primeira</span>
                  <span>Última</span>
                </div>

                <div className="planet-canvas">
                  <div className="planet-canvas__tree" />

                  <article className="planet-node planet-node--one">
                    <div className="planet-node__photo planet-node__photo--one" />
                    <strong>viaje</strong>
                    <p>05/05/2025</p>
                  </article>

                  <article className="planet-node planet-node--two">
                    <div className="planet-node__photo planet-node__photo--two" />
                    <strong>mi reina</strong>
                    <p>05/05/2025</p>
                  </article>

                  <article className="planet-node planet-node--three">
                    <div className="planet-node__photo planet-node__photo--three" />
                    <strong>mi preciosa hermosa</strong>
                    <p>14/05/2025</p>
                  </article>

                  <article className="planet-node planet-node--four">
                    <div className="planet-node__photo planet-node__photo--four" />
                    <strong>Amor mio</strong>
                    <p>06/06/2025</p>
                  </article>

                  <article className="planet-node planet-node--five">
                    <div className="planet-node__photo planet-node__photo--five" />
                    <strong>mi lugar feliz</strong>
                    <p>12/06/2025</p>
                  </article>

                  <article className="planet-node planet-node--six">
                    <div className="planet-node__photo planet-node__photo--six" />
                    <strong>Nuestro encuentro</strong>
                    <p>19/07/2025</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section care-commercial-section">
          <div className="container care-commercial__grid">
            <div className="care-commercial__copy" data-reveal>
              <SectionIntro
                eyebrow="Cuidado antes da cobrança"
                title="Às vezes o problema não é a conversa. É o momento."
                description="O Sentimi ajuda o casal a perceber o clima do dia, registrar cuidado e escolher melhor a hora de se aproximar."
              />

              <div className="care-commercial__points">
                {careSellingPoints.map((item) => (
                  <article key={item} className="care-point">
                    <span className="care-point__dot" aria-hidden="true" />
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="care-commercial__visual" data-reveal>
              <article className="partner-climate">
                <div className="partner-climate__top">
                  <article className="partner-climate__mini">
                    <span>Você</span>
                    <strong>Sem clima</strong>
                    <b>Hoje</b>
                  </article>
                  <article className="partner-climate__mini partner-climate__mini--violet">
                    <span>Parceiro(a)</span>
                    <strong>Sem clima</strong>
                    <b>Hoje</b>
                  </article>
                </div>

                <article className="partner-climate__status">
                  <strong>Clima do parceiro hoje</strong>
                  <div className="partner-climate__status-card">
                    <span>Sem clima</span>
                    <p>Ainda não informado</p>
                  </div>
                </article>

                <article className="partner-climate__reading">
                  <strong>Leitura do Sentimi</strong>
                  <p>Convide com carinho, sem cobrança. Essa tela existe para cuidar, não para pressionar.</p>
                </article>

                <div className="partner-climate__supports">
                  {careSupports.map((item, index) => (
                    <span
                      key={item}
                      className={index === 2 || index === 3 ? 'is-active' : ''}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="free">
          <div className="container">
            <SectionIntro
              align="center"
              eyebrow="Free vs Premium"
              title="Entre grátis. Assine só quando quiser viver a experiência completa."
              description="O Free deixa vocês entrarem sem pressão. O Premium abre mais espaço, mais recursos e mais cuidado para a casa digital do casal."
            />

            <div className="pricing-grid">
              <article className="pricing-card pricing-card--free" data-reveal>
                <div className="pricing-card__top">
                  <span className="pricing-card__label">Free</span>
                  <strong>R$0</strong>
                </div>
                <h3>Comece sem pagar</h3>
                <p className="pricing-card__description">
                  Para conhecer o Sentimi, criar a casa digital e sentir o valor
                  antes de qualquer decisão.
                </p>

                <ul className="pricing-list">
                  <li>entrar sem cartão</li>
                  <li>criar sua casa digital</li>
                  <li>testar os primeiros registros</li>
                  <li>conhecer memórias e datas</li>
                  <li>sentir o valor do app</li>
                </ul>

                <div className="pricing-mini pricing-mini--free" aria-hidden="true">
                  <span>Home</span>
                  <span>Memórias</span>
                  <span>Datas</span>
                </div>

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

                <div className="pricing-mini pricing-mini--premium" aria-hidden="true">
                  <span>Temperatura</span>
                  <span>Biblioteca</span>
                  <span>Planeta</span>
                </div>

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
              {premiumReasons.map((item, index) => (
                <article key={item} className="value-card" data-reveal>
                  <span className="value-card__index">{`0${index + 1}`}</span>
                  <p>{item}</p>
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
              title="Bonito, privado e feito para durar na rotina."
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
                title="O que você pode querer saber antes de entrar?"
                description="Respostas diretas, humanas e sem promessa forçada."
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
              <h2>A história de vocês já existe. O Sentimi só dá um lugar para ela continuar viva.</h2>
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
