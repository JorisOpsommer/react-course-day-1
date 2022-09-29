import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "40px" }}>404</h1>
      <h2>Page not found!</h2>
      <button onClick={() => navigate("/")}>HOME</button>
    </div>
  );
};

export default PageNotFound;
