import "./index.css"
import Co2Table from "./components/co2table/newTable";
import Home from "./components/Home/home";
import { Route, Routes } from "react-router-dom";
import rows from './components/co2table/columns';

function App() {
    const columns = [
        {'label' : 'Company', accessor: 'Company'},
        {'label' : 'Country', accessor: 'Land'},
        {'label' : 'Consumptions in tons',accessor: 'Consumptions_in_tons'},
    ];
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path="/Co2Table" element={<Co2Table rows={rows} columns={columns}  />} />
            </Routes>
        </div>
    );
}

export default App;
