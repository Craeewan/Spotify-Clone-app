export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-app-1b53f.web.app";



const scopes = ["user-read-currently-playing", "user-read-currently-playing", "user-read-playback-state", "user-modify-playback-state"];

export const getTokenFromUrl = () => {
    console.log(window.location.hash)

    return window
        .location
        .hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            var parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;

        }, {})
}

export const loginUrl = `${authEndPoint}
?client_id=${clientId}&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;
