//The first function you will define is called gameObject. This function contains and returns an object nested in the following manner:
function gameObject() {

    const stats = {
        home: {
            teamName: "Brooklyn Nets", //string of the team name.
            colors: ['Black', 'White'],//array of strings that are that team's colors.
            players: { //object of players whose names (as strings) are the keys to an object containing their stats. The values for each player's names and their stats can be found in the table below. The stats keys should be formatted like this:
                'Alan Anderson': {
                    number: '0',
                    shoe: '16',
                    points: '22',
                    rebounds: '12',
                    assists: '12',
                    steals: '3',
                    blocks: '1',
                    slamDunks: '1'

                },
                'Reggie Evans': {
                    number: '30',
                    shoe: '14',
                    points: '12',
                    rebounds: '12',
                    assists: '12',
                    steals: '12',
                    blocks: '12',
                    slamDunks: '7'

                },
                'Brook Lopez': {
                    number: '11',
                    shoe: '17',
                    points: '17',
                    rebounds: '19',
                    assists: '10',
                    steals: '3',
                    blocks: '1',
                    slamDunks: '15'

                },
                'Mason Plumlee': {
                    number: '1',
                    shoe: '19',
                    points: '26',
                    rebounds: '12',
                    assists: '6',
                    steals: '3',
                    blocks: '8',
                    slamDunks: '5'

                },
                'Jason Terry': {
                    number: '31',
                    shoe: '15',
                    points: '19',
                    rebounds: '2',
                    assists: '2',
                    steals: '4',
                    blocks: '11',
                    slamDunks: '1'

                }
            }
        },

        away: {
            teamName: "Charlotte Hornets", //string of the team name.
            colors: ['Turquoise', 'Purple'],//array of strings that are that team's colors.
            players: { //object of players whose names (as strings) are the keys to an object containing their stats. The values for each player's names and their stats can be found in the table below. The stats keys should be formatted like this:
                'Jeff Adrien': {
                    number: '4',
                    shoe: '18',
                    points: '10',
                    rebounds: '1',
                    assists: '1',
                    steals: '2',
                    blocks: '7',
                    slamDunks: '2'

                },
                'Bismak Biyombo': {
                    number: '0',
                    shoe: '16',
                    points: '12',
                    rebounds: '4',
                    assists: '7',
                    steals: '7',
                    blocks: '15',
                    slamDunks: '10'

                },
                'DeSagna Diop': {
                    number: '2',
                    shoe: '14',
                    points: '24',
                    rebounds: '12',
                    assists: '12',
                    steals: '4',
                    blocks: '5',
                    slamDunks: '5'

                },
                'Ben Gordon': {
                    number: '8',
                    shoe: '15',
                    points: '33',
                    rebounds: '3',
                    assists: '2',
                    steals: '1',
                    blocks: '1',
                    slamDunks: '0'

                },
                'Brendan Haywood': {
                    number: '33',
                    shoe: '15',
                    points: '6',
                    rebounds: '12',
                    assists: '12',
                    steals: '22',
                    blocks: '5',
                    slamDunks: '12'

                }


            }
        }
    }

    return stats
}

//returns points scored
function numPointsScored(name) {
    let points = 0
    let game = gameObject();
    let homePlayers = game['home']['players']
    let awayPlayers = game['away']['players']

    let allPlayers = {
        ...homePlayers, ...awayPlayers
    }


    for (let key in allPlayers) {

        if (key === name) {


            points = allPlayers[name]['points']

        }

    }
    console.log(points)
    return points

}
numPointsScored('Brendan Haywood')



//returns shoe size
function shoeSize(name) {
    let size = 0
    let game = gameObject();
    let homePlayers = game['home']['players']
    let awayPlayers = game['away']['players']

    let allPlayers = {
        ...homePlayers, ...awayPlayers
    }


    for (let key in allPlayers) {

        if (key === name) {


            size = allPlayers[name]['shoe']

        }

    }
    console.log(size)
    return size

}
shoeSize('Brendan Haywood')

//returns team colors
function teamColors(team) {
    colors = []
    let game = gameObject();
    for (let gameKey in game) {

        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {

            let teamName = teamObj[teamKey]

            if (teamName === team) {
                colors = teamObj['colors']
            }
        }
    }
    console.log(colors)
    return colors
}

teamColors('Brooklyn Nets')

//returns team names
function teamNames() {
    teams = [gameObject()['home']['teamName'], gameObject()['away']['teamName']]

    console.log(teams)
    return teams
}

teamNames()

//returns players number
function playerNumbers(name) {
    let number = 0
    let game = gameObject();
    let homePlayers = game['home']['players']
    let awayPlayers = game['away']['players']

    let allPlayers = {
        ...homePlayers, ...awayPlayers
    }


    for (let key in allPlayers) {

        if (key === name) {


            number = allPlayers[name]['number']

        }

    }
    console.log(number)
    return number

}
playerNumbers('Brendan Haywood')

function playersStats(name) {
    let stats = {}
    let game = gameObject();

    for (let gameKey in game) {

        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {

            let data = teamObj[teamKey]
            for (let key in data) {
                if (key === name) {
                    stats = data[key]

                }

            }
        }
    }
    console.log(stats)
    return stats
}

playersStats('Brendan Haywood')

//returns rebounds of the player with the largest shoes
function bigShoeRebounds() {
    let size = 0
    let rebounds = 0

    let game = gameObject();
    let homePlayers = game['home']['players']
    let awayPlayers = game['away']['players']

    let allPlayers = {
        ...homePlayers, ...awayPlayers
    }

    let arr = []

    for (let key in allPlayers) {

        size = allPlayers[key]['shoe']
  
        arr.push(size)

    }

    let maxValue = Math.max(...arr)

    for (let key in allPlayers) {
        size = allPlayers[key]['shoe']

        if (size == maxValue) {
            rebounds = allPlayers[key]['rebounds']

        }
    }
    console.log(rebounds)
    return rebounds

}

bigShoeRebounds()