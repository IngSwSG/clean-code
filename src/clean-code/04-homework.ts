(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    const redFruits = ["manzana", "fresa", "cereza"];
    if (redFruits.includes(fruit)) {
      return true;
    } else {
      return false;
    }
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  function getFruitsByColor(color: string): string[] {
    const fruits = {
      red: ["manzana", "fresa", "cereza"],
      yellow: ["piña", "banana"],
      purple: ["moras", "uvas"],
    };
    switch (color) {
      case "red":
        return fruits.red;
      case "yellow":
        return fruits.yellow;
      case "purple":
        return fruits.purple;
      default:
        throw new Error("the color must be: red, yellow, purple");
    }
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (
      isFirstStepWorking ||
      isSecondStepWorking ||
      isThirdStepWorking ||
      isFourthStepWorking
    ) {
      return "Working properly";
    }
    if (!isFirstStepWorking) {
      return "First step is not working";
    }
    if (!isSecondStepWorking) {
      return "Second step is not working";
    }
    if (!isThirdStepWorking) {
      return "Third step is not working";
    }
    if (!isFourthStepWorking) {
      return "Fourth step is not working";
    }
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
