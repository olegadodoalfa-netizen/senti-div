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

const whyItMatters = [
  {
    title: 'Fotos ficam espalhadas',
    text: 'Entre galeria, conversa e nuvem, momentos importantes perdem contexto e deixam de contar a história completa.',
  },
  {
    title: 'Datas passam despercebidas',
    text: 'Aniversários, promessas e pequenos marcos chegam sem preparo quando a rotina toma conta do dia.',
  },
  {
    title: 'Conversas importantes se perdem',
    text: 'O que foi dito com carinho fica solto entre notificações e nunca vira um lugar seguro para revisitar.',
  },
  {
    title: 'O cuidado vira cobrança',
    text: 'Sem leitura do momento, boa intenção pode soar como pressão em vez de presença.',
  },
] as const;

const freeEntryCards = [
  {
    title: 'Crie sua casa digital',
    text: 'Um espaço bonito e calmo para começar a organizar o que importa entre vocês.',
  },
  {
    title: 'Guarde os primeiros momentos',
    text: 'Registre lembranças iniciais e veja como a história começa a ganhar forma.',
  },
  {
    title: 'Explore a Casa do Cuidado',
    text: 'Entenda o clima antes da conversa e veja o valor do cuidado com mais contexto.',
  },
  {
    title: 'Conheça Memórias e Datas',
    text: 'Sinta como lembrar e registrar pode ficar leve quando tudo mora no mesmo lugar.',
  },
  {
    title: 'Veja como o app funciona no celular',
    text: 'A experiência foi pensada para caber na rotina e ser gostosa de abrir todos os dias.',
  },
  {
    title: 'Depois decida se quer o Premium',
    text: 'O modo grátis é a porta de entrada. O Premium entra quando fizer sentido ampliar a experiência.',
  },
] as const;

const experienceBlocks = [
  {
    title: 'Casa do Relacionamento',
    text: 'O painel principal para ver o que vocês já construíram.',
    note: 'Visão viva da história, da presença e do que precisa de atenção agora.',
    accent: 'pink',
    uiTitle: 'Painel principal',
    chips: ['história viva', 'vínculo ativo'],
    stats: [
      { label: 'Memórias', value: 'Guardadas' },
      { label: 'Datas', value: 'Em vista' },
      { label: 'Ritmo', value: 'Acompanhado' },
    ],
  },
  {
    title: 'Casa do Cuidado',
    text: 'Entenda o clima emocional antes de cobrar, conversar ou decidir.',
    note: 'Menos suposição. Mais leitura do momento e mais cuidado no tom.',
    accent: 'cyan',
    uiTitle: 'Clima do dia',
    chips: ['temperatura emocional', 'presença'],
    stats: [
      { label: 'Clima', value: 'Lido' },
      { label: 'Ciclo', value: 'Respeitado' },
      { label: 'Tom', value: 'Mais leve' },
    ],
  },
  {
    title: 'Memórias',
    text: 'Guarde momentos com imagem e transforme lembranças em uma história visual.',
    note: 'Cada registro vira capítulo, não só arquivo perdido na galeria.',
    accent: 'purple',
    uiTitle: 'Memórias em destaque',
    chips: ['fotos e texto', 'linha do tempo'],
    stats: [
      { label: 'Capítulos', value: 'Organizados' },
      { label: 'Momentos', value: 'Vivos' },
      { label: 'Revisita', value: 'Fácil' },
    ],
  },
  {
    title: 'Datas importantes',
    text: 'Organize lembretes, promessas e momentos que não podem ser esquecidos.',
    note: 'O que merece cuidado deixa de competir com a correria do cotidiano.',
    accent: 'blue',
    uiTitle: 'Próximas lembranças',
    chips: ['lembretes', 'marcos do casal'],
    stats: [
      { label: 'Datas', value: 'Acessíveis' },
      { label: 'Alertas', value: 'Prontos' },
      { label: 'Promessas', value: 'Lembradas' },
    ],
  },
  {
    title: 'Tudo sobre meu amor',
    text: 'Guarde gostos, detalhes e cuidados que ajudam a surpreender melhor.',
    note: 'Pequenos detalhes bem guardados costumam virar grandes gestos na hora certa.',
    accent: 'green',
    uiTitle: 'Detalhes que contam',
    chips: ['gostos', 'cuidados'],
    stats: [
      { label: 'Preferências', value: 'Salvas' },
      { label: 'Surpresas', value: 'Mais fáceis' },
      { label: 'Atenção', value: 'Constante' },
    ],
  },
  {
    title: 'Biblioteca emocional',
    text: 'Conteúdos para entender melhor o relacionamento, comunicação e cuidado.',
    note: 'Não para parecer perfeito. Para viver a relação com mais clareza e repertório.',
    accent: 'violet',
    uiTitle: 'Conteúdos do Sentimi',
    chips: ['comunicação', 'cuidado'],
    stats: [
      { label: 'Leituras', value: 'Selecionadas' },
      { label: 'Reflexões', value: 'Práticas' },
      { label: 'Base', value: 'Emocional' },
    ],
  },
] as const;

const careCards = [
  {
    title: 'Temperatura Emocional',
    text: 'Perceba como o parceiro chega no dia antes de exigir energia que talvez não esteja disponível.',
  },
  {
    title: 'Meu Cuidado do Ciclo',
    text: 'Registre momentos que pedem mais delicadeza, espaço ou presença atenta.',
  },
  {
    title: 'Frase do dia',
    text: 'Pequenos toques que lembram o tipo de amor que vocês querem praticar no cotidiano.',
  },
  {
    title: 'Ver clima do parceiro',
    text: 'Menos adivinhação e mais contexto para escolher melhor como falar e como cuidar.',
  },
] as const;

const premiumReasons = [
  'Menos esquecimento',
  'Mais presença',
  'Mais história guardada',
  'Mais cuidado no dia certo',
  'Mais clareza sobre o relacionamento',
  'Mais conexão no cotidiano',
] as const;

const trustPoints = [
  {
    title: 'Comece sem cartão',
    text: 'Você entra sem pagar para sentir a experiência antes de decidir qualquer passo.',
  },
  {
    title: 'Criado para uso no celular',
    text: 'A navegação foi pensada para caber na mão, na rotina e nos pequenos intervalos do dia.',
  },
  {
    title: 'Privacidade como prioridade',
    text: 'O Sentimi foi desenhado para ser um espaço discreto, pessoal e protegido para o casal.',
  },
  {
    title: 'Feito para casais reais',
    text: 'Sem fantasia infantil e sem promessas milagrosas. Só mais cuidado e mais memória com intenção.',
  },
  {
    title: 'Visual premium',
    text: 'A experiência lembra um app que vocês vão querer abrir, não só uma ferramenta utilitária.',
  },
  {
    title: 'Experiência contínua',
    text: 'Não é presente de um dia. É um lugar para acompanhar o que vocês continuam construindo.',
  },
] as const;

