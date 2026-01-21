import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; // <body> element에 font추가
import { Metadata } from 'next'; // chapter15.Metadata 관련

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard', // %s : 특정 페이지 제목을 대신함
    default: 'Acme Dashboard'
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
