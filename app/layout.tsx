import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; // <body> element에 font추가

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body> {/*antialiased : 글꼴을 부드럽게 만들어주는 클래스*/}
    </html>
  );
}
