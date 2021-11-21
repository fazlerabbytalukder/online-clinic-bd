import React from 'react';
import { useForm } from 'react-hook-form';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo/logo.png';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";

    const { signInUsingGoogle, registerWithEmailPassword } = useAuth();

    const onSubmit = data => {
        registerWithEmailPassword(data.name, data.email, data.password, redirect_url, history);
    };


    const logInWithGoogle = () => {
        signInUsingGoogle(redirect_url, history)
    }

    return (
        <div className="register text-center">
            <img src={logo} alt="" className="w-25" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">
                <div className="d-flex flex-column w-50 mx-auto gap-4 mt-4">
                    <input  {...register("name", { required: true })} className="rounded border py-1 px-3 fs-5" placeholder="name *" />
                    {errors.name && <span className="text-danger text-start">** Name is required</span>}

                    <input  {...register("email", { required: true })} className="rounded border py-1 px-3 fs-5" placeholder="email *" />
                    {errors.email && <span className="text-danger text-start">** email address is required</span>}

                    <input  {...register("password", { required: true })} className="rounded border py-1 px-3 fs-5" placeholder="password *" />
                    {errors.password && <span className="text-danger text-start">** password is required</span>}

                    <input  {...register("confirmPassword", { required: true })} className="rounded border py-1 px-3 fs-5" placeholder="confirm password *" />
                    {errors.confirmPassword && <span className="text-danger text-start">** confirm password is required</span>}

                    <input type="submit" value="register" className="btn btn-primary w-100 mx-auto fs-4 mb-1" />
                </div>
            </form>
            <p>Signup using</p>
            <div >
                <button onClick={logInWithGoogle} className="btn btn-secondary mx-5 fs-4 rounded"><i className="fab fa-google"></i></button>
            </div>
            <div className="p-4">
                <Link to="/login" >Already have an account?? Login now</Link>
            </div>
        </div>
    );
};

export default Register;