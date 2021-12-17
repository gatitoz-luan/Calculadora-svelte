const NOT_CLEAR_DISPLAY = false;
const CLEAR_DISPLAY = true;

export default class CalculateModel {
  #value: string
  #accumulator: number
  #operation: string
  #clearDisplay: boolean
  #expretion: string

  constructor(
    value: string = null,
    accumulator: number = null,
    operation: string = null,
    clearDisplay: boolean = false,
    expretion: string = ""
  ) {
    this.#value = value
    this.#accumulator = accumulator
    this.#operation = operation
    this.#clearDisplay = clearDisplay
    this.#expretion = expretion
  }


  get value(): string {
    return this.#value?.replace('.', ',') || '0'
  }

  get accumulator(): number {
    return this.#accumulator
  }

  get clearScreeen(): boolean {
    return this.#clearDisplay
  }

  get operation(): string {
    return this.#operation
  }

  get expretion(): string {
    return this.#expretion
  }

  digitNumber(newValeu: string) {
    return new CalculateModel(
      (this.#clearDisplay || !this.#value) ? newValeu : this.#value + newValeu,
      this.#accumulator,
      this.#operation,
      NOT_CLEAR_DISPLAY
    )
  }

  digitDot() {
    return new CalculateModel(
      (this.#clearDisplay || this.#value?.includes('.')) ? this.#value : this.value + ".",
      this.#accumulator,
      this.#operation,
      NOT_CLEAR_DISPLAY
    )
  }

  digitAC() {
    return new CalculateModel()
  }

  digitOperation(nextOperation: string) {
    return this.evaluete(nextOperation)
  }

  digitEquals() {
    return this.evaluete()
  }

  evaluete(nextOperation: string = null) {
    const expretion = `${this.#accumulator} ${this.#operation} ${this.#value}`
    const accumulator = !this.#operation
      ? parseFloat(this.#value)
      : eval(expretion)
    const value = !this.#operation ? this.#value : `${accumulator}`

    return new CalculateModel(
      value,
      accumulator,
      nextOperation,
      nextOperation ? CLEAR_DISPLAY : NOT_CLEAR_DISPLAY,
      this.#operation ? expretion : ""
    )
  }
}
