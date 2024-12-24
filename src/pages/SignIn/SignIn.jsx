import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin";



const SignIn = () => {


    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    // const location = useLocation();
    // console.log('in signin page', location);
    // const from = location.state || '/';


    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signInUser(email, password)
            .then(result => {
                // console.log('Login successful: ', result.user.email);

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 2000
                });
                // e.target.reset();
                // navigate(`/myEquipmentsList/${result.user.email}`);

                // const user = { email: result.user.email };
                // axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                //     .then(res => console.log(res.data))



                // Swal.fire({
                //     title: 'Login Successful',
                //     icon: 'success',
                //     confirmButtonText: 'ok'
                // });
                // form.reset();
                // navigate(from);
            })
            .catch(error => {
                console.log('ERROR from Firebase', error.message);
                Swal.fire({
                    title: 'Error!',
                    text: 'Invalid Email or Password!!',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
                // e.target.reset();
            })

    }




    return (
        <div className="hero bg-base-100 min-h-[60vh] mt-10 mb-20">

            <Helmet>
                <title>Elkano64 - Login</title>
            </Helmet>

            <div className="hero-content flex-col lg:flex-row-reverse gap-8">

                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login to continue!</h1>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p>New to this website?</p>
                        <Link to="/register">
                            <button className="mt-1.5 btn btn-success text-white">Create new account</button>
                        </Link>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignIn;