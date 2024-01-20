function accum(s) {
    return s.split('').map((c, i) => {
        return c.toUpperCase() + c.toLowerCase().repeat(i);
    }).join('-');
}