const faqs = [
  {
    question: 'Posso começar sem pagar?',
    answer: 'Sim. Você entra no Sentimi sem pagar e conhece a experiência antes de decidir qualquer upgrade.',
  },
  {
    question: 'O que existe no modo grátis?',
    answer: 'O modo grátis abre a porta: você cria sua casa digital, faz os primeiros registros e sente como o app funciona.',
  },
  {
    question: 'Quanto custa o Premium?',
    answer: 'O Premium custa R$19,90 e libera a experiência completa do Sentimi.',
  },
  {
    question: 'O Premium é obrigatório?',
    answer: 'Não. Você pode continuar no modo grátis e ativar o Premium apenas quando fizer sentido.',
  },
  {
    question: 'Preciso usar com meu parceiro?',
    answer: 'Não. Você pode explorar sozinho e depois decidir como quer viver a experiência.',
  },
  {
    question: 'Posso usar sozinho?',
    answer: 'Sim. O Sentimi também funciona como um espaço individual de memória, cuidado e presença.',
  },
  {
    question: 'O Sentimi é privado?',
    answer: 'Sim. A proposta do Sentimi é oferecer um ambiente privado do relacionamento, com foco em discrição e cuidado.',
  },
  {
    question: 'Funciona no celular?',
    answer: 'Sim. Ele foi pensado primeiro para o uso no celular, com experiência fluida e confortável.',
  },
  {
    question: 'Posso instalar como app?',
    answer: 'Sim. A experiência foi desenhada para continuar bem em Web, PWA e App.',
  },
  {
    question: 'Posso guardar fotos?',
    answer: 'Sim. Memórias visuais fazem parte da experiência de construir a história de vocês.',
  },
  {
    question: 'O app lembra datas importantes?',
    answer: 'Sim. O Sentimi ajuda a organizar datas e lembretes para o que não merece passar batido.',
  },
  {
    question: 'Posso assinar depois?',
    answer: 'Sim. Você pode entrar grátis e ativar o Premium quando quiser expandir a experiência.',
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
          <p>Comece grátis hoje. Premium completo por R$19,90.</p>
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
              <h1>A casa digital do seu relacionamento.</h1>
              <p className="hero__lead">
                Guarde memórias, acompanhe datas importantes, entenda o clima do
                coração e transforme a história de vocês em uma experiência viva.
                Comece grátis e ative o Premium quando quiser viver tudo.
              </p>

              <ActionGroup />

              <ul className="microproofs" aria-label="Destaques principais">
                <li>Comece sem pagar</li>
                <li>Privado para o casal</li>
                <li>Premium por R$19,90</li>
              </ul>
            </div>

            <div className="hero__visual" data-reveal>
              <div className="orbit-card orbit-card--one">
                <span className="orbit-card__kicker">Temperatura Emocional</span>
                <strong>Antes da conversa, leia o momento.</strong>
              </div>
              <div className="orbit-card orbit-card--two">
                <span className="orbit-card__kicker">Próxima data</span>
                <strong>O que importa não passa batido.</strong>
              </div>
              <div className="orbit-card orbit-card--three">
                <span className="orbit-card__kicker">Biblioteca</span>
                <strong>Mais repertório para cuidar melhor.</strong>
              </div>
              <div className="orbit-card orbit-card--four">
                <span className="orbit-card__kicker">Planeta da História</span>
                <strong>Uma jornada para revisitar juntos.</strong>
              </div>

              <div className="mockup-card">
                <div className="mockup-card__glow" aria-hidden="true" />
                <div className="mockup-card__header">
                  <div>
                    <p className="mockup-card__brand">Sentimi</p>
                    <h2>Casa do Relacionamento</h2>
                  </div>
                  <span className="status-pill">Parceiros conectados</span>
                </div>

                <div className="mockup-story">
                  <div className="mockup-story__cover" aria-hidden="true" />
                  <div className="mockup-story__content">
                    <span className="eyebrow eyebrow--small">Nossa História</span>
                    <p>
                      Um lugar só de vocês para guardar o que já viveram e cuidar
                      do que ainda estão construindo.
                    </p>
                  </div>
                </div>

                <div className="mockup-stats" aria-label="Resumo da casa do relacionamento">
                  <div className="mini-stat">
                    <span>Memórias</span>
                    <strong>Guardadas</strong>
                  </div>
                  <div className="mini-stat">
                    <span>Datas</span>
                    <strong>Em vista</strong>
                  </div>
                  <div className="mini-stat">
                    <span>Vínculo</span>
                    <strong>Ativo</strong>
                  </div>
                </div>

                <div className="mockup-next">
                  <div>
                    <span className="eyebrow eyebrow--small">Próxima data</span>
                    <p>Noite só de vocês, com tudo lembrado antes.</p>
                  </div>
                  <span className="status-chip">Lembrete pronto</span>
                </div>

                <a className="button button--primary button--full" href={APP_URL}>
                  Ver memórias
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="porque-importa">
          <div className="container">
            <SectionIntro
              align="center"
              eyebrow="Por que isso importa"
              title="O amor não acaba por falta de lembrança. Mas a rotina apaga detalhes importantes."
              description="Quando a história fica espalhada, o cuidado depende demais da memória do dia. E quase sempre o que pesa não é falta de sentimento, é falta de lugar."
            />

            <div className="problem-grid">
              {whyItMatters.map((item) => (
                <article key={item.title} className="glass-card problem-card" data-reveal>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="turn-card" data-reveal>
              <strong>O Sentimi junta tudo em um espaço calmo, bonito e privado.</strong>
            </div>
          </div>
        </section>

        <section className="section" id="como-funciona">
          <div className="container">
            <SectionIntro
              eyebrow="Entre grátis e sinta"
              title="Você não precisa pagar para começar."
              description="O modo grátis não é uma amostra fria. Ele foi pensado para dar a primeira sensação da casa digital e deixar você sentir o valor antes de evoluir."
            />

            <div className="entry-grid">
              {freeEntryCards.map((item, index) => (
                <article key={item.title} className="glass-card entry-card" data-reveal>
                  <span className="entry-card__index">{`0${index + 1}`}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="section-actions" data-reveal>
              <ActionGroup centered />
            </div>
          </div>
        </section>

        <section className="section" id="experiencia">
          <div className="container">
            <SectionIntro
              eyebrow="A experiência Sentimi"
              title="Cada parte do app foi pensada para parecer cuidado, não burocracia."
              description="A experiência visual e emocional do Sentimi foi desenhada para transformar rotina em presença. Tudo com cara de app premium, mas com função real na vida do casal."
            />

            <div className="showcase-grid">
              {experienceBlocks.map((item, index) => (
                <article
                  key={item.title}
                  className="showcase-card"
                  data-accent={item.accent}
                  data-reveal
                >
                  <div className="showcase-card__copy">
                    <span className="showcase-card__index">{`0${index + 1}`}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span className="showcase-card__note">{item.note}</span>
                  </div>

                  <div className="showcase-card__ui" aria-hidden="true">
                    <div className="showcase-card__ui-top">
                      <span>{item.uiTitle}</span>
                      <div className="showcase-card__chips">
                        {item.chips.map((chip) => (
                          <span key={chip}>{chip}</span>
                        ))}
                      </div>
                    </div>

                    <div className="showcase-card__ui-panel">
                      {item.stats.map((stat) => (
                        <div key={stat.label} className="showcase-card__ui-stat">
                          <span>{stat.label}</span>
                          <strong>{stat.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
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
                title="Com o tempo, o Sentimi vira o filme da história de vocês."
                description="O que hoje parece detalhe vira capítulo. Cada memória guardada ajuda a revisitar o ano com mais emoção, contexto e beleza."
              />
              <div className="glass-card story-note">
                <strong>Memórias guardadas para revisitar</strong>
                <p>
                  Em vez de uma sequência solta de fotos, vocês passam a ter uma
                  narrativa com meses, marcos e pequenos capítulos do ano.
                </p>
              </div>
            </div>

            <div className="story-phone" data-reveal>
              <div className="story-phone__frame">
                <div className="story-phone__top">
                  <strong>2025</strong>
                  <span>memórias guardadas para revisitar</span>
                </div>

                <div className="story-phone__actions" aria-hidden="true">
                  <span>capítulos</span>
                  <span>linha viva</span>
                </div>

                <div className="story-timeline">
                  <div className="story-chapter story-chapter--left">
                    <span className="story-month">Janeiro</span>
                    <article className="polaroid-card">
                      <div className="fake-photo fake-photo--one" />
                      <strong>Primeiro refúgio</strong>
                      <p>Começo que mereceu ser guardado.</p>
                    </article>
                  </div>

                  <div className="story-chapter story-chapter--right">
                    <span className="story-month">Março</span>
                    <article className="polaroid-card">
                      <div className="fake-photo fake-photo--two" />
                      <strong>Promessa lembrada</strong>
                      <p>Um gesto simples virou capítulo do ano.</p>
                    </article>
                  </div>

                  <div className="story-chapter story-chapter--left">
                    <span className="story-month">Junho</span>
                    <article className="polaroid-card">
                      <div className="fake-photo fake-photo--three" />
                      <strong>Noite que ficou</strong>
                      <p>Memória com contexto para voltar quando quiser.</p>
                    </article>
                  </div>

                  <div className="story-chapter story-chapter--right">
                    <span className="story-month">Outubro</span>
                    <article className="polaroid-card">
                      <div className="fake-photo fake-photo--four" />
                      <strong>Capítulo favorito</strong>
                      <p>Quando o ano inteiro começa a parecer um filme.</p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section planet-section">
          <div className="container">
            <SectionIntro
              align="center"
              eyebrow="Planeta da História"
              title="A história de vocês deixa de ser uma lista e vira uma jornada."
              description="O mapa emocional do Sentimi transforma lembranças em pontos vivos de uma constelação particular, com conexões, datas e caminhos para revisitar."
            />

            <div className="planet-map" data-reveal>
              <div className="planet-map__nebula" aria-hidden="true" />
              <div className="planet-map__core" aria-hidden="true">
                <div className="planet-map__planet" />
                <div className="planet-map__tree" />
              </div>

              <div className="planet-map__link planet-map__link--one" aria-hidden="true" />
              <div className="planet-map__link planet-map__link--two" aria-hidden="true" />
              <div className="planet-map__link planet-map__link--three" aria-hidden="true" />
              <div className="planet-map__link planet-map__link--four" aria-hidden="true" />

              <article className="memory-bubble memory-bubble--one">
                <span>Jan 2025</span>
                <strong>Primeira viagem</strong>
              </article>
              <article className="memory-bubble memory-bubble--two">
                <span>Abr 2025</span>
                <strong>Cuidado que marcou</strong>
              </article>
              <article className="memory-bubble memory-bubble--three">
                <span>Jul 2025</span>
                <strong>Promessa viva</strong>
              </article>
              <article className="memory-bubble memory-bubble--four">
                <span>Nov 2025</span>
                <strong>Capítulo favorito</strong>
              </article>
            </div>
          </div>
        </section>

        <section className="section care-section">
          <div className="container care-section__grid">
            <div className="care-section__copy" data-reveal>
              <SectionIntro
                eyebrow="Cuidado antes da cobrança"
                title="Antes de cobrar, entenda o momento."
                description="O Sentimi também ajuda o casal a perceber o clima emocional, registrar cuidado e agir com mais presença. Não para controlar. Para sentir melhor o que o dia pede."
              />
            </div>

            <div className="care-grid">
              {careCards.map((item) => (
                <article key={item.title} className="glass-card care-card" data-reveal>
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
              title="Comece grátis. Evolua quando fizer sentido."
              description="O Free foi feito para entrar, conhecer e sentir. O Premium entra como passo natural para liberar o espaço completo da história e do cuidado."
            />

            <div className="pricing-grid">
              <article className="pricing-card pricing-card--free" data-reveal>
                <div className="pricing-card__top">
                  <span className="pricing-card__label">Free</span>
                  <strong>R$0</strong>
                </div>
                <p className="pricing-card__description">
                  Para entrar, conhecer e sentir o Sentimi.
                </p>
                <ul className="pricing-list">
                  <li>começar sem pagar</li>
                  <li>conhecer o app</li>
                  <li>criar os primeiros registros</li>
                  <li>explorar a experiência inicial</li>
                  <li>sentir o valor do Sentimi</li>
                </ul>
                <a className="button button--secondary button--full" href={APP_URL}>
                  Começar grátis
                </a>
              </article>

              <article
                className="pricing-card pricing-card--premium"
                id="premium"
                data-reveal
              >
                <div className="pricing-card__top">
                  <span className="pricing-card__label pricing-card__label--premium">
                    Experiência completa
                  </span>
                  <strong>R$19,90</strong>
                </div>
                <p className="pricing-card__description">
                  Premium para liberar a versão mais profunda, viva e completa da
                  casa digital de vocês.
                </p>
                <ul className="pricing-list">
                  <li>experiência completa</li>
                  <li>mais memórias</li>
                  <li>mais datas</li>
                  <li>lembretes</li>
                  <li>biblioteca completa</li>
                  <li>recursos do casal</li>
                  <li>espaço completo da história</li>
                </ul>
                <a className="button button--primary button--full" href={APP_URL}>
                  Ativar Premium
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionIntro
              align="center"
              eyebrow="Por que o Premium vale"
              title="R$19,90 para cuidar melhor do que vocês estão construindo."
              description="Sem prometer milagres e sem exagero. Só um espaço melhor para lembrar, registrar, perceber e manter vivo aquilo que merece ser vivido com mais presença."
            />

            <div className="value-grid">
              {premiumReasons.map((reason) => (
                <article key={reason} className="glass-card value-card" data-reveal>
                  <span className="value-card__glow" aria-hidden="true" />
                  <h3>{reason}</h3>
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
              title="Uma experiência pensada para durar, não para impressionar por um minuto."
              description="Sem depoimentos inventados, sem números inflados e sem pressa artificial. O valor do Sentimi aparece quando ele passa a fazer parte da rotina."
            />

            <div className="trust-grid">
              {trustPoints.map((item) => (
                <article key={item.title} className="glass-card trust-card" data-reveal>
                  <span className="trust-card__status" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
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
                title="O que você quer saber antes de entrar?"
                description="Respostas curtas, claras e diretas para ajudar você a decidir sem fricção."
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
                A história de vocês já está acontecendo. Agora ela pode ter um
                lugar só dela.
              </h2>
              <p>
                Entre grátis, crie sua casa digital e descubra como o Sentimi pode
                transformar memórias, cuidado e presença em uma experiência viva.
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
            <p>A casa digital do relacionamento.</p>
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
