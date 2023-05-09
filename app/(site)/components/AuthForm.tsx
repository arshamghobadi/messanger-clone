'use client';

import Input from '@/app/components/inputs/input';
import { useCallback, useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
type Props = {};

type variant = 'LOGIN' | 'REGISTER';
const AuthForm = (props: Props) => {
  const [variant, setVariant] = useState<variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className=" bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className=" space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input id="name" register={register} label="Name" errors={errors} />
          )}
          <Input
            id="email"
            register={register}
            label="Email"
            type="email"
            errors={errors}
          />
          <Input
            id="password"
            register={register}
            label="Password"
            type="password"
            errors={errors}
          />
          <button>test</button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
