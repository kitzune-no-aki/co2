import "./index.css"
import Co2Table from "./components/co2table/newTable";
import Home from "./components/Home/home";
import Co2TableCountry from "./components/secondTable/secondTable";
import { Route, Routes } from "react-router-dom";
import rows from './components/co2table/columns';
import rowsCountry from "./components/secondTable/columns2";

function App() {
    const columns = [
        {'label' : 'Company', accessor: 'Company'},
        {'label' : 'Country', accessor: 'Land'},
        {'label' : 'Consumptions in tons',accessor: 'Consumptions_in_tons'},
    ];
    const columnsCountry = [
        {'label' : 'Country', accessor : 'Country'},
        {'label' : 'Consumptions in Milliarden Tons', accessor: 'Consumptions_mil_tons'}
    ]
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path="/Co2Table" element={<Co2Table rows={rows} columns={columns}  />} />
                <Route path="/Co2TableCountry" element={<Co2TableCountry rows={rowsCountry} columns={columnsCountry}  />} />
            </Routes>
        </div>
    );
}

export default App;
