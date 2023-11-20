import { useState } from "react";
import { Button } from "../../widgets/button/button";
import "./statistic-style.css";

type sectionStatisticType = {
  number: string;
  title: string;
}[];

const Mean = () => {
  const [valueNumber, setValueNumber] = useState<string>("");
  const [arrayNumbers, setArrayNumbers] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");

  const add = () => {
    setArrayNumbers([...arrayNumbers, valueNumber]);
  };

  const arithmeticMean = () => {
    let sumNumbers = 0;
    arrayNumbers.forEach((valueNumber) => {
      sumNumbers += Number(valueNumber);
    });
    const meanValue = (sumNumbers / arrayNumbers.length).toFixed(2);
    setResult("The arithmetic mean is " + meanValue);
  };

  const geometricMean = () => {
    let multiplyNumbers = 1;
    arrayNumbers.forEach((valueNumber) => {
      multiplyNumbers *= Number(valueNumber);
    });
    const meanValue = Math.pow(
      multiplyNumbers,
      1 / arrayNumbers.length
    ).toFixed(2);
    setResult("The geometric mean is " + meanValue);
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
        <label htmlFor="numberMean" className="text">
          Number:
        </label>
        <input
          type="number"
          id="numberMean"
          value={valueNumber}
          onChange={(event) => setValueNumber(event.target.value)}
        />
      </div>

      <div className="buttons">
        <Button
          text="Add number"
          section="01"
          width="310px"
          size="medium"
          onclick={add}
          disabled={valueNumber.length === 0}
        />
        {arrayNumbers.length > 0 && (
          <p className="text" style={{ margin: "15px", maxWidth: "250px" }}>
            Numbers:
            {arrayNumbers.map((number, input) => {
              const space = input !== arrayNumbers.length - 1 ? " - " : "";
              return " " + number + space;
            })}
          </p>
        )}
        <div style={{ justifyContent: "space-between" }}>
          <Button
            text="Arithmetic mean"
            section="01"
            width="150px"
            size="medium"
            onclick={arithmeticMean}
            disabled={arrayNumbers.length < 2}
          />
          <Button
            text="Geometric mean"
            section="01"
            width="150px"
            size="medium"
            onclick={geometricMean}
            disabled={arrayNumbers.length < 2}
          />
        </div>
      </div>
      <p className="subtitle">{result}</p>
    </form>
  );
};

const MedianMode = () => {
  const [valueNumber, setValueNumber] = useState<string>("");
  const [arrayNumbers, setArrayNumbers] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");

  const add = () => {
    setArrayNumbers([...arrayNumbers, valueNumber]);
  };

  const media = () => {
    const convertArray = arrayNumbers.map((value) => {
      return Number(value);
    });
    const orderList = convertArray.sort(function (a, b) {
      return a - b;
    });
    const middle: number = Math.trunc(orderList.length / 2);

    if (orderList.length % 2 === 0) {
      const mediaList = (orderList[middle] + orderList[middle - 1]) / 2;
      setResult("The media is " + mediaList);
    } else {
      setResult("The media is " + orderList[middle]);
    }
  };

  const mode = () => {
    const convertArray = arrayNumbers.map((value) => {
      return Number(value);
    });
    const frequencyMap: { [key: number]: number } = {};
    let maxFrequency = 0;
    let mostDuplicate: number | null = null;

    convertArray.forEach((value) => {
      frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });

    for (const num in frequencyMap) {
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        mostDuplicate = parseInt(num, 10);
      }
    }
    setResult("The mode is " + mostDuplicate);
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
        <label htmlFor="numberMean" className="text">
          Number:
        </label>
        <input
          type="number"
          id="numberMean"
          value={valueNumber}
          onChange={(event) => setValueNumber(event.target.value)}
        />
      </div>
      <div className="buttons">
        <Button
          text="Add number"
          section="02"
          width="310px"
          size="medium"
          onclick={add}
          disabled={valueNumber.length === 0}
        />
        {arrayNumbers.length > 0 && (
          <p className="text" style={{ margin: "15px", maxWidth: "250px" }}>
            Numbers:
            {arrayNumbers.map((number, input) => {
              const space = input !== arrayNumbers.length - 1 ? " - " : "";
              return " " + number + space;
            })}
          </p>
        )}
        <div style={{ justifyContent: "space-between" }}>
          <Button
            text="Media"
            section="02"
            width="150px"
            size="medium"
            onclick={media}
            disabled={arrayNumbers.length < 2}
          />
          <Button
            text="Mode"
            section="02"
            width="150px"
            size="medium"
            onclick={mode}
            disabled={arrayNumbers.length < 2}
          />
        </div>
      </div>
      <p className="subtitle">{result}</p>
    </form>
  );
};

