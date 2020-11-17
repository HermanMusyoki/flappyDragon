
const gameOfThrones = {
    1: [
        "Winter Is Coming", "The Kingsroad", "Lord Snow", "Cripples, Bastards, and Broken Things", "The Wolf and the Lion", "A Golden Crown", "You Win or You Die", "The Pointy End", "Baelor", "Fire and Blood"],
    2: [
        "The North Remembers", "The Night Lands", "What Is Dead May Never Die", "Garden of Bones", "The Ghost of Harrenhal", "The Old Gods and the New", "A Man Without Honor", "The Prince of Winterfell", "Blackwater", "Valar Morghulis"],
    3: [
        "Valar Dohaeris", "Dark Wings, Dark Words", "Walk of Punishment", "And Now His Watch Is Ended", "Kissed by Fire", "The Climb", "The Bear and the Maiden Fair", "Second Sons", "The Rains of Castamere", "Mhysa"],
    4: [
        "Two Swords", "The Lion and the Rose", "Breaker of Chains", "Oathkeeper", "First of His Name", "The Laws of Gods and Men", "Mockingbird", "The Mountain and the Viper", "The Watchers on the Wall ", "The Children"],
    5: [
        "The Wars to Come", "The House of Black and White", "High Sparrow", "Sons of the Harpy", "Kill the Boy", "Unbowed, Unbent, Unbroken", "The Gift", "Hardhome", "The Dance of Dragons", "Mother's Mercy"
    ],
    6: [
        "The Red Woman", "Home", "Oathbreaker", "Book of the Stranger", "The Door", "Blood of My Blood", "The Broken Man", "No One", "Battle of the Bastards", "The Winds of Winter"],
    7: [
        "Dragonstone", "Stormborn", "The Queen's Justice", "The Spoils of War", "Eastwatch", "Beyond the Wall", "The Dragon and the Wolf"],
    8: [
        "Winterfell", "A Knight of the Seven Kingdoms", "The Long Night", "The Last of the Starks", "The Bells", "The Iron Throne"]

}


function returnEpisodeName(score) {
    let nameOfEpisode;
    let scoreIndex = score - 1;
    if (1 <= score && score <= 10) {
        let episodeNumber = scoreIndex;
        nameOfEpisode = `${gameOfThrones[1][episodeNumber]}:Episode:${episodeNumber + 1}, season 1`;
    }
    else if (11 <= score && score <= 20) {
        let episodeNumber = scoreIndex - 10 + 1;
        nameOfEpisode = `${gameOfThrones[2][episodeNumber]}:Episode:${episodeNumber + 1},season 2`;
    }
    else if (21 <= score && score <= 30) {
        let episodeNumber = scoreIndex - 20;
        nameOfEpisode = `${gameOfThrones[3][episodeNumber]}:Episode:${episodeNumber + 1},season 3`;
    }
    else if (31 <= score && score <= 40) {

        let episodeNumber = scoreIndex - 30;
        nameOfEpisode = `${gameOfThrones[4][episodeNumber]}:Episode:${episodeNumber + 1},season 4`;

    }
    else if (41 <= score && score <= 50) {
        let episodeNumber = scoreIndex - 40;
        nameOfEpisode = `${gameOfThrones[5][episodeNumber]}:Episode:${episodeNumber + 1},season 5`;

    }
    else if (51 <= score && score <= 60) {
        let episodeNumber = scoreIndex - 50;
        nameOfEpisode = `${gameOfThrones[6][episodeNumber]}:Episode:${episodeNumber + 1},season 6`;


    }
    else if (61 <= score && score <= 67) {
        let episodeNumber = scoreIndex - 60;
        nameOfEpisode = `${gameOfThrones[7][episodeNumber]}:Episode:${episodeNumber + 1},season 7`;

    }
    else if (68 <= score && score <= 73) {
        let episodeNumber = scoreIndex - 67;
        nameOfEpisode = `${gameOfThrones[8][episodeNumber]}:Episode:${episodeNumber + 1},season 8`;

    } else {
        nameOfEpisode = "you have completed the game";
    }

    return nameOfEpisode;
}

