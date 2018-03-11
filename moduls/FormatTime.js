function formatTime(seconds){
    var hrs = Math.floor(seconds / 3600);
    var min = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 3600 - minutes * 60);
    return (hrs + "hours " + min + "minutes " + s + "seconds ");
}

exports.time = formatTime;