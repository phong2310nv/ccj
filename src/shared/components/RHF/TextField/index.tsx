'use client';
import React, { ChangeEvent, ReactNode } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Controller, useFormContext } from 'react-hook-form';
import {
  Box,
  BoxProps,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputBase,
  InputBaseProps,
  InputLabel,
  SvgIcon,
  Tooltip,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
type RHFTextFieldProps = {
  label?: ReactNode;
  name: string;
  tooltip?: ReactNode;
  requiredMark?: boolean;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  wrapperProps?: BoxProps;
} & Omit<InputBaseProps, 'error' | 'value' | 'type'>;

const RHFTextField = ({
  onChange,
  wrapperProps,
  endAdornment,
  startAdornment,
  label,
  name,
  id,
  placeholder,
  requiredMark,
  tooltip,
  ...rest
}: RHFTextFieldProps) => {
  const { control } = useFormContext();
  const inputId = id || `${name}-text-field`;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const { onChange: onChangeForm, onBlur, value, name, ref } = field;
        const { error } = fieldState;
        return (
          <Box {...wrapperProps}>
            {!!label && (
              <InputLabel htmlFor={inputId}>
                {label}
                {requiredMark && (
                  <Box component='span' ml={0.5} style={{ color: '#8333D7' }}>
                    *
                  </Box>
                )}
                {!!tooltip && (
                  <Tooltip title={tooltip} placement='right'>
                    <IconButton size='small'>
                      <InfoOutlinedIcon sx={{ fontSize: 14, color: '#A4A7AE' }} />
                    </IconButton>
                  </Tooltip>
                )}
              </InputLabel>
            )}
            <InputBase
              id={inputId}
              name={name}
              type='text'
              error={!!error}
              value={value ?? ''}
              onBlur={onBlur}
              fullWidth
              onChange={e => {
                const value = e.target.value;
                onChangeForm(value);
                onChange?.(value, e);
              }}
              placeholder={placeholder}
              inputRef={ref}
              startAdornment={startAdornment}
              endAdornment={
                <>
                  {endAdornment}
                  {error ? (
                    <InputAdornment position='end'>
                      <SvgIcon
                        component={ErrorOutlineIcon}
                        inheritViewBox
                        sx={{
                          color: 'error.main',
                          fontSize: '16px',
                        }}
                      />
                    </InputAdornment>
                  ) : (
                    <></>
                  )}
                </>
              }
              {...rest}
            />
            {!!error && <FormHelperText error>{error?.message}</FormHelperText>}
          </Box>
        );
      }}
    />
  );
};

export default RHFTextField;
