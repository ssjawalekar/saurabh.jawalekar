import './globals.css';
import type {Metadata} from 'next';
import {profile} from '../data/site';
export const metadata:Metadata={title:`${profile.name} | ${profile.title}`,description:profile.summary,openGraph:{title:`${profile.name} | ${profile.title}`,description:profile.summary,type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
