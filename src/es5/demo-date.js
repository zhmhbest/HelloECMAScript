
function getLiveDays(birth_date) {
    var date_birth = new Date(birth_date);
    var date_now = new Date();
    var diff_time = date_now - date_birth;
    var diff_day = diff_time / (1000 * 60 * 60 * 24);
    return Math.trunc(diff_day) + 1;
}

console.log(getLiveDays('1996-10-16'));

