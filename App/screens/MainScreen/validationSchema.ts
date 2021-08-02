import * as Yup from 'yup';

export default Yup.object().shape({
    label: Yup.string().required().min(1).label('Product Label'),
    price: Yup.number().required().min(1).label('Price'),
    quantity: Yup.number().required().min(1).label('Quantity'),

});
