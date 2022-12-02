import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './Card';
import Page2 from './Page2';

export default function Routing () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/page2" exact="false" element={<Page2 />} />
            </Routes>
        </BrowserRouter>
    )
}