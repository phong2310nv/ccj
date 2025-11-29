import { SxProps } from '@mui/material';
import React from 'react';
import { FieldValues, FormProvider, FormProviderProps, SubmitHandler } from 'react-hook-form';
type RHFFormProps<T extends FieldValues> = {
  onSubmit: SubmitHandler<T>;
  className?: string;
  sx?: SxProps;
} & FormProviderProps<T>;

function RHFForm<T extends FieldValues = any>({
  className,
  children,
  onSubmit,
  ...methods
}: RHFFormProps<T>) {
  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
export default RHFForm;
