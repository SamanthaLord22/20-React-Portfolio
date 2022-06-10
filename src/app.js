import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";


function App() {
    const [currentPage, setCurrentPage] = useState("Portfolio");

    const renderPage = () => {
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
    };
    const handlePage = (page) => setPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePage={handlePage} />
            {renderPage()}
            <Footer currentPage={currentPage} />
        </div>
    );
}

export default App;