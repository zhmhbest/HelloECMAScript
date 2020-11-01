/**
 * Object->String
 * @param obj: DataHolder
 * @param sep: Separator
 * @param eqs: Equal sign
 */
export function toGetString(obj: object, sep?: string, eqs?: string): string {
    sep = sep || '&';
    eqs = eqs || '=';
    const buffer: string[] = [];
    for (let key of Object.keys(obj)) {
        // @ts-ignore
        let val: any = obj[key];
        buffer.push([key, encodeURIComponent(val)].join(eqs));
    }
    return buffer.join(sep);
}


/**
 * String->Dict
 * @param str
 * @param sep
 * @param eqs
 */
export function parseGetString(str: string, sep?: string, eqs?: string): object {
    let buffer = Object();
    str = str.trim();
    if (0 === str.length) return buffer;
    sep = sep || '&';
    eqs = eqs || '=';
    for (let item of str.split(sep)) {
        let kv: string[] = item.split(eqs);
        buffer[kv[0]] = decodeURIComponent(kv[1]);
    }
    return buffer;
}


/**
 * Catch HashChange
 */
export function pushOnHashChange(
    fn: (
        hash:string,
        handlers:WindowEventHandlers,
        event:HashChangeEvent
    ) => any
) {
    // @ts-ignore
    const preHCE: (ev: HashChangeEvent) => any = window.onhashchange;
    if (undefined === preHCE || null === preHCE) {
        // 直接添加
        window.onhashchange = function (ev: HashChangeEvent) {
            fn(window.location.hash.substr(1), this, ev);
        }
    } else {
        // 方法链
        window.onhashchange = function (ev: HashChangeEvent) {
            preHCE.call(this, ev);
            fn(window.location.hash.substr(1), this, ev);
        };
    }
}
