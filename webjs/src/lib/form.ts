

const getValues = (objForm: HTMLFormElement) => {
    if ('FORM' !== objForm.tagName.toUpperCase()) return null;
    const elements: HTMLFormControlsCollection = objForm.elements;
    let holder = {};
    for (let element of elements) {
        // @ts-ignore
        const nodeName: string | null = element.name;
        // @ts-ignore
        const nodeType: string | null = element.type;
        // @ts-ignore
        const nodeValue: string | null = element.value;
        // @ts-ignore
        const nodeIsChecked: boolean = element.checked;
        if (null === nodeName || null === nodeType) continue;
        // console.log(nodeName, nodeType, nodeValue, nodeIsChecked);

        switch (nodeType) {
            case 'radio':
                if (!nodeIsChecked) break;
                Object.defineProperty(holder, nodeName, { 
                    value: nodeValue,
                    writable: false,
                    enumerable: true
                });
                break;
            case 'checkbox':
                if (!holder.hasOwnProperty(nodeName)) {
                    Object.defineProperty(holder, nodeName, {
                        value: [],
                        writable: false,
                        enumerable: true
                    });
                }
                if (nodeIsChecked){
                    // @ts-ignore
                    holder[nodeName].push(nodeValue);
                }
                break;
            case 'select-one':
            case 'text':
            case 'textarea':
            case 'number':
            case 'email':
            case 'date':
                Object.defineProperty(holder, nodeName, {
                    value: nodeValue,
                    writable: false,
                    enumerable: true
                });
                break;
        }
    }
    return holder;
};


const setValues = (objForm: HTMLFormElement, data: object) => {
    for (let name of Object.keys(data)) {
        // @ts-ignore
        const value = data[name];
        const elements = objForm.querySelectorAll(`input[name='${name}'],select[name='${name}'],textarea[name='${name}']`);
        if (0 === elements.length) continue;
        // @ts-ignore
        switch (elements[0].type) {
            case 'radio':
                for (let item of elements) {
                    // @ts-ignore
                    item.checked = (value == item.value);
                } break;
            case 'checkbox':
                for (let item of elements) {
                    // @ts-ignore
                    item.checked = value.some(x => x == item.value);
                } break;
            default:
                // @ts-ignore
                elements[0].value = value;
                break;
        }
    }
};


const setOptions = (objSelect: HTMLSelectElement, data: { title: string, value: string }[]) => {
    objSelect.options.length = 0;
    data.forEach(element => {
        objSelect.add(new Option(element.title, element.value));
    });
};


const setInputs = (
    objDiv: HTMLDivElement, 
    data: { title: string, value: string }[], 
    callback: (label: HTMLLabelElement, input: HTMLInputElement, span: HTMLSpanElement) => any
) => {
    objDiv.innerHTML = "";
    data.forEach(element => {
        let label = document.createElement('label');
        let input = document.createElement('input');
        let span = document.createElement('span');

        input.value = element.value;
        span.innerHTML = element.title;
        callback(label, input, span);
    
        label.appendChild(input);
        label.appendChild(span);
        objDiv.appendChild(label);
    });
};


export {
    // serialize,
    getValues,
    setValues,
    setOptions,
    setInputs,
};
