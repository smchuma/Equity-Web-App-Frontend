import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate
            to="/login"
            state={{ from: props.location }}
            replace={true}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
