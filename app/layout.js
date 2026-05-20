import './globals.css';

export const metadata = {
  title: 'Montenegro Itinerary 2026',
  description: 'Private family trip planner for Montenegro 2026 with itinerary, budget calculator, and interactive map.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
