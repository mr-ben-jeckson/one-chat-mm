'use client';

import { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Inputs/Button";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant == 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant == 'REGISTER') {
            //Axios Register
        }

        if (variant == 'LOGIN') {
            //NextAuth Sign in
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        //NextAuth Social Sign In
    }
    return (
        <div
            className="
                mt-8
                sm:mx-auto
                sm:w-full
                sm:max-w-md
            "
        >
            <div
                className="
                bg-white
                px-4
                py-8
                shadow
                sm:rounded-lg
                sm:px-10
            "
            >
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant == 'REGISTER' && (
                        <Input
                            id="name"
                            label="Name"
                            register={register}
                            errors={errors}
                        />
                    )
                    }
                        <Input
                            id="email"
                            label="Email Address"
                            type="Email"
                            register={register}
                            errors={errors}
                        />
                        <Input
                            id="password"
                            label="Password"
                            type="password"
                            register={register}
                            errors={errors}
                        />
                        <div>
                            <Button />
                        </div>
                </form>
            </div>
        </div>
    )
}

export default AuthForm
