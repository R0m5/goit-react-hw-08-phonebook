import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/authOperations';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
      <label className={css.formLabel}>
        Email
        <input className={css.formInput} type="email" name="email" />
      </label>
      <label className={css.formLabel}>
        Password
        <div className={css.passwordInputWrapper}>
          <input
            className={css.formInput}
            type={showPassword ? 'text' : 'password'}
            name="password"
          />
          <button
            className={css.passwordToggleBtn}
            type="button"
            onClick={handleTogglePassword}
            tabIndex="-1"
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
      </label>
      <button className={css.logInBtn} type="submit">
        Log In
      </button>
    </form>
  );
};
