//! Esercizio
/*Ora è il momento di prepararci al frontend della nostra Web App!
 
 //! MILESTONE 1

    Mettiamo su un nuovo progetto React aiutandoci con Vite
    Ripuliamo come sempre l’app da file e codice di esempio non necessari
    Installiamo il necessario: React Router, Axios e Bootstrap (se volete utilizzarlo)

//! MILESTONE 2

    Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.
    Creiamo 2 pagine:
        La home, in cui mostreremo la lista dei film
        La pagina di dettaglio di un singolo film

//! MILESTONE 3

    Configuriamo l’app di backend (repo webapp-express) a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware CORS
    Proviamo quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei libri

//! MILESTONE 4

    In ultimo, effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni

//! Bonus

    Impostare la struttura del lavoro in maniera da sfruttare la riutailizzabilità dei componenti React e le loro props!
    Curare l’aspetto estetico della vostra applicazione */

//! Esercizio
/*Miglioriamo l’esperienza dell’utente inserendo

//! MILESTONE 1 (BACKEND)
Predisponiamo un’API per salvare nel database una nuova recensione legata ad un film
Testiamola su postman e verifichiamo che nel DB venga effettivamente inserita una nuova recensione

//! MILESTONE 2 (FRONTEND)
Creiamo un componente che contenga il form per le recensioni
Inseriamo questo componente nella pagina di dettaglio del film
All’invio del form, la nuova recensione viene salvata sul database e visualizzata nella pagina, in fondo alle altre

//! BONUS:
Inseriamo una validazione nel form di recensione */

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DefaultLayout from "./layouts/DefaultLayout";
import IndexMovie from "./pages/movies/IndexMovie";
import ShowMovie from "./pages/movies/ShowMovie";
import NotFound from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} path="/">
            <Route index element={<HomePage />}></Route>
            <Route path="about" element={<AboutPage />}></Route>
            {/* 404 */}
            <Route path="*" element={<NotFound />}></Route>

            <Route path="movies">
              {/* Index Page */}
              <Route index element={<IndexMovie />}></Route>
              {/* Show Page */}
              <Route path=":id" element={<ShowMovie />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
