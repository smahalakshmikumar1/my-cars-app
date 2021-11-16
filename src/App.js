import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MyMakesComponent = React.lazy(() =>
  import("./components/myMakes/MyMakes")
);
const MyModelsComponent = React.lazy(() =>
  import("./components/myModels/MyModels")
);
const MyVehiclesComponent = React.lazy(() =>
  import("./components/myVehicles/MyVehicles")
);
const MyDetailsComponent = React.lazy(() =>
  import("./components/myDetails/MyDetails")
);

//implementing Lazy loading in components
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route component={MyMakesComponent} path="/" exact={true} />
              <Route component={MyModelsComponent} path="/models" />
              <Route component={MyVehiclesComponent} path="/vehicles" />
              <Route component={MyDetailsComponent} path="/details" />
            </Suspense>
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
