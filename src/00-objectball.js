function gameObject(){
    return obj = {
        home: {
            teamName:'Brooklyn Nets',
            colors:['Black','White'],
            players: {
                'Alan Anderson': {
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1},
                'Reggie Evans':{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7},
                'Brook Lopez':{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15},
                'Mason Plumlee':{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5},
                'Jason Terry':{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:1,
                    slamDunks:1},
                }
            },
        away: {
            teamName:'Charlotte Hornetts',
            colors:['Turqoise','Purple'],
            players: {
                'Jeff Adrien':{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2},
                'Bismak Biyombo':{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10},
                'DeSagna Diop':{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5},
                'Ben Gordon':{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0},
                'Brendan Haywood':{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12},
            }
        }
    };
};

function numPointsScored(playerName){
    for(keys in gameObject()){
        if(gameObject()[keys].players[playerName] != undefined){
            //console.log(gameObject()[keys].players[playerName].points);
            return gameObject()[keys].players[playerName].points
        }
    }
};

function shoeSize(playerName){
    for(keys in gameObject()){
        if(gameObject()[keys].players[playerName] != undefined){
            //console.log(gameObject()[keys].players[playerName].shoe);
            return gameObject()[keys].players[playerName].shoe
        }
    }
};

function teamColors(teamName){
    if(gameObject()[teamName] != undefined){
        //console.log(gameObject()[teamName].colors);
        return gameObject()[teamName].colors;
    }
}

function teamNames(){
    let nameArray = [];
    for(keys in gameObject()){
        nameArray.push(gameObject()[keys].teamName);
    }
    //console.log(nameArray);
    return nameArray;
}

function playerNumbers(mainName){
    let numArray = [];
    for(keys in gameObject()){
        if(gameObject()[keys].teamName == mainName){
            for(playerKey in gameObject()[keys].players){
                numArray.push(gameObject()[keys].players[playerKey].points);
           }
        }
    }
    //console.log(numArray);
    return numArray;
}

function playerStats(playerName){
    for(keys in gameObject()){
        if(gameObject()[keys].players[playerName] != undefined){
            console.log(gameObject()[keys].players[playerName]);
            return gameObject()[keys].players[playerName]
        }
    }
}

function bigShoeRebounds(){
    let biggestShoe = 0;
    let biggestShoeRebounds;
    for(keys in gameObject()){
        for(playerKey in gameObject()[keys].players){
            if(gameObject()[keys].players[playerKey].shoe > biggestShoe){
                biggestShoe = gameObject()[keys].players[playerKey].shoe;
                biggestShoeRebounds = gameObject()[keys].players[playerKey].rebounds;
            }
        }
    }
    //console.log(biggestShoeRebounds)
    return biggestShoeRebounds;

}

function mostPointsScored(){
    let mostPoints = 0;
    let mostPointsName = '';
    for(keys in gameObject()){
        for(playerKey in gameObject()[keys].players){
            if(gameObject()[keys].players[playerKey].points >= mostPoints){
                mostPoints = gameObject()[keys].players[playerKey].points;
                mostPointsName = playerKey;
            }
        }
    }
    //console.log(mostPointsName);
    return mostPointsName;
}

function winningTeam(){
    let homePoints = 0;
    let awayPoints = 0;
    for(keys in gameObject()){
        for(playerKey in gameObject()[keys].players){
            if(keys === 'home'){
                homePoints += gameObject()[keys].players[playerKey].points
            }else if(keys === 'away'){
                awayPoints += gameObject()[keys].players[playerKey].points
            }
        }
    }
    if(homePoints > awayPoints){
        console.log(gameObject().home.teamName)
        return gameObject().home.teamName
    } else if(homePoints < awayPoints){
        console.log(gameObject().away.teamName)
        return gameObject().away.teamName
    }
}

function playerWithLongestName(){
    let longestName = '';
    let longestNameChar = 0;
    for(keys in gameObject()){
        for(playerKey in gameObject()[keys].players){
            if(playerKey.length > longestName.length){
                longestName = playerKey
                longestNameChar = playerKey.length
            }
        }
    }
    //console.log(`${longestName} has the longest name at ${longestNameChar} characters`)
    return longestName
}

function doesLongNameStealATon(){
    let mostSteals = 0;
    let mostStealsName = '';
    for(keys in gameObject()){
        for(playerKey in gameObject()[keys].players){
            if(gameObject()[keys].players[playerKey].steals > mostSteals){
                mostSteals = gameObject()[keys].players[playerKey].steals;
                mostStealsName = playerKey;
            }
        }
    }
    if(mostStealsName === playerWithLongestName()){
        //console.log(true)
        return true;
    } else{
        //console.log(false)
        return false;
    }
}