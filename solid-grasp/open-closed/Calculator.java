public class Calculator {
  
  public Calculator_(ICalculatorOperation calculatorOperation) {
    CalculatorOperation = calculatorOperation;
  }

  public ICalculatorOperation Cal culatorOperation { get; }

  public double Solve(double x, double y)
  {
      // Calculations will be based on the "injected" ICalculatorOperation.
      return CalculatorOperation.Calculate(x, y);
  }
}
