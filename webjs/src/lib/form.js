/**
 *
 * @param objForm
 * @returns {{}|null}
 */
const formSeries = (objForm) => {
    if ('FORM' !== objForm.tagName.toUpperCase()) return null;
    const elements = objForm.elements;
    let buff = {};
    for (let i = 0; i < elements.length; i++) {
        const field = elements[i];
        switch (field.type) {
            case 'radio':
                if (!field.checked) break;
                buff[field.name] = field.value;
                break;
            case 'checkbox':
                if (undefined===buff[field.name]) buff[field.name]=[];
                if (field.checked) buff[field.name].push(field.value);
                break;
            case 'select-one':
            case 'text':
            case 'textarea':
            case 'number':
            case 'email':
            case 'date':
                buff[field.name] = field.value;
                break;
        }
    }
    return buff;
};


/**
 *
 * @param objForm
 * @param {Object} data
 */
const formSetValues = (objForm, data) => {
    // const assemblies = objForm.querySelectorAll(`input,select,textarea`);
    for (let name of Object.keys(data)) {
        const value = data[name];
        const elements = objForm.querySelectorAll(`input[name='${name}'],select[name='${name}'],textarea[name='${name}']`);
        if (0===elements.length) continue;
        // console.log("elements", name, elements[0].type, elements);
        switch (elements[0].type) {
            case 'radio':
                for (let item of elements) {
                    item.checked = (value == item.value);
                } break;
            case 'checkbox':
                for (let item of elements) {
                    item.checked = value.some(x => x==item.value);
                } break;
            default:
                elements[0].value = value;
                break;
        }
    }
};

module.exports = {
    series: formSeries,
    values: formSetValues
};