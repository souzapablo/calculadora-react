import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (value) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${value}`);
  };

  const handleOperation = (operation) => {
    if (firstNumber === "0") {
      setOperation(operation);
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
    }
  };

  const handleSquareRoot = () => {
    setCurrentNumber((prev) => String(Math.sqrt(prev)));
    setOperation("");
  };

  const handleOperationEnd = (currentNumber) => {
    setCurrentNumber(currentNumber);
    setFirstNumber("0");
    setOperation("");
  };

  const handleEquals = () => {
    switch (operation) {
      case "+":
        const sum = Number(firstNumber) + Number(currentNumber);
        handleOperationEnd(String(sum));
        break;
      case "-":
        const sub = Number(firstNumber) - Number(currentNumber);
        handleOperationEnd(String(sub));
        break;
      case "x":
        const product = Number(firstNumber) * Number(currentNumber);
        handleOperationEnd(String(product));
        break;
      case "÷":
        const division = Number(firstNumber) / Number(currentNumber);
        handleOperationEnd(String(division));
        break;
      case "%":
        const percentage = (Number(firstNumber) * Number(currentNumber)) / 100;
        handleOperationEnd(String(percentage));
        break;
      default:
        handleClear();
        break;
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber("7")} />
          <Button label={"8"} onClick={() => handleAddNumber("8")} />
          <Button label={"9"} onClick={() => handleAddNumber("9")} />
          <Button label={"%"} onClick={() => handleOperation("%")} />
          <Button label={"√"} onClick={() => handleSquareRoot()} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber("4")} />
          <Button label={"5"} onClick={() => handleAddNumber("5")} />
          <Button label={"6"} onClick={() => handleAddNumber("6")} />
          <Button label={"x"} onClick={() => handleOperation("x")} />
          <Button label={"÷"} onClick={() => handleOperation("÷")} />
        </Row>
        <Row>
          <Button label={1} onClick={() => handleAddNumber("1")} />
          <Button label={2} onClick={() => handleAddNumber("2")} />
          <Button label={3} onClick={() => handleAddNumber("3")} />
          <Button label={"+"} onClick={() => handleOperation("+")} />
          <Button label={"-"} onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Button label={"0"} onClick={() => handleAddNumber("0")} />
          <Button label={"="} onClick={() => handleEquals()} />
          <Button label={"C"} onClick={() => handleClear()} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
