
function changeValue(foodSection, nutrientType, change) {

    var currentNutrientValue = parseInt(document.getElementById(foodSection + '-' + nutrientType).textContent);
    currentNutrientValue = Math.max(0, currentNutrientValue + change);
    document.getElementById(foodSection + '-' + nutrientType).textContent = currentNutrientValue;
    updateTotalCalories();
}


function resetFood(foodSection) { 
    document.getElementById(foodSection + '-protein').textContent = '0';
    document.getElementById(foodSection + '-carbs').textContent = '0';
    document.getElementById(foodSection + '-fat').textContent = '0';
    updateTotalCalories();
}

function resetAll() {
    console.log('reset all calories pressed');
    resetFood('appetizer');
    resetFood('entree');
    resetFood('dessert'); 
    updateTotalCalories();
    console.log('resetted all calories');
}

function updateTotalCalories() {
    console.log('updateTotalCalories Pressed');
    var appetizerProtein = parseInt(document.getElementById('appetizer-protein').textContent);
    var appetizerCarbs = parseInt(document.getElementById('appetizer-carbs').textContent);
    var appetizerFat = parseInt(document.getElementById('appetizer-fat').textContent);

    var entreeProtein = parseInt(document.getElementById('entree-protein').textContent);
    var entreeCarbs = parseInt(document.getElementById('entree-carbs').textContent);
    var entreeFat = parseInt(document.getElementById('entree-fat').textContent);

    var dessertProtein = parseInt(document.getElementById('dessert-protein').textContent);
    var dessertCarbs = parseInt(document.getElementById('dessert-carbs').textContent);
    var dessertFat = parseInt(document.getElementById('dessert-fat').textContent);

    var totalCalories = (appetizerProtein + entreeProtein + dessertProtein) * 4 +
                       (appetizerCarbs + entreeCarbs + dessertCarbs) * 4 +
                       (appetizerFat + entreeFat + dessertFat) * 9;
    document.getElementById('total-calories-value').textContent = totalCalories;

    console.log('updated Total Calories');
}
