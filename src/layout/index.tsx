import Navbar from "../components/Navbar";
import LanguageProvider from "../contexts/langContext";
import ThemeProvider from "../contexts/themeContext";

function BaseLayout({ children }: { children: React.ReactNode }) {
    return <ThemeProvider>
        <LanguageProvider>
            <Navbar />
            {children}
        </LanguageProvider>
    </ThemeProvider>;
}


export default BaseLayout;