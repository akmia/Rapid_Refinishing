//src/components/common/estimatebutton/estimateButton.jsx
import { useNavigate } from "react-router-dom";

export default function Button({
  children,
  onClick,
  type = "button",
}) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (typeof onClick === "function") {
      onClick(event);
    }

    navigate("/contact");
  };

  return (
    <button
      className="primary-btn"
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
}

