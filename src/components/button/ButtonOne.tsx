'use client';

import { useFormStatus } from 'react-dom';
import React, { ReactNode } from 'react';

type ButtonProps = {
  key?: number;
  title?: string;
  processText?: string;
  btnText1?: string;
  btnText2?: string;
  btnText1Classes?: string;
  btnText2Classes?: string;
  icon1?: ReactNode;
  icon2?: ReactNode;
  classes?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
};

const ButtonOne: React.FC<ButtonProps> = ({
  title = '',
  processText = 'Processing...',
  btnText1 = '',
  btnText2 = '',
  btnText1Classes = '',
  btnText2Classes = '',
  icon1 = null,
  icon2 = null,
  classes = '',
  type = 'button',
  disabled = false,
  onClick = () => {}
}) => {
  const { pending } = useFormStatus() || {};

  return (
    <button
      key={0}
      type={type}
      title={title || btnText1}
      className={`flex items-center justify-center gap-2 text-white hover:text-primary bg-primary hover:bg-transparent border border-transparent hover:border-primary rounded-radius-8 hover:cursor-pointer shadow-xl focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none ${classes} ${pending || disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={pending || disabled}
      onClick={onClick}
    >
      {icon1 && <span>{icon1}</span>}
      <span className={`${btnText2Classes}`}>{btnText2}</span>
      <span className={`${btnText1Classes}`}>{pending ? processText : btnText1}</span>
      {icon2 && <span>{icon2}</span>}
    </button>
  );
};

export default ButtonOne;
