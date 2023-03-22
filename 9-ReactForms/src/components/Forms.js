import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
/* Importing resolvers
    npm install @hookform/resolvers
*/
export const Forms = () => {
    // Creating a Schema to Shape how our data should look like for Validation
    const schema = yup.object().shape({
        fullName: yup.string().required("Your Full Name is Required"),
        email: yup.string().email().required("Your Email is Required"),
        age: yup.number().positive().integer().min(18).required("Your Age is Required"),
        password: yup.string().min(5).max(20).required("Your Password is Required"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match.").required("Confirmation of Password is Required"),
    })
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log(data);
        /*
            Eventually will link this to Firebase so I can manage
            User authentication
        */
    }
    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
            <input type = "text" placeholder= "Full Name..." {...register("fullName")}></input>
            <p>{errors.fullName?.message}</p>
            <input type = "text" placeholder= "Email..." {...register("email")}></input>
            <p>{errors.email?.message}</p>
            <input type = "number" placeholder= "Age..." {...register("age")}></input>
            <p>{errors.age?.message}</p>
            <input type = "password" placeholder= "Password..." {...register("password")}></input>
            <p>{errors.password?.message}</p>
            <input type = "password" placeholder= "Confirm Password..." {...register("confirmPassword")}></input>
            <p>{errors.confirmPassword?.message}</p>
            <input type = "submit"></input>
        </form>
    )
}