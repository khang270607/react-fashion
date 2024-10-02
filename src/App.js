import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './views/Home/Home';
import About from './views/About/About';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
          <Route path="/about" element={<DefaultLayout><About /></DefaultLayout>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
