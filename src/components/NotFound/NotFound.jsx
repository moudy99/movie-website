import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="display-1">404</h1>
        <p className="lead">Oops! Page not found</p>
        <p className="lead">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <p className="lead">
          Go back to{" "}
          <a href="/" className="text-primary">
            Home
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
