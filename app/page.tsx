import LocalizedView from './components/LocalizedView';
import { cookies } from 'next/headers';

export default async function Home() {
  const store = await cookies();
  const initialLocale = store.get('NEXT_LOCALE')?.value === 'en' ? 'en' : 'vi';
  return <LocalizedView initialLocale={initialLocale} />;
}
