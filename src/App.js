import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routes from "./routes";
import { DefaultLayout } from "./layout/DefaultLayout";

const App = () => (
  <Router>
    <div className="App">
      <Routes>
        {routes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </div>
  </Router>
);

export default App;
