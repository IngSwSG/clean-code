(() => {

        //Lidibeth Morras Vivas C15324


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?


       //Determina si una fruta es roja 
    function isRedFruit(fruit: string): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela'];
        return redFruits.includes(fruit);
    }
    

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
   // function getFruitsByColor( color: string ): string[] {


  //Devuelve las frutas de un color especifico
    function getFruitsByColor(color: string): string[] {
        const fruitsByColor: Record<string, string[]> = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas'],
        };

        const fruits = fruitsByColor[color];
        if (!fruits) throw new Error('the color must be: red, yellow, purple');

        return fruits;
    }    


    // Simplificar esta función

    const stepStatus = {
        first: true,
        second: true,
        third: true,
        fourth: true,
    };


   function checkSystemStatus(): string {
        if (!stepStatus.first) return 'First step broken.';
        if (!stepStatus.second) return 'Second step broken.';
        if (!stepStatus.third) return 'Third step broken.';
        if (!stepStatus.fourth) return 'Fourth step broken.';
        return 'Working properly!';
    }

// isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false

//getFruitsByColor    
    console.log({ redFruits: getFruitsByColor('red') });
    console.log({ yellowFruits: getFruitsByColor('yellow') });
    console.log({ purpleFruits: getFruitsByColor('purple') });
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error

// workingSteps
    console.log({ systemStatus: checkSystemStatus() });

})();