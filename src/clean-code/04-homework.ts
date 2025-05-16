//Norvin Alexander Montenegro Zamora C04995
 (() => {
  // Codigo corregido
  function isRedFruit(fruitName: string): boolean {
    const redFruits = ["manzana", "cereza", "ciruela"];
    return redFruits.includes(fruitName);
  }

  // Corrección de codigo
  function getFruitsByColor(fruitColor: string): string[] {
    switch (fruitColor) {
      case "red":
        return ["manzana", "fresa"];
      case "yellow":
        return ["piña", "banana"];
      case "purple":
        return ["moras", "uvas"];
      default:
        throw new Error("The color must be: red, yellow, purple");
    }
  }

  // Simplificacion de la funcion
  const isFirstStepWorking = true;
  const isSecondStepWorking = true;
  const isThirdStepWorking = true;
  const isFourthStepWorking = true;

  // Funcion corregida
  function workingSteps(): string {
    if (!isFirstStepWorking) return "First step broken.";
    if (!isSecondStepWorking) return "Second step broken.";
    if (!isThirdStepWorking) return "Third step broken.";
    if (!isFourthStepWorking) return "Fourth step broken.";
    return "Working properly!";
  }

  // Pruebas con el cambio sugerido de la linea 31 y demas
  console.log({ isRedFruit: isRedFruit("cereza"), fruitName: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruitName: "piña" }); // false

  console.log({ redFruits: getFruitsByColor("red") });
  console.log({ yellowFruits: getFruitsByColor("yellow") });
  console.log({ purpleFruits: getFruitsByColor("purple") });
  // console.log({ pinkFruits: getFruitsByColor("pink") }); // Error

  console.log({ workingSteps: workingSteps() });
})();
