'use client';
import {useEffect,useState} from 'react';
export default function ThemeToggle(){const [dark,setDark]=useState(false);useEffect(()=>{const v=localStorage.getItem('sj-theme')==='dark';setDark(v);document.documentElement.dataset.theme=v?'dark':'light'},[]);function toggle(){const n=!dark;setDark(n);document.documentElement.dataset.theme=n?'dark':'light';localStorage.setItem('sj-theme',n?'dark':'light')}return <button className="theme" onClick={toggle} aria-label="Toggle theme">{dark?'☀':'☾'}</button>}
