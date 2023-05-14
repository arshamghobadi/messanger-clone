'use client';
import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div>
      <label
        className=" block text-sm font-medium leading-6 text-gray-600"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        disabled={disabled}
        autoComplete={id}
        {...register(id, { required })}
        type={type}
        className={clsx(
          `
        form-input
        block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
        ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
         focus:ring-sky-600 sm:text-sm sm:leading-6
        `,
          errors[id] && 'focus:ring-rose-500',
          disabled && 'opacity-50 cursor-pointer'
        )}
      />
    </div>
  );
};

export default Input;
