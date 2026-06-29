'use client';

import { useEffect, useState } from 'react';

const APP_URL = 'https://sentimi.netlify.app';

const navLinks = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Por dentro', href: '#por-dentro' },
  { label: 'Planos', href: '#premium' },
  { label: 'FAQ', href: '#faq' },
] as const;

const entryLines = [
  'Crie a casa digital do casal.',
  'Guarde os primeiros momentos.',
  'Veja datas e cuidado em um só lugar.',
  'Decida pelo Premium só quando fizer sentido.',
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

type PreviewSlide = {
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  bullets: readonly string[];
};

const previewSlides: readonly PreviewSlide[] = [
  {
    title: 'Casa do Relacionamento',
    subtitle: 'O painel onde a história de vocês começa a ganhar forma.',
    image: '/app-previews/home.png',
    tag: 'Casa do casal',
    bullets: [
      'Veja memórias, datas e vínculo em um só lugar.',
      'Sinta que a história de vocês tem uma casa viva.',
      'Continue cuidando do relacionamento com mais presença.',
    ],
  },
  {
    title: 'Casa do Cuidado',
    subtitle: 'Entenda o clima emocional antes de cobrar, conversar ou decidir.',
    image: '/app-previews/cuidado.png',
    tag: 'Cuidado emocional',
    bullets: [
      'Perceba o clima emocional antes de conversar.',
      'Evite transformar cuidado em cobrança.',
      'Escolha melhor o momento de falar e acolher.',
    ],
  },
  {
    title: 'Memórias',
    subtitle: 'Guarde momentos com imagem e transforme lembranças em capítulos.',
    image: '/app-previews/memorias.png',
    tag: 'Álbum emocional',
    bullets: [
      'Guarde fotos, textos e momentos especiais.',
      'Revisite lembranças sem deixar tudo perdido na galeria.',
      'Transforme momentos simples em capítulos da história.',
    ],
  },
  {
    title: 'Linha do Tempo',
    subtitle: 'Reviva a história como um filme, por meses, fases e capítulos.',
    image: '/app-previews/linha-do-tempo.png',
    tag: 'História viva',
    bullets: [
      'Relembre meses, fases e momentos importantes.',
      'Veja a história de vocês como uma linha viva.',
      'Volte no tempo sem procurar em mil conversas.',
    ],
  },
  {
    title: 'Planeta da História',
    subtitle: 'Veja as memórias como pontos vivos conectados pela jornada de vocês.',
    image: '/app-previews/planeta.png',
    tag: 'Mapa emocional',
    bullets: [
      'Explore memórias como pontos conectados da jornada.',
      'Veja a história crescer de um jeito visual e emocional.',
      'Encontre momentos especiais com mais calma e beleza.',
    ],
  },
  {
    title: 'Datas Importantes',
    subtitle: 'Lembretes, promessas e momentos que não merecem passar batido.',
    image: '/app-previews/datas.png',
    tag: 'Lembretes',
    bullets: [
      'Guarde aniversários, promessas e datas especiais.',
      'Veja o que está chegando antes que passe batido.',
      'Transforme lembrança em cuidado no dia certo.',
    ],
  },
  {
    title: 'Biblioteca',
    subtitle:
      'Conteúdos para entender melhor o relacionamento e cuidar com mais presença.',
    image: '/app-previews/biblioteca.png',
    tag: 'Leitura para casais',
    bullets: [
      'Leia conteúdos feitos para casais reais.',
      'Entenda melhor comunicação, cuidado e diferenças.',
      'Cresça junto sem transformar amor em cobrança.',
    ],
  },
] as const;

const previewBenefits = [
  'Veja antes de entrar',
  'Comece grátis',
  'Premium por R$19,90',
] as const;

const premiumReasons = [
  'Uma data lembrada no momento certo',
  'Uma memória que não fica perdida',
  'Um cuidado antes da cobrança',
  'Um detalhe salvo para surpreender',
  'Uma biblioteca para entender melhor',
  'Uma casa digital que cresce com vocês',
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
      <a className="button button--primary button--pulse" href={APP_URL}>
        Entrar grátis agora
      </a>
      <a className="button button--secondary" href="#por-dentro">
        Ver o app por dentro
      </a>
    </div>
  );
}

