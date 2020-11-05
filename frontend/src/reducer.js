export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove for production
    // token: 'BQAOfQ3NL07dMt224zq8vUK446wmui2Pon2jkXFHQWxwrp8d7Jp3Q9EUcZUnphAVDRyyMFzbP17Vw6yQ' +
    //         'rx-YjKgVfW2L4x9--BFNxmWubmr-DkMQ5GnEmK55WR9-YQ6SoHzD7O79MN3f9igRT1HR4u3ku1tTI0o'
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}
// console.log('@', discover_weekly);

export default reducer;