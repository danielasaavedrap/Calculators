import { useNavigate } from "react-router";
import { Button } from "../../widgets/button/button";
import "./process-style.css";

export const Process = () => {
  const navigate = useNavigate();

  const goIndex = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="process">
      <h1 className="title">Page in process</h1>
      <p className="subtitle" style={{ marginTop: "15px" }}>
        Please, be patient
      </p>
      <div style={{ marginTop: "60px" }}>
        <Button text="Go back" section="04" width="150px" size="medium" onclick={goBack} />
        <Button text="Go Home" section="04" width="150px" size="medium" onclick={goIndex} />
      </div>
    </div>
  );
};
