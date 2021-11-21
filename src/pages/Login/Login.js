import React from 'react';
import { useForm } from 'react-hook-form';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo/logo.png'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";


    const { signInUsingGoogle, logInWithEmailPassword } = useAuth();

    const onSubmit = data => {
        logInWithEmailPassword(data.email, data.password, redirect_url, history);
    };

    const logInWithGoogle = () => {
        signInUsingGoogle(redirect_url, history)
    }


    return (
        <div className="register text-center">
            <img src={logo} alt="" className="w-25" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">
                <div className="d-flex flex-column w-50 mx-auto gap-3 mt-4">
                    <input  {...register("email", { required: true })} className="rounded border py-1 px-3 fs-5" placeholder="email *" />
                    {errors.email && <span className="text-danger text-start">** email address is required</span>}

                    <input type="password" {...register("password", { required: true })} className="rounded border py-1 px-3 fs-5" placeholder="password *" />
                    {errors.password && <span className="text-danger text-start">** password is required</span>}

                    <input type="submit" value="Login" className="btn btn-primary w-100 mx-auto fs-4 mb-1" />
                </div>
            </form>
            <p>Login using</p>
            <div >
                <button onClick={logInWithGoogle} className="btn btn-secondary mx-5 fs-4 rounded"><i className="fab fa-google"></i></button>
            </div>
            <div className="p-4">
                <Link to="/register" >Don't have an account?? signup now</Link>
            </div>
        </div>
    );
};

export default Login;