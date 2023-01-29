import classes from './SignIn.module.scss';

export const SignIn = () => {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <label>
          <span>Username</span>
          <input className={classes.input} />
        </label>
        <label>
          <span>Password</span>
          <input className={classes.input} />
        </label>
        <button className={classes.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
