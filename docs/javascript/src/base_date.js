/**
 * 计算活了多少天
 * @param {Date|string} birth
 */
function getLiveDays(birth) {
    birth = birth instanceof Date ? birth : new Date(birth);
    const ms_day = 1000 * 60 * 60 * 24;
    const diff = new Date() - birth;
    return Math.trunc(diff / ms_day) + 1;
}
console.log(getLiveDays('2020-10-1'));
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

/**
 * 日期格式化
 * @param {Date|string} toFormat
 * @param {string} formatType
 * @returns {string}
 */
function formatDate(toFormat, formatType) {
    toFormat = (toFormat instanceof Date) ? toFormat : new Date(toFormat);
    formatType = formatType || 'y-M-d h:m:s';
    const buf = [];
    for(let i=0; i<formatType.length; i++) {
        let ch = formatType.substr(i, 1);
        switch(ch) {
            case 'y': buf.push(toFormat.getFullYear()); break;
            case 'M': buf.push(toFormat.getMonth()+1); break;
            case 'd': buf.push(toFormat.getDate()); break;
            case 'h': buf.push(toFormat.getHours()); break;
            case 'm': buf.push(toFormat.getMinutes()); break;
            case 's': buf.push(toFormat.getSeconds()); break;
            case 'S': buf.push(toFormat.getMilliseconds()); break;
            default: buf.push(ch); break;
        }
    }
    return buf.join('');
}
console.log(formatDate(new Date(), '[y|M|d_h|m|s|]:S'));
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

/**
 * 时间戳
 */
// 当前时间时间戳
let timestamp = new Date().getTime();
console.log(timestamp);
// 从时间戳获取日期
console.log(new Date(timestamp).toLocaleString());
