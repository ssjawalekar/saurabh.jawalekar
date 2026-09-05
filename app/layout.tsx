import './globals.css';
import type {Metadata} from 'next';
import {Fraunces,Inter} from 'next/font/google';
import {profile} from '../data/site';

const display=Fraunces({subsets:['latin'],weight:['400','500','600'],style:['normal','italic'],variable:'--font-display',display:'swap'});
const sans=Inter({subsets:['latin'],weight:['400','500','600','700','800','900'],variable:'--font-sans',display:'swap'});

export const metadata:Metadata={title:`${profile.name} | ${profile.title}`,description:profile.summary,openGraph:{title:`${profile.name} | ${profile.title}`,description:profile.summary,type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${display.variable} ${sans.variable}`}><body>{children}</body></html>}
