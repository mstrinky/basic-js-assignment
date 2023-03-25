// oilprice -----------
function oilPrice(dieselQuantity,octalQuantity,petrolQuantity){
    const dieselPrice = 114;
    const octalPrice = 130;
    const petrolPrice = 135;


    const totalDieselPrice = dieselQuantity * dieselPrice;
    const totalOctalPrice = octalQuantity * octalPrice;
    const totalPatrolPrice = petrolQuantity * petrolPrice;

    totalOilPrice = totalDieselPrice + totalOctalPrice + totalPatrolPrice;
    console.log(totalOilPrice);
}

oilPrice(4,6,2);