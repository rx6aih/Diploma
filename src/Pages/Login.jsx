import React from 'react';
import figure from "../Images/Pages/Login/Figure.png"
import figure2 from "../Images/Pages/Login/figure2.png"
import figure3 from "../Images/Pages/Login/figure3.png"
import figure4 from "../Images/Pages/Login/figure4.png"
import figure5 from "../Images/Pages/Login/figure5.png"
import {Form, Input, Select, SelectItem, Checkbox, Button} from "@heroui/react";

const Login = () => {
    const [password, setPassword] = React.useState("");
    const [submitted, setSubmitted] = React.useState(null);
    const [errors, setErrors] = React.useState({});

    // Real-time password validation
    const getPasswordError = (value) => {
        if (value.length < 4) {
            return "Password must be 4 characters or more";
        }
        if ((value.match(/[A-Z]/g) || []).length < 1) {
            return "Password needs at least 1 uppercase letter";
        }
        if ((value.match(/[^a-z]/gi) || []).length < 1) {
            return "Password needs at least 1 symbol";
        }

        return null;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Custom validation checks
        const newErrors = {};

        // Password validation
        const passwordError = getPasswordError(data.password);

        if (passwordError) {
            newErrors.password = passwordError;
        }

        // Username validation
        if (data.name === "admin") {
            newErrors.name = "Nice try! Choose a different username";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            return;
        }

        if (data.terms !== "true") {
            setErrors({terms: "Please accept the terms"});

            return;
        }

        // Clear errors and submit
        setErrors({});
        setSubmitted(data);
    };


    return (
        <div className={"flex items-center justify-center bg-blue-100/40 shadow-[inset_0px_0px_100px_8px_rgba(0,_0,_0,_0.1)] pt-40 pb-48 rounded-xl overflow-hidden"}>
            <img src={figure} className={"absolute left-40 opacity-40 rotate-[20deg]"}/>
            <img src={figure2} className={"absolute right-60 rotate-[60deg] opacity-15"}/>
            <img src={figure3} className={"absolute bottom-10  rotate-[60deg] opacity-20"}/>
            <img src={figure4} className={"absolute bottom-10 right-3 rotate-[10deg] opacity-50"}/>
            <img src={figure5} className={"absolute bottom-10 left-[36em] bottom-[10em] rotate-[10deg] opacity-30"}/>

            <div className={"flex justify-center items-center flex-col w-[31em] h-[40em] shadow-[inset_0px_0px_34px_-6px_rgba(0,_0,_0,_0.1)] border-solid border-2 border-zinc-500/10 backdrop-blur-sm bg-indigo-200/30 rounded-[20px]"}>
                <div className={"flex flex-col w-[50%] h-[90%] flex items-center justify-center"}>
                    <p className={"text-[26px] font-thin text-white/100 mb-10"}>Войти в аккаут</p>
                    <Form
                        className="w-full justify-center items-center space-y-4"
                        validationErrors={errors}
                        onReset={() => setSubmitted(null)}
                        onSubmit={onSubmit}
                    >
                        <div className="flex flex-col gap-4 max-w-md">
                            <Input
                                isRequired
                                errorMessage={({validationDetails}) => {
                                    if (validationDetails.valueMissing) {
                                        return "Введите ваше имя...";
                                    }

                                    return errors.name;
                                }}
                                label="Имя"
                                labelPlacement="outside"
                                name="name"
                                placeholder="Enter your name"
                            />

                            <Input
                                isRequired
                                errorMessage={({validationDetails}) => {
                                    if (validationDetails.valueMissing) {
                                        return "Please enter your email";
                                    }
                                    if (validationDetails.typeMismatch) {
                                        return "Please enter a valid email address";
                                    }
                                }}
                                label="Email"
                                labelPlacement="outside"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                            />

                            <Input
                                isRequired
                                errorMessage={getPasswordError(password)}
                                isInvalid={getPasswordError(password) !== null}
                                label="Password"
                                labelPlacement="outside"
                                name="password"
                                placeholder="Enter your password"
                                type="password"
                                value={password}
                                onValueChange={setPassword}
                            />

                            <Select
                                isRequired
                                label="Country"
                                labelPlacement="outside"
                                name="country"
                                placeholder="Select country"
                            >
                                <SelectItem key="ar">Argentina</SelectItem>
                                <SelectItem key="us">United States</SelectItem>
                                <SelectItem key="ca">Canada</SelectItem>
                                <SelectItem key="uk">United Kingdom</SelectItem>
                                <SelectItem key="au">Australia</SelectItem>
                            </Select>

                            <Checkbox
                                isRequired
                                classNames={{
                                    label: "text-small",
                                }}
                                isInvalid={!!errors.terms}
                                name="terms"
                                validationBehavior="aria"
                                value="true"
                                onValueChange={() => setErrors((prev) => ({...prev, terms: undefined}))}
                            >
                                I agree to the terms and conditions
                            </Checkbox>

                            {errors.terms && <span className="text-danger text-small">{errors.terms}</span>}

                            <div className="flex gap-4">
                                <Button className="w-full" color="primary" type="submit">
                                    Submit
                                </Button>
                                <Button type="reset" variant="bordered">
                                    Reset
                                </Button>
                            </div>
                        </div>

                        {submitted && (
                            <div className="text-small text-default-500 mt-4">
                                Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
                            </div>
                        )}
                    </Form>
                </div>

            </div>

        </div>

    );
};

export default Login;