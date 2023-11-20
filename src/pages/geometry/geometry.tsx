import { useState } from "react";
import { Button } from "../../widgets/button/button";
import "./geometry-style.css";

type sectionGeometryType = {
  number: string;
  title: string;
}[];
type valuesTriangle = {
  side1: string;
  side2: string;
  base: string;
  width: string;
};
const SquareForm = () => {
  const [result, setResult] = useState<string>("");
  const [valueSquare, setValueSquare] = useState<string>("");

  const perimeter = () => {
    const perimeterValue = Number(valueSquare) * 4;
    setResult("The perimeter is " + perimeterValue + " cm");
  };
  const area = () => {
    const areaValue = Number(valueSquare) * Number(valueSquare);
    setResult("The area is " + areaValue + " cm2");
  };
  const volume = () => {
    const volumeValue =
      Number(valueSquare) * Number(valueSquare) * Number(valueSquare);
    setResult("The volume is " + volumeValue + " cm3");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <label htmlFor="squareSides" className="text">
          Square sides:
        </label>
        <input
          type="number"
          id="squareSides"
          value={valueSquare}
          onChange={(event) => setValueSquare(event.target.value)}
        />
        <p className="text">cm</p>
      </div>

      <div className="buttons">
        <div style={{ justifyContent: "space-between" }}>
          <Button
            text="Perimeter"
            section="01"
            width="150px"
            size="medium"
            onclick={perimeter}
            disabled={valueSquare === ""}
          />
          <Button
            text="Area"
            section="01"
            width="150px"
            size="medium"
            onclick={area}
            disabled={valueSquare === ""}
          />
        </div>
        <Button
          text="Volume"
          section="01"
          width="310px"
          size="medium"
          onclick={volume}
          disabled={valueSquare === ""}
        />
      </div>
      <p className="subtitle">{result}</p>
    </form>
  );
};

const TriangleForm = () => {
  const [result, setResult] = useState<string>("");
  const [valueTriangle, setValueTriangle] = useState<valuesTriangle>({
    side1: "",
    side2: "",
    base: "",
    width: "",
  });

  const perimeter = () => {
    const perimeterValue =
      Number(valueTriangle.side1) +
      Number(valueTriangle.side2) +
      Number(valueTriangle.base);
    setResult("The perimeter is " + perimeterValue + " cm");
  };
  const area = () => {
    if (valueTriangle.side1.length > 0 && valueTriangle.base.length > 0) {
      const height = Math.sqrt(
        Number(valueTriangle.side1) * Number(valueTriangle.side1) -
          (Number(valueTriangle.base) / 2) * (Number(valueTriangle.base) / 2)
      );
      const areaValue = ((Number(valueTriangle.base) * height) / 2).toFixed(2);
      setResult("The area is " + areaValue + " cm2");
    } else {
      setResult("Please write a valid value");
    }
  };
  const volume = () => {
    const height = Math.sqrt((Number(valueTriangle.side2) ** 2) - ((Number(valueTriangle.base) / 2) ** 2));
    
    const volumeValue = (
      Number(valueTriangle.width) *
      Number(valueTriangle.base) *
      height
    ).toFixed(2);
    setResult("The volume is " + volumeValue + " cm3");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label htmlFor="triangleSide1" className="text">
            Side 1:
          </label>
          <input
            type="number"
            id="triangleSide1"
            value={valueTriangle.side1}
            onChange={(event) =>
              setValueTriangle({
                ...valueTriangle,
                side1: event.target.value,
              })
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "15px",
          }}
        >
          <label htmlFor="triangleSide2" className="text">
            Side 2:
          </label>
          <input
            type="number"
            id="triangleSide2"
            value={valueTriangle.side2}
            onChange={(event) =>
              setValueTriangle({
                ...valueTriangle,
                side2: event.target.value,
              })
            }
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label htmlFor="triangleBase" className="text">
            Base:
          </label>
          <input
            type="number"
            id="triangleBase"
            value={valueTriangle.base}
            onChange={(event) =>
              setValueTriangle({
                ...valueTriangle,
                base: event.target.value,
              })
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "15px",
          }}
        >
          <label htmlFor="triangleWidth" className="text">
            Width:
          </label>
          <input
            type="number"
            id="triangleWidth"
            value={valueTriangle.width}
            onChange={(event) =>
              setValueTriangle({
                ...valueTriangle,
                width: event.target.value,
              })
            }
          />
        </div>
      </div>

      <div className="buttons">
        <div style={{ justifyContent: "space-between" }}>
          <Button
            text="Perimeter"
            section="02"
            width="150px"
            size="medium"
            onclick={perimeter}
            disabled={Object.values(valueTriangle).includes("")}
          />
          <Button
            text="Area"
            section="02"
            width="150px"
            size="medium"
            onclick={area}
            disabled={Object.values(valueTriangle).includes("")}
          />
        </div>
        <Button
          text="Volume"
          section="02"
          width="310px"
          size="medium"
          onclick={volume}
          disabled={Object.values(valueTriangle).includes("")}
        />
      </div>
      <p className="subtitle">{result}</p>
    </form>
  );
};

