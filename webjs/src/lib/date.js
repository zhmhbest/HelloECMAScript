/**
 * 日期格式化
 * @param {Date|string} [toFormat]
 * @param {string} [formatType]
 * @returns {string}
 */
const formatDate = (toFormat, formatType) => {
    if (undefined===toFormat)
        toFormat = new Date();
    else
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
};


/**
 * 时间戳
 * @param {Date|string} d
 * @returns {Number}
 */
const timestamp = (d) => {
    return new Date(d).getTime();
};


module.exports = {
    format: formatDate,
    timestamp
};