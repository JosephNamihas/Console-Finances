var finances = [


['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

// ---------------------------------FINDING TOTAL MONTHS
totalMonths = 0; // Total amount of months

for (let i = 0; i < finances.length; i++)
{
    var totalMonths = i+1; // Substitute for Array 0-index.
}

// --------------------------------ARRAY TOTAL & FUNCTION
arrayTotal(finances);

var totalSum = 0;

function arrayTotal() {

    let totalSum = 0;
    
    for(let i = 0; i < finances.length; i++) {

        totalSum += finances[i][1];
    }

    return totalSum;
}


// -------------------------------- AVERAGE CHANGE

var firstValue = 0;
var arrayDifferences = [];

for(let i = 0; i < finances.length; i++) {
    // Logs Month and Value

    var totalDifference = finances[i][1] - firstValue;

    arrayDifferences.push(totalDifference);

    var firstValue = finances[i][1];
}

var sumDifferences = 0;

for(let i = 0; i < arrayDifferences.length; i++) {
    sumDifferences += arrayDifferences[i];
}

var avgChanges = sumDifferences / totalMonths;

// -------------------------------- GREATEST INCREASE

var bigNumber = 0; // To store the next iteration of the finance index value
var largestIncrProfit = 0;
var monthIncrease="";

for(let i = 0; i < finances.length; i++) {

    var greatestIncrease = finances[i][1] - bigNumber;

    if(greatestIncrease > largestIncrProfit) {
        largestIncrProfit = greatestIncrease;
        monthIncrease = finances[i][0];
    }

}

// -------------------------------- GREATEST DECREASE

var smallNumber = 0;
var largestDecrProfit = 0;
var monthDecrease ="";

for(let i = 0; i < finances.length; i++) {

    var greatestDecrease = finances[i][1];

    if (greatestDecrease < largestDecrProfit) {
        largestDecrProfit = greatestDecrease;
        monthDecrease = finances[i][0];
    }
}


// -------------------------------- CONSOLE OUTPUT


console.log("Financial Analysis\n--------------------------")
console.log("Total Months: " + totalMonths)
console.log("Total: $" + arrayTotal(totalSum));
console.log("Average Change: $" + avgChanges.toFixed(2));
console.log("Greatest Increase in Profits:", monthIncrease," $",largestIncrProfit);
console.log("Greatest Decrease in Profits:", monthDecrease, " $",largestDecrProfit);

