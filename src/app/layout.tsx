// Packages
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  variable: '--font-default',
});

export const metadata: Metadata = {
  title: 'Agenda de Churras',
  description: 'Aplicativo de Churrasco feito com NEXT.JS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
