import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
        Username
        <input className={css.formInput} type="text" name="name" />
      </label>
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
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </label>
      <button className={css.registerBtn} type="submit">
        Sign In
      </button>
    </form>
  );
};

// {
//   showPassword ? (
//   <svg width="40" height="40" aria-label="Перемикач">
//     <use class="icon-eye" href="./icons/symbols.svg#icon-eye"></use>
//   </svg>
// ) : (
//   <svg width="40" height="40" aria-label="Перемикач">
//     <use
//       class="icon-eye-blocked"
//       href="./icons/symbols.svg#icon-eye-blocked"
//     ></use>
//   </svg>
//   );
// }
