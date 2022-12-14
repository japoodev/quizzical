import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <div className="flex flex-col h-full">
                <Header />
                <main className="flex-1 flex flex-col justify-center items-center">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout