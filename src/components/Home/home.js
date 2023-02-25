import React from "react";
import "./home.css";
import BurgerNav from "../navbar/navbar";
import Footer from "../footer/footer";

const Home = () => {
    return(
        <div>
            <BurgerNav></BurgerNav>
            <div className='homeText'>
                <h1>Kohlenstoffdioxid</h1>
                <div className='wikiText'>
                    "Kohlenstoffdioxid oder Kohlendioxid (CO2) ist eine chemische Verbindung aus Kohlenstoff und Sauerstoff.
                    CO2 ist ein nicht brennbares, saures und farbloses Gas. Da es sich gut in Wasser löst, wird es
                    umgangssprachlich manchmal fälschlicherweise auch „Kohlensäure“ genannt. Mit basischen Metalloxiden
                    oder -hydroxiden kann es Carbonate und Hydrogencarbonate bilden.
                </div>
                <div className='wikiText'>
                    CO2 ist ein elementarer Bestandteil des globalen Kohlenstoffzyklus, ein natürlicher Bestandteil der Luft
                    und ein wichtiges Treibhausgas in der Erdatmosphäre: Durch menschliche Aktivitäten, insbesondere durch
                    die Verbrennung fossiler Energieträger, stieg der Anteil von Kohlendioxid in der Erdatmosphäre von ca.
                    280 parts per million (ppm, Teile pro Million) zu Beginn der Industrialisierung auf 407,8 ppm im Jahr
                    2018 an.[12][13] Im Mai 2019 wurde in der NOAA-Messstation Mauna Loa in Hawaii ein Monatsdurchschnitt
                    von rund 415 ppm gemessen,[14][15] Tendenz weiter steigend.[16] Dieser Anstieg bewirkt eine Verstärkung
                    des Treibhauseffekts und führt zur aktuellen globalen Erwärmung.[17] Pro Tag werden ca. 100 Mio. Tonnen
                    Kohlenstoffdioxid durch menschliche Aktivitäten in die Atmosphäre freigesetzt (Stand 2020).[18]
                </div>
                <div className='wikiText'>
                    Unter ausreichender Sauerstoffzufuhr entsteht CO2 sowohl bei der Verbrennung kohlenstoffhaltiger
                    Substanzen als auch im Organismus von Lebewesen als Produkt der Zellatmung. Pflanzen, Algen sowie
                    manche Bakterien und Archaeen wandeln CO2 durch Fixierung (Kohlenstoffdioxid-Assimilation) in Biomasse
                    um. Bei der Photosynthese entsteht aus anorganischem CO2 und Wasser Glucose.
                </div>
                <div className='wikiText'>
                    CO2 kann giftig wirken. Die Konzentrationen in der Luft oder Mengen durch die Aufnahme von beispielsweise
                    Limonade reichen hierfür aber bei weitem nicht aus. CO2 hat ein breites technisches Anwendungsspektrum:
                    In der chemischen Industrie z. B. wird es zur Gewinnung von Harnstoff eingesetzt. In fester Form als
                    Trockeneis wird es als Kühlmittel verwendet, überkritisches Kohlenstoffdioxid dient als Löse- und Extraktionsmittel."
                </div>
                <div className='textFrom'>Text from: <a href='https://de.wikipedia.org/wiki/Kohlenstoffdioxid'>wikipedia</a></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home;