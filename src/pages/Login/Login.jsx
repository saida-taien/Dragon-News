import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const handleLogin = e =>
    {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email , password);

        //In another way

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');


        //sign in user
        signIn(email , password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>
            {
                console.error("Error : " , error);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 container mx-auto">
                <p className="text-6xl text-center font-bold py-4">Login</p>
                <form className="card-body" onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center pb-3">Don`t have an account ? <Link to='/register' className="text-blue-700 font-bold">Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;