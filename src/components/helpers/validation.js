function isEmpty(value){
 return typeof value === 'string' && value.trim().length <=0 && value==='';
}
function validation(data){
    const {name, quantity, image, price } = data;
    const errors = {};
    if(isEmpty(name)){
        errors.name = 'name is required'
    }
    if(isEmpty(quantity) || !Number(quantity)){
       errors.quantity = 'quantity is required and must be a number';
    }
    if(isEmpty(price) || !Number(price)){
        errors.price = 'price is required and must be a number';
     }
    if(isEmpty(image)){
        errors.image = 'image is required'
    }

    return {
        errors: Object.keys(errors).length >= 0 && errors,
        valid: Object.keys(errors).length <= 0
    }

}