import React, { StrictMode, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { default as homeStore } from "./pages/home/application";

// NOTE https://reactjs.org/docs/code-splitting.html#reactlazy
const HomePage = React.lazy(
  () => import("./pages/home/presentation/components")
);

export default function Root(props) {
  return (
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route path="/pages/test" exact>
              <Provider store={homeStore}>
                <HomePage />
              </Provider>
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </StrictMode>
  );
}
