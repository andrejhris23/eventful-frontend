import { ReactNode } from 'react';
import Navigation from './navigation';

type LayoutProps = {
    children?: ReactNode
}

export default function Layout ({children}: LayoutProps) {
    
    return (
        <div className='min-h-full'>
            <Navigation />
            {children}
        </div>
    )
}