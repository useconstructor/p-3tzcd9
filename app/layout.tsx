import type {Metadata} from 'next';import {Cormorant_Garamond,DM_Sans} from 'next/font/google';import './globals.css';
const serif=Cormorant_Garamond({subsets:['latin'],variable:'--serif',weight:['400','600'],style:['normal','italic']});const sans=DM_Sans({subsets:['latin'],variable:'--sans'});
export const metadata:Metadata={title:'GreenVine | Bring Nature Indoors',description:'Curated indoor plants and expert care, delivered.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>}
