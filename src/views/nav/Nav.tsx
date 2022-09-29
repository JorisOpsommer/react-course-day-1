import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <AppBar>
      <AppBarFlex>
        <AppBarItem>
          <img
            alt="logo coinmarketcap"
            src="https://assets-global.website-files.com/5f15b50525745912903311ad/5f15b505dd58c115cd49d484_Logo-full-white.svg"
            width={150}
            onClick={() => navigate("/")}
          />
        </AppBarItem>
        <AppBarItem onClick={() => navigate("/")}>CRYPTOCURRENCIES</AppBarItem>
        <AppBarItem style={{ justifyContent: "flex-end" }} onClick={() => navigate("/")}>
          WATCHLIST
        </AppBarItem>
      </AppBarFlex>
    </AppBar>
  );
};

export default Nav;

const AppBar = styled.div`
  height: 60px;
  color: white;
  background-color: #1976d2;
`;

const AppBarFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const AppBarItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 15px;
  margin: 1rem;
`;
