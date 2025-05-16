(() => {

    function isRedFruit(fruit: string): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela'];
        return redFruits.includes(fruit);
    }

    function getFruitsByColor(color: string): string[] {
        const fruitByColor: Record<string, string[]> = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas'],
        };

        const fruits = fruitByColor[color];
        if (!fruits) {
            throw new Error('The color must be: red, yellow, purple');
        }
        return fruits;
    }

    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;
    
    function workingSteps(): string {
        if (!isFirstStepWorking) return 'First step broken.';
        if (!isSecondStepWorking) return 'Second step broken.';
        if (!isThirdStepWorking) return 'Third step broken.';
        if (!isFourthStepWorking) return 'Fourth step broken.';
        return 'Working properly!';
    }

    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false

    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: The color must be: red, yellow, purple

    console.log({ workingSteps: workingSteps() }); 

})();