/*
 * ArrayBuffer: 代表内存之中的一段二进制数据
 * TypedArray:
 *      Int8Array、Uint8Array、Uint8ClampedArray、
 *      Int16Array、Uint16Array、
 *      Int32Array、Uint32Array、
 *      Float32Array、Float64Array
 * DataView: 复合格视图
*/

ArrayBuffer.prototype.toHexString = function (splitter) {
    splitter = splitter || ',';
    const out = [];
    const bytes = new Uint8Array(this);
    let ch;
    for (let i=0;i<this.byteLength;i++) {
        ch = bytes[i].toString(16);
        if (1===ch.length) {
            out.push('0'+ch);
        } else {
            out.push(ch);
        }
    }
    return out.join(splitter);
};

console.log("【TypedArray】");
{
    console.log(
        Int8Array.BYTES_PER_ELEMENT,
        Uint8Array.BYTES_PER_ELEMENT,
        Uint8ClampedArray.BYTES_PER_ELEMENT,
        Int16Array.BYTES_PER_ELEMENT,
        Uint16Array.BYTES_PER_ELEMENT,
        Int32Array.BYTES_PER_ELEMENT,
        Uint32Array.BYTES_PER_ELEMENT
    );
    const buf = new ArrayBuffer(4);
    // 以32位整数赋值缓冲区
    const x1 = new Uint32Array(buf);
    x1[0] = 0xAABBCCDD;
    // 按字节读取缓冲区：低位在前
    const x2 = new Uint8Array(buf);
    console.log(
        x2[0].toString(16),
        x2[1].toString(16),
        x2[2].toString(16),
        x2[3].toString(16)
    );
}
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log("【DataView】");
{
    const buf = new ArrayBuffer(8);
    const dataView = new DataView(buf);
    for (let i=0;i<8;i++) {
        dataView.setUint8(i, i + 0xa0);
    }
    console.log(buf.toHexString());
    for (let i=0;i<2;i++) {
        console.log(dataView.getUint32(i*4).toString(16));
    }
}


