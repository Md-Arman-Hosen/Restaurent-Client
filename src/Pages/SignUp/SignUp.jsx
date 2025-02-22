import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const SignUp = () => {

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {createUser,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate ();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then (result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile (data.name, data.photoURL)
            .then (()=>{
                console.log('user profile info updated')
                reset();
                 Swal.fire({
                                    title: "User Profile info Updated SuccessFully.",
                                    showClass: {
                                      popup: `
                                        animate__animated
                                        animate__fadeInUp
                                        animate__faster
                                      `
                                    },
                                    hideClass: {
                                      popup: `
                                        animate__animated
                                        animate__fadeOutDown
                                        animate__faster
                                      `
                                    }
                                  });
                                  navigate('/');
            })
            .catch (error => console.log(error))
        })
    };

    return (
        <>
            <Helmet>
                <title>Food Craving | SignUp</title>
            </Helmet>


            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label"> <span className="label-text">Name</span></label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600 pt-2">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label"> <span className="label-text">Photo URL</span></label>
                                <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="photoURL" className="input input-bordered" />
                                {errors.name && <span className="text-red-600 pt-2">photoURL is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label"> <span className="label-text">Email</span></label>
                                <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label"><span className="label-text">Password</span></label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 20,
                                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/
                                })} name="password" placeholder="password" className="input input-bordered" />

                                {errors.password?.type === 'minLength' && <p className="text-red-600 pt-2">Password must be 8 Characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600 pt-2">Password must be less than 20 Characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600 pt-2">Password must have one uppercase,one lower case ,one number and special Characters</p>}


                                <label className="label"><a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                                <p> <small> Already Have a Account? <Link to="/login">Login Now</Link> </small> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;