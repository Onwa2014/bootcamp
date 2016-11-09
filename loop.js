var callDurations = [23, 47, 50, 17];

var totalDuration = 0;

for (var index=0;index < callDurations.length;index++){
   totalDuration += callDurations[index];
}
console.log(totalDuration);

var costPerSecond = 7;

var totalCost = 0;
for (var i=0;i < callDurations.length;i++){
   totalCost = callDurations[i] * costPerSecond;
   console.log(totalCost);
}
//if i had my console.log outside the lop then it would print the last cost only

var totalCostForAllCalls = 0;
for (var i=0;i < callDurations.length;i++){
   totalCostForAllCalls += callDurations[i] * costPerSecond;
 }
console.log(totalCostForAllCalls);
