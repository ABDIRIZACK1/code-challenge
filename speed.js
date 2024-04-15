// Function to calculate demerit points and check if license should be suspended
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

    // If speed is less than or equal to speed limit, print "Ok"
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // Calculate demerit points
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        // If demerit points exceed maximum, print "License suspended"
        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}


checkSpeed(80);
checkSpeed(65); 
checkSpeed(100); 
