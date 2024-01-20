function isPangram(string) {
    string = string.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let char of alphabet) {
        if (string.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}
