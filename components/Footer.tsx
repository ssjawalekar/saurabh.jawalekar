import {profile} from '../data/site';
export default function Footer(){return <footer className="wrap"><span>© 2026 Saurabh Jawalekar</span><span><a href={`mailto:${profile.email}`}>Email</a> · <a href={profile.linkedin}>LinkedIn</a> · <a href={profile.blog}>Blog archive</a></span></footer>}
