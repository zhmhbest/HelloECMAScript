
/**
 * 计算活了多少天
 */
function getLiveDays(birth_date) {
    var date_birth = new Date(birth_date);
    var date_now = new Date();
    var diff_time = date_now - date_birth;
    var diff_day = diff_time / (1000 * 60 * 60 * 24);
    return Math.trunc(diff_day) + 1;
}

console.log(getLiveDays('1996-10-16'));


/**
 * 日期格式化
 */
function formateDate(date_or_str, format_type) {
    var d = (date_or_str instanceof Date) ? date_or_str : new Date(date_or_str) ;
    // console.log(d.toLocaleString());
    var buf = [];
    format_type = format_type || 'y-M-d h:m:s';
    for(var i=0; i<format_type.length; i++) {
        var ch = format_type.substr(i, 1);
        switch(ch) {
            case 'y': buf.push(d.getFullYear()); break;
            case 'M': buf.push(d.getMonth()+1); break;
            case 'd': buf.push(d.getDate()); break;
            case 'h': buf.push(d.getHours()); break;
            case 'm': buf.push(d.getMinutes()); break;
            case 's': buf.push(d.getSeconds()); break;
            case 'S': buf.push(d.getMilliseconds()); break;
            default: buf.push(ch); break;
        }
    }
    return buf.join('');
}
console.log(formateDate('2020-7-30 22:31:23'));


/**
 * 时间戳
 */
// 当前时间时间戳
var timestamp = new Date().getTime();
console.log(timestamp);
// 从时间戳获取日期
console.log(new Date(timestamp).toLocaleString());
