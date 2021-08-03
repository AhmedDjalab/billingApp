import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../../AppButton';
import SubmitButtonProps from './model';

export default function SubmitButton({ title , textColor = "black" , contained = false }: SubmitButtonProps) {
    const { handleSubmit } = useFormikContext();

    return <AppButton title={title} contained={contained} textColor={textColor} onPress={handleSubmit} />;
}
