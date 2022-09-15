import { useEffect } from "react";
import { useFormik } from "formik";
import { signinSchema } from "../data/schemas";
import { Link } from "react-router-dom";
import { Footer } from "../components";
import Icon from "../components/common/Icon";

function Signin() {
  const {
    values,
    errors,
    touched,
    dirty,
    isValid,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validateOnChange: true,
    validationSchema: signinSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    document.body.classList.add("sign");
    return () => {
      document.body.classList.remove("sign");
    };
  }, []);

  return (
    <>
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__header">
            <h1>Sign In</h1>
          </div>
          <div className="form__field">
            <input
              type="email"
              name="email"
              placeholder="Eamil"
              className={`form__input ${
                errors.email && touched.email ? "invalid" : null
              }`}
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <span className="form__error-msg">
                <Icon name="alert-circle" />
                {errors.email}
              </span>
            ) : null}
          </div>
          <div className="form__field">
            <input
              type="password"
              name="password"
              minLength={8}
              maxLength={30}
              placeholder="Password"
              className={`form__input ${
                errors.password && touched.password ? "invalid" : null
              }`}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <span className="form__error-msg">
                <Icon name="alert-circle" />
                {errors.password}
              </span>
            ) : null}
          </div>
          <div className="form__field">
            <button
              type="submit"
              className="form__btn"
              disabled={!(isValid && dirty)}
            >
              Sign in
            </button>
          </div>
          <div className="form__field row">
            <div>
              <label className="form__checkbox" htmlFor="ramember">
                <input
                  type="checkbox"
                  id="ramember"
                  name="rememberMe"
                  checked={values.rememberMe}
                  onChange={handleChange}
                />
                <span className="box"></span>
                <span className="txt">Remember me</span>
              </label>
            </div>
            <Link to="/forget">Forgot password?</Link>
          </div>
          <div className="form__footer">
            <p>
              Create an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Signin;
