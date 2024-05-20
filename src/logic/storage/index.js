export const saveGameToStorage = ({ board, turn }) => {

    // guardar aqui partida
    window.localStorage.setItem('board', JSON.stringify(board));
    window.localStorage.setItem('turn', turn);
}

export const resetGameStorage = () => {
    // Hacemos esto para que cuando reseteamos el juego y refrescamos la pagina que se borre tambien y no vuelva al estado de antes de refrescar
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
}