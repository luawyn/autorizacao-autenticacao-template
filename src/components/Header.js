import { useNavigate } from "react-router-dom";
import { navigateToAdmin, navigateToHome } from "../routes/coordinator";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => navigateToHome(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={() => navigateToAdmin(navigate)}>
        Ir para página de admin
      </button>
    </header>
  );
}

export default Header;
