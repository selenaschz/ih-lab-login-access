import { useForm } from 'react-hook-form';
import * as IronAPI from '../../services/api-service'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const navigate = useNavigate();

  const handleLogin = async (user) => {
    try {
      user = await IronAPI.login(user);
      console.log(JSON.stringify(user))
      navigate("/");
    } catch(error) {
      if(error.response?.status === 401) {
        const { data } = error.response;
        console.log(data.errors)
        Object.keys(data.errors)
          .forEach((errorKey) => setError(errorKey, { message: data.errors[errorKey]}))
      } else {
        console.error(error);
      }
    }
  }

  return (
    <div className='m-3 d-flex flex-column justify-content-center align-items-center'>
      <h1>Log in</h1>
      <form className='w-25' onSubmit={ handleSubmit(handleLogin) }>
        <div className="input-group mb-3">
          <span className="input-group-text"> <i className="fa fa-user f"></i></span>
          <input type="text" className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
            placeholder="email@gmail.com" {...register("email")} />
          {(errors.email) && (<div className='invalid-feedback'> {errors.email?.message} </div>)}
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text"> <i className="fa fa-lock"></i></span>
          <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`}  
            placeholder="Password" {...register("password")} />
          {(errors.password) && (<div className='invalid-feedback'> { errors.password?.message }</div>)}
        </div>
        <div className="d-flex justify-content-center">
          <button className='btn btn-primary' type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}
