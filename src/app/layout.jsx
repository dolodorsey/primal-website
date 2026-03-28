import './globals.css';
export const metadata = { title: 'Primal — Art Line', description: 'An art collection exploring primal human forces — desire, fear, power, and connection.', themeColor: '#0A0A08' };
export default function RootLayout({ children }) {
  return (<html lang="en"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet" />
  </head><body suppressHydrationWarning>{children}</body></html>);
}
