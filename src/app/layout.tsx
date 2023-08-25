import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import ConvexClientProvider from './ConvexClientProvider';
import localFont from 'next/font/local';
import clsx from 'clsx';

export const metadata = {
  title: 'Azure OpenAI 小鎮',
  description: '人工智能角色居住、聊天和社交的虛擬小鎮',
};

const fontDisplay = localFont({
  src: '../../public/assets/fonts/upheaval_pro.ttf',
  variable: '--font-display',
});
const fontBody = localFont({
  src: '../../public/assets/fonts/vcr_osd_mono.ttf',
  variable: '--font-body',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ConvexClientProvider>
        <html lang="en">
          <body className={clsx(fontDisplay.variable, fontBody.variable)}>{children}</body>
        </html>
      </ConvexClientProvider>
    </ClerkProvider>
  );
}
