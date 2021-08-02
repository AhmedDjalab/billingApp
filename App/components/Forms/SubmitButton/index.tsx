import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../../AppButton';
import SubmitButtonProps from './model';

export default function SubmitButton({ title , textColor }: SubmitButtonProps) {
    const { handleSubmit } = useFormikContext();

    return <AppButton title={title} textColor={textColor} onPress={handleSubmit} />;
}
