import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
    if ("userlog" in localStorage) {
      localStorage.removeItem("userlog");
    }
  };

  return (
    <nav>
      <button id="btn__exit--navbar" onClick={handleClick}>
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/2760/2760599.png"
        />
      </button>
    </nav>
  );
};

export default Navbar;
