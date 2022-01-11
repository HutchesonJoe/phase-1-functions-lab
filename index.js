
    //consoleLog(distance);
    // Code your solution in this file!

    function distanceFromHqInBlocks(location){
        const distance = 42 - location;
        if (distance < 0) {
           let positiveDistance = distance * -1;
           return positiveDistance;
        }
        return distance;
    }
    
    function distanceFromHqInFeet(distance){
      ;
        const distanceInFeet = distanceFromHqInBlocks(distance) * 264;
        return distanceInFeet;
    }
    
    function distanceTravelledInFeet(start, destination){
        const distanceTraveled = start - destination;
        const feetTraveled =  distanceTraveled * 264;
        if (feetTraveled < 0) {
            let positiveFeet = feetTraveled * -1;
            return positiveFeet;
        }
        return feetTraveled;
    }
    
    function calculatesFarePrice(start, destination){
        let feetTraveled = distanceTravelledInFeet(start, destination);
        if (feetTraveled <= 400) {
            return 0;
        } 

        else if (feetTraveled > 2500) {
            return "cannot travel that far";
        }
        else if (feetTraveled > 2000) {
            return 25;
        }
        else if (feetTraveled > 400) {
            return (feetTraveled - 400) * .02;
        }
        

    }