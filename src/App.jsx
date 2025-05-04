import { Route, Routes } from "react-router-dom";
import AnalyticsPage from "./pages/AnalyticsPage";
import OverviewPage from "./pages/OverviewPage";


export default function App() {
    return <>

        <Routes>
            <Route path='/' element={<AnalyticsPage />} />
            <Route path='overview' element={<OverviewPage />} />
        </Routes>
    
    </>
    
    
}