function PreviewCarousel() {
  const [activePreview, setActivePreview] = useState(0);
  const [missingPreviews, setMissingPreviews] = useState<Record<string, true>>({});

  const currentSlide = previewSlides[activePreview];
  const currentNumber = String(activePreview + 1).padStart(2, '0');
  const totalNumber = String(previewSlides.length).padStart(2, '0');
  const currentImageMissing = Boolean(missingPreviews[currentSlide.image]);

  const goToPreviousPreview = () => {
    setActivePreview((current) =>
      current === 0 ? previewSlides.length - 1 : current - 1
    );
  };

  const goToNextPreview = () => {
    setActivePreview((current) =>
      current === previewSlides.length - 1 ? 0 : current + 1
    );
  };

  const registerMissingPreview = (image: string) => {
    setMissingPreviews((current) => {
      if (current[image]) {
        return current;
      }

      return {
        ...current,
        [image]: true,
      };
    });
  };

  return (
    <section className="section preview-section" id="por-dentro">
      <div className="container">
        <SectionIntro
          align="center"
          eyebrow="Antes de decidir"
          title="Imagine a história de vocês aparecendo assim"
          description="Memórias, datas e cuidado deixam de ficar espalhados e começam a virar uma casa viva para o casal."
        />

        <div className="preview-showcase">
          <div className="preview-visual" data-reveal>
            <div className="preview-stage">
              <span className="preview-particle preview-particle--one" aria-hidden="true" />
              <span className="preview-particle preview-particle--two" aria-hidden="true" />
              <span className="preview-particle preview-particle--three" aria-hidden="true" />

              <div className="preview-phone preview-phone--shadow preview-phone--back-one" aria-hidden="true">
                <div className="preview-phone__ghost" />
              </div>
              <div className="preview-phone preview-phone--shadow preview-phone--back-two" aria-hidden="true">
                <div className="preview-phone__ghost" />
              </div>

              <button
                type="button"
                className="preview-arrow preview-arrow--left"
                aria-label="Ver tela anterior do Sentimi"
                onClick={goToPreviousPreview}
              >
                <span aria-hidden="true">‹</span>
              </button>

              <article className="preview-phone preview-phone--active">
                <div className="preview-phone__hardware" aria-hidden="true">
                  <span />
                </div>

                <div className="preview-phone__status" aria-hidden="true">
                  <span>11:07</span>
                  <div>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="preview-phone__screen">
                  {currentImageMissing ? (
                    <div className="preview-phone__placeholder">
                      <span>{currentSlide.tag}</span>
                      <strong>{currentSlide.title}</strong>
                      <p>adicione a imagem em public/app-previews</p>
                    </div>
                  ) : (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        key={currentSlide.image}
                        className="preview-phone__image"
                        src={currentSlide.image}
                        alt={`Prévia do app Sentimi: ${currentSlide.title}`}
                        loading="eager"
                        onError={() => registerMissingPreview(currentSlide.image)}
                      />
                    </>
                  )}
                </div>
              </article>

              <button
                type="button"
                className="preview-arrow preview-arrow--right"
                aria-label="Ver próxima tela do Sentimi"
                onClick={goToNextPreview}
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>

            <div className="preview-dots" aria-label="Indicadores das telas do Sentimi">
              {previewSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  className={`preview-dot${index === activePreview ? ' is-active' : ''}`}
                  aria-label={`Abrir slide ${slide.title}`}
                  aria-pressed={index === activePreview}
                  onClick={() => setActivePreview(index)}
                />
              ))}
            </div>
          </div>

          <div className="preview-copy" data-reveal aria-live="polite">
            <div className="preview-copy__meta">
              <span className="preview-copy__tag">{currentSlide.tag}</span>
              <span className="preview-copy__count">
                {currentNumber} / {totalNumber}
              </span>
            </div>

            <h3>{currentSlide.title}</h3>
            <p>{currentSlide.subtitle}</p>

            <ul className="preview-copy__bullets">
              {currentSlide.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <a className="button button--primary button--pulse" href={APP_URL}>
              Quero criar minha casa
            </a>
          </div>
        </div>

        <div className="preview-benefits">
          {previewBenefits.map((benefit) => (
            <article key={benefit} className="preview-benefit" data-reveal>
              <span className="preview-benefit__dot" aria-hidden="true" />
              <strong>{benefit}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
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
          <p>Entre grátis hoje. Guarde a história de vocês antes que a rotina apague detalhes.</p>
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
        <section className="section hero hero--clean" id="inicio">
          <div className="container hero-clean__grid">
            <div className="hero__copy hero-clean__copy" data-reveal>
              <span className="eyebrow">Sentimi para casais reais</span>

              <h1>A história de vocês não foi feita para ficar perdida no celular.</h1>

              <p className="hero__lead">
                O Sentimi junta memórias, datas importantes, detalhes do amor e cuidado
                emocional em uma casa digital privada para o casal. Entre grátis e veja a
                relação de vocês ganhar forma, presença e lembrança.
              </p>

              <ActionGroup />

              <p className="hero__microcopy">
                Sem cartão • Leva menos de 1 minuto para começar • Premium por R$19,90
              </p>
            </div>

            <div className="hero-proof" data-reveal>
              <article className="hero-proof__card hero-proof__card--main">
                <span>Primeiro minuto</span>
                <strong>Você já começa vendo a história de vocês ganhar forma.</strong>
                <p>
                  Crie a casa do casal, guarde uma primeira memória, salve uma data importante
                  e veja o Sentimi virar um lugar vivo para o relacionamento.
                </p>
              </article>

              <div className="hero-proof__grid">
                <article className="hero-proof__card">
                  <span>01</span>
                  <strong>Crie a casa de vocês.</strong>
                </article>

                <article className="hero-proof__card">
                  <span>02</span>
                  <strong>Guarde uma memória que não merece sumir.</strong>
                </article>

                <article className="hero-proof__card">
                  <span>03</span>
                  <strong>Salve uma data antes que vire esquecimento.</strong>
                </article>
              </div>
            </div>
          </div>
        </section>

        <PreviewCarousel />

        <section className="section entry-section" id="como-funciona">
          <div className="container">
            <div className="entry-ribbon" data-reveal>
              <div className="entry-ribbon__copy">
                <span className="eyebrow">Comece grátis</span>
                <h2>Entre grátis. Sem cartão. Sem pressão.</h2>
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

        <section className="section pricing-section" id="premium">
          <div className="container">
            <SectionIntro
              align="center"
              eyebrow="Free vs Premium"
              title="Comece grátis. Desbloqueie tudo quando quiser."
              description="Você entra sem pagar, sente o Sentimi por dentro e só depois decide se quer transformar ele na casa completa da história de vocês."
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
                  Entrar grátis agora
                </a>
              </article>

              <article className="pricing-card pricing-card--premium" data-reveal>
                <div className="pricing-card__spotlight" aria-hidden="true" />
                <div className="pricing-card__top">
                  <span className="pricing-card__label pricing-card__label--premium">
                    Melhor para casais
                  </span>
                  <strong>R$19,90</strong>
                </div>
                <h3>Experiência completa</h3>
                <p className="pricing-card__description">
                  Para quem quer guardar mais memórias, lembrar mais datas e viver o Sentimi como a casa completa do casal.
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
              title="R$19,90 para guardar o que não tem preço."
              description="Memórias, datas, detalhes e cuidado reunidos em um espaço que cresce com a história de vocês."
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

      <div className="mobile-sticky-cta" aria-label="Começar no Sentimi">
        <div>
          <strong>Sentimi grátis</strong>
          <span>Sem cartão para entrar</span>
        </div>
        <a href={APP_URL}>Entrar agora</a>
      </div>
    </div>
  );
}
