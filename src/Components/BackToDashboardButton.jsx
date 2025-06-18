import { useNavigate } from "react-router-dom";
import '../App.css';
export default function BackToDashboardButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/userdashboard")} className="backButton">
      ← Back to Dashboard
    </button>
  );
}
