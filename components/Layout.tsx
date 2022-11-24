import Link from 'next/link'

export default function Layout({children}: any) {
    return (
        <>
            <nav className={'nav'}>
                <div className={'nav-element'}>
                    <span><Link href="/">HOME</Link></span>
                    <span><Link href="/post">POST</Link></span>
                    <span><Link href="/about">ABOUT</Link></span>
                </div>
                <span><Link href="/admin">ADMIN</Link></span>
            </nav>
            <div style={{width: '100%', height: '40px'}}></div>
            {children}
            <footer className={'footer'}>
                <span>Testing blog page whit Next.js</span>
            </footer>
        </>
    )
}
