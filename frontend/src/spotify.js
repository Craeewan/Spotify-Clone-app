export const authEndPoint = 
"https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "701d978a85cb433cb587396d8efc3b95";

const scopes = [
    "user-read-currently-playing",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state"
];


export const getTokenFromUrl = () => {
    console.log(window.location.hash)

    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        var parts =item.split('=');
        initial[parts[0]] = 
        decodeURIComponent(parts[1]);

            return initial;
            
    }, {})
}



export const loginUrl = `${authEndPoint}
?client_id=${clientId}&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;
