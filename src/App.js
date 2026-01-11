import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import MyVolunteering from "./pages/MyVolunteering";
import { Toaster } from "./components/ui/sonner";
import CityHistory from "./pages/CityHistory"
import Personalities from "./pages/Personalities";
import PlacesToVisit from "./pages/PlacesToVisit";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/personalities" element={<Personalities />} />
                    <Route path="/places" element={<PlacesToVisit />} />
                    <Route path="/events/:id" element={<EventDetail />} />
                    <Route path="/city-history" element={<CityHistory />} />
                    <Route path="/my-volunteering" element={<MyVolunteering />} />
                </Routes>
                <Footer />
                <Toaster />
            </BrowserRouter>
        </div>
    );
}

export default App;
