export const songsReducer = () => {
    return [
        {title: "Uptown Funk", duration: "3:24"},
        {title: "Dracarys", duration: "2:50"},
        {title: "Joe Exotic", duration: "3:20"},
        {title: "Bajo el Agua", duration: "5:00"}
    ];
}

export const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SELECTED_SONG"){
        return action.payload;
    }

    return selectedSong;
}