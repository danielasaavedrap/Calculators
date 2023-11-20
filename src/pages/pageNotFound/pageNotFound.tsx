import { useNavigate } from "react-router";
import { Button } from "../../widgets/button/button";
import "./pageNotFound-style.css";

export const PageNotFound = () => {
  const navigate = useNavigate();

  const goIndex = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="pageNotFound">
      <h1 className="title">PAGE NOT FOUND</h1>
      <p className="subtitle" style={{ marginTop: "15px" }}>
        Are you sure the website URL is correct ?
      </p>
      <div style={{ marginTop: "60px" }}>
        <Button text="Go back" section="03" width="150px" size="medium" onclick={goBack} />
        <Button text="Go Home" section="03" width="150px" size="medium" onclick={goIndex} />
      </div>
    </div>
  );
};
