import { Poppins } from 'next/font/google';
import Header from './components/Header';
import './globals.css';
import NextNProgress from 'nextjs-progressbar';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Binayyub Media Query',
  description: 'Web development tutorials and courses',
  keywords:
    'web development, web design, javascript, react, node, angular, vue, html, css',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <NextNProgress />
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}