const VarianceDeviation = () => {
  const [valueNumber, setValueNumber] = useState<string>("");
  const [arrayNumbers, setArrayNumbers] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");

  const add = () => {
    setArrayNumbers([...arrayNumbers, valueNumber]);
  };

  const variance = () => {
    let sumNumbers = 0;

    arrayNumbers.forEach((valueNumber) => {
      sumNumbers += Number(valueNumber);
    });

    const media = Number((sumNumbers / arrayNumbers.length).toFixed(2));
    const value1 = arrayNumbers.map((number: string) => (Number(number) - media) ** 2);
    const value2 = value1.reduce((valAc = 0, ele) => valAc + ele);
    const variance = Number((value2 / arrayNumbers.length).toFixed(2));

    setResult("The variance is " + variance);
  };

  const deviation = () => {
    let sumNumbers = 0;
    arrayNumbers.forEach((valueNumber) => {
      sumNumbers += Number(valueNumber);
    });

    const media = Number((sumNumbers / arrayNumbers.length).toFixed(2));
    const value1 = arrayNumbers.map((number: string) => (Number(number) - media) ** 2);
    const value2 = value1.reduce((valAc = 0, ele) => valAc + ele);
    const variance = Number((value2 / arrayNumbers.length).toFixed(2));

    const deviation = Math.sqrt(variance).toFixed(2);
    setResult("The deviation is " + deviation);
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
        <label htmlFor="numberMean" className="text">
          Number:
        </label>
        <input
          type="number"
          id="numberMean"
          value={valueNumber}
          onChange={(event) => setValueNumber(event.target.value)}
        />
      </div>

      <div className="buttons">
        <Button
          text="Add number"
          section="03"
          width="310px"
          size="medium"
          onclick={add}
          disabled={valueNumber.length === 0}
        />
        {arrayNumbers.length > 0 && (
          <p className="text" style={{ margin: "15px", maxWidth: "250px" }}>
            Numbers:
            {arrayNumbers.map((number, input) => {
              const space = input !== arrayNumbers.length - 1 ? " - " : "";
              return " " + number + space;
            })}
          </p>
        )}
        <div style={{ justifyContent: "space-between" }}>
          <Button
            text="Variance"
            section="03"
            width="150px"
            size="medium"
            onclick={variance}
            disabled={arrayNumbers.length < 2}
          />
          <Button
            text="Deviation"
            section="03"
            width="150px"
            size="medium"
            onclick={deviation}
            disabled={arrayNumbers.length < 2}
          />
        </div>
      </div>
      <p className="subtitle">{result}</p>
    </form>
  );
};

export const Statistic = () => {
  const sectionStatistic: sectionStatisticType = [
    {
      number: "01",
      title: "Mean",
    },
    {
      number: "02",
      title: "Median and mode",
    },
    {
      number: "03",
      title: "Variance and deviation",
    },
  ];
  return (
    <div className="statistics">
      {sectionStatistic.map((statistic) => {
        return (
          <div
            className={`statisticSection sec-${statistic.number}`}
            key={statistic.number}
          >
            <h1 className="title">{statistic.title}</h1>
            <p className="subtitle">Let's calculate the {statistic.title}</p>
            <p className="text" style={{ padding: "0px 4vw" }}>
              Enter number by number the group you want to analyze and press the
              add button. When you have finished, click on the calculate button
            </p>
            {statistic.title === "Mean" && Mean()}
            {statistic.title === "Median and mode" && MedianMode()}
            {statistic.title === "Variance and deviation" &&
              VarianceDeviation()}
          </div>
        );
      })}
    </div>
  );
};