const CircleForm = () => {
  const [result, setResult] = useState<string>("");
  const [valueCircle, setValueCircle] = useState<string>("");

  const perimeter = () => {
    const perimeterValue = (2 * Math.PI * Number(valueCircle)).toFixed(2);
    setResult("The perimeter is " + perimeterValue + " cm");
  };
  const area = () => {
    const areaValue = (
      Math.PI *
      Number(valueCircle) *
      Number(valueCircle)
    ).toFixed(2);
    setResult("The area is " + areaValue + " cm2");
  };
  const volume = () => {
    const volumeValue = (
      (4 *
        Math.PI *
        Number(valueCircle) *
        Number(valueCircle) *
        Number(valueCircle)) /
      3
    ).toFixed(2);
    setResult("The volume is " + volumeValue + " cm3");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <label htmlFor="CircleRadius" className="text">
          Circle sides:
        </label>
        <input
          type="number"
          id="CircleRadius"
          value={valueCircle}
          onChange={(event) => setValueCircle(event.target.value)}
        />
        <p className="text">cm</p>
      </div>

      <div className="buttons">
        <div style={{ justifyContent: "space-between" }}>
          <Button
            text="Perimeter"
            section="03"
            width="150px"
            size="medium"
            onclick={perimeter}
            disabled={valueCircle === ""}
          />
          <Button
            text="Area"
            section="03"
            width="150px"
            size="medium"
            onclick={area}
            disabled={valueCircle === ""}
          />
        </div>
        <Button
          text="Volume"
          section="03"
          width="310px"
          size="medium"
          onclick={volume}
          disabled={valueCircle === ""}
        />
      </div>
      <p className="subtitle">{result}</p>
    </form>
  );
};

export const Geometry = () => {
  const sectionGeometry: sectionGeometryType = [
    {
      number: "01",
      title: "Square",
    },
    {
      number: "02",
      title: "Triangle",
    },
    {
      number: "03",
      title: "Circle",
    },
  ];

  return (
    <div className="geometry">
      {sectionGeometry.map((geometry) => {
        return (
          <div
            className={`geometrySection sec-${geometry.number}`}
            key={geometry.number}
          >
            <h1 className="title">{geometry.title}</h1>
            <p className="subtitle">
              Let's calculate the area, perimeter and volume of a{" "}
              {geometry.title}!
            </p>
            <p className="text" style={{ padding: "0px 4vw" }}>
              Enter the following {geometry.title} measurements and press the
              calculate button
            </p>
            {geometry.title === "Square" && SquareForm()}
            {geometry.title === "Triangle" && TriangleForm()}
            {geometry.title === "Circle" && CircleForm()}
          </div>
        );
      })}
    </div>
  );
};
