import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import Router from "./Router/Router";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
