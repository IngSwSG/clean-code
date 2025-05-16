(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {    
        const redFruist = ['manzana', 'fresa', 'cereza'];
        return redFruist.includes(fruit);
    }

   
    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor( color: string ): string[] {

        const fruitsColor = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
        }
        
        switch (color) {
            case 'red':
                return fruitsColor.red;
            case 'yellow':
                return fruitsColor.yellow;
            case 'purple':
                return fruitsColor.purple;
            default:
                throw new Error('the color must be: red, yellow, purple');
        }
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;


    function workingSteps() {
        if( isFirstStepWorking && isSecondStepWorking && isThirdStepWorking && isFourthStepWorking ) {
            return 'Working properly!';
        }
        else {
            if( !isFirstStepWorking ) return 'First step broken.';
            if( !isSecondStepWorking ) return 'Second step broken.';
            if( !isThirdStepWorking ) return 'Third step broken.';
            if( !isFourthStepWorking ) return 'Fourth step broken.';
        }
    }
    

    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();