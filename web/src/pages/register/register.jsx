import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as IronAPI from "../../services/api-service";

export default function Register() {
  const { register, handleSubmit, formState: {errors}, setError } = useForm();
  const navigate = useNavigate();

  const handleRegister = async (user) => {
    try{
      const { email, password } = user
      user = await IronAPI.register(user);
      console.log(JSON.stringify(user));
      await IronAPI.login({ email, password });
      navigate("/")
    } catch(error) {
      if(error.response?.status === 400) {
        const { data } = error.response;
        console.log(data.errors);
        Object.keys(data.errors).forEach((errorKey) => {
          setError(errorKey, { message: data.errors[errorKey]})
        })
      } else {
        console.error(error);
      }
    }
  }

  return (
    <div className="m-3 d-flex flex-column justify-content-center align-items-center">
      <h1>Sign up</h1>
      <form className="w-25" onSubmit={handleSubmit(handleRegister)}>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="fa fa-user"></i>
          </span>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            placeholder="Nombre"
            {...register("name")}
          />
        </div>
        
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="fa fa-envelope"></i>
          </span>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="email@gmail.com"
            {...register("email")}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="Password"
            {...register("password")}
          />
        </div>

        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
