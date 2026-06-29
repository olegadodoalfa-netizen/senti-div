import type { Metadata } from 'next';
import './globals.css';

const siteTitle = 'Sentimi | A casa digital onde o relacionamento continua vivo';
const siteDescription =
  'Memórias, datas, cuidado emocional e detalhes importantes reunidos em uma casa digital privada para o casal. Comece grátis e ative o Premium por R$19,90 quando quiser viver tudo.';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: 'Sentimi',
  metadataBase: new URL('https://sentimi.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://sentimi.netlify.app',
    siteName: 'Sentimi',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
