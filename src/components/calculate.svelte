<script lang="ts">
  import CalculateModel from "../model/calculate.model";
  import Button from "./button.svelte";
  import Display from "./display.svelte";
  import Row from "./row.svelte";

  let calc = new CalculateModel();

  const handleDigitNumber = (newNumber: string) =>
    (calc = calc.digitNumber(newNumber));

  const handleDigitDot = () => (calc = calc.digitDot());
  const handleDigitAC = () => (calc = calc.digitAC());
  const handleDigitOperation = (operation: string) =>
    (calc = calc.digitOperation(operation));
  const handleDigitEquals = () => (calc = calc.digitEquals());

  function handleDigitKeyboard(event: KeyboardEvent) {
    const key = event.key;
    const number = parseInt(key);
    const operation = ["+", "-", "*", "/"].includes(key);
    if (number) {
      handleDigitNumber(key);
    } else if (operation) {
      handleDigitOperation(key);
    } else if (key === "=" || key === "Enter") {
      handleDigitEquals();
    } else if (key === "Backspace" || key === "Delete") {
      handleDigitAC();
    } else if (key === ".") {
      handleDigitDot();
    }
  }

  window.addEventListener("keyup", handleDigitKeyboard);
</script>

<div class="calculate">
  <Display valeu={calc.value} accumulator={calc.expretion} />
  <Row>
    <Button onClick={handleDigitAC} text="AC" triple featured />
    <Button onClick={handleDigitOperation} text="/" operation />
  </Row>
  <Row>
    <Button onClick={handleDigitNumber} text="7" />
    <Button onClick={handleDigitNumber} text="8" />
    <Button onClick={handleDigitNumber} text="9" />
    <Button onClick={handleDigitOperation} text="*" operation />
  </Row>
  <Row>
    <Button onClick={handleDigitNumber} text="4" />
    <Button onClick={handleDigitNumber} text="5" />
    <Button onClick={handleDigitNumber} text="6" />
    <Button onClick={handleDigitOperation} text="+" operation />
  </Row>
  <Row>
    <Button onClick={handleDigitNumber} text="1" />
    <Button onClick={handleDigitNumber} text="2" />
    <Button onClick={handleDigitNumber} text="3" />
    <Button onClick={handleDigitOperation} text="-" operation />
  </Row>
  <Row>
    <Button onClick={handleDigitNumber} text="0" double />
    <Button onClick={handleDigitDot} text="," />
    <Button onClick={handleDigitEquals} text="=" featured />
  </Row>
</div>

<style>
  .calculate {
    height: 220px;
    width: 150px;
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
  }
</style>
