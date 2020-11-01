
/**
 * 添加尺寸调整响应
 */
export function pushOnScreenResize(
    fn: (
        rect: {w: number, h: number},
        handlers: GlobalEventHandlers | null,
        event: UIEvent | null
    ) => any
) {
    // @ts-ignore
    const preRE: (ev: UIEvent) => any = window.onresize;
    if (undefined === preRE || null === preRE) {
        // 首次
        window.onresize = function (ev: UIEvent) {
            fn({
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }, this, ev);
        };
    } else {
        // 函数链
        window.onresize = function (ev: UIEvent) {
            preRE.call(this, ev);
            fn({
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }, this, ev);
        };
    }
    // 激活
    fn({
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    }, null, null);
}
