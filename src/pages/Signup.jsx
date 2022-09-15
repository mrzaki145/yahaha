/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useFormik } from "formik";
import { signupSchema } from "../data/schemas";
import { Link } from "react-router-dom";
import { Footer } from "../components";
import Icon from "../components/common/Icon";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
} from "../data/images";

function Signup() {
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
      day: "",
      month: "",
      year: "",
      email: "",
      nickname: "",
      password: "",
      career: "",
      avatar: "",
      terms: false,
    },
    validateOnChange: true,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  return (
    <>
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <header className="form__header">
            <h1>Sign Up</h1>
            <p>
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </header>

          <div className="form__field">
            <label className="form__label">Birth Date</label>
            <div className="cols">
              <select
                name="month"
                className={`form__input select ${
                  errors.month && touched.month ? "invalid" : null
                }`}
                value={values.month}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Month</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                name="day"
                className={`form__input select ${
                  errors.day && touched.day ? "invalid" : null
                }`}
                value={values.day}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select
                name="year"
                className={`form__input select ${
                  errors.year && touched.year ? "invalid" : null
                }`}
                value={values.year}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Year</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
              </select>
            </div>
            {(errors.day && touched.day) ||
            (errors.month && touched.month) ||
            (errors.year && touched.year) ? (
              <span className="form__error-msg">
                <Icon name="alert-circle" />
                {errors.day || errors.month || errors.year}
              </span>
            ) : null}
          </div>
          <div className="form__field">
            <input
              type="eamil"
              name="email"
              placeholder="Eamil"
              className={`form__input ${
                errors.email && touched.email ? "invalid" : null
              }`}
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
              type="text"
              name="nickname"
              placeholder="Nickname"
              className={`form__input ${
                errors.nickname && touched.nickname ? "invalid" : null
              }`}
              value={values.nickname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.nickname && touched.nickname ? (
              <span className="form__error-msg">
                <Icon name="alert-circle" />
                {errors.nickname}
              </span>
            ) : null}
          </div>
          <div className="form__field">
            <input
              type="password"
              name="password"
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
            <select
              name="career"
              className={`form__input select ${
                errors.career && touched.career ? "invalid" : null
              }`}
              value={values.career}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">What is your career?</option>
              <option value="Programmer">Programmer</option>
              <option value="Designer">Designer</option>
              <option value="Producer">Producer</option>
              <option value="Artist">Artist</option>
              <option value="Artist">Artist</option>
              <option value="Generalist">Generalist</option>
              <option value="Biz">Biz/Marketing</option>
              <option value="Hobbyist">Hobbyist</option>
              <option value="Other">Other</option>
            </select>
            {errors.career && touched.career ? (
              <span className="form__error-msg">
                <Icon name="alert-circle" />
                {errors.career}
              </span>
            ) : null}
          </div>
          <div className="form__field">
            <div className="avatar">
              <label className="avatar__label">
                <span>Choose your preferred avatar</span>
              </label>
              <div className="avatars">
                <label style={{ "--clr": "rgb(10, 156, 123)" }}>
                  <input
                    type="radio"
                    name="avatar"
                    value="avatar1"
                    checked={values.avatar == "avatar1"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <img src={avatar1} alt="" />
                </label>
                <label style={{ "--clr": "rgb(106, 58, 171)" }}>
                  <input
                    type="radio"
                    name="avatar"
                    value="avatar2"
                    checked={values.avatar == "avatar2"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <img src={avatar2} alt="" />
                </label>
                <label style={{ "--clr": "rgb(57, 66, 188)" }}>
                  <input
                    type="radio"
                    name="avatar"
                    value="avatar3"
                    checked={values.avatar == "avatar3"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <img src={avatar3} alt="" />
                </label>
                <label style={{ "--clr": "rgb(7, 125, 147)" }}>
                  <input
                    type="radio"
                    name="avatar"
                    value="avatar4"
                    checked={values.avatar == "avatar4"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <img src={avatar4} alt="" />
                </label>
                <label style={{ "--clr": "rgb(155, 60, 154)" }}>
                  <input
                    type="radio"
                    name="avatar"
                    value="avatar5"
                    checked={values.avatar == "avatar5"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <img src={avatar5} alt="" />
                </label>
                <label style={{ "--clr": "rgb(89, 153, 61)" }}>
                  <input
                    type="radio"
                    name="avatar"
                    value="avatar6"
                    checked={values.avatar == "avatar6"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <img src={avatar6} alt="" />
                </label>
              </div>
              {errors.avatar && touched.avatar ? (
                <span className="form__error-msg">
                  <Icon name="alert-circle" />
                  {errors.avatar}
                </span>
              ) : null}
            </div>
          </div>
          <div className="form__field">
            <button
              type="submit"
              className="form__btn"
              disabled={!(isValid && dirty)}
            >
              Sign Up
            </button>
          </div>
          <div className="form__field">
            <label className="form__checkbox" htmlFor="terms">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                checked={values.terms}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="box"></span>
              <span className="txt">
                I have read and agree to the Yahaha <a href="#">Terms of Use</a>{" "}
                and <a href="#">Data Policy</a>.
              </span>
            </label>
            {errors.terms && touched.terms ? (
              <span className="form__error-msg">
                <Icon name="alert-circle" />
                {errors.terms}
              </span>
            ) : null}
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Signup;
