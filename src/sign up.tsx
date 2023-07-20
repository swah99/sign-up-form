import { useForm } from "react-hook-form";
import styles from "./signup.module.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  function formSubmission() {
    window.alert("Form submitted :)");
    window.location.reload();
  }

  return (
    <>
      <div className={styles.myPage}>
        <div className={styles.wholePage}>
          <div className={styles.leftSide}>
            <h1>Learn to code by watching others</h1>
            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.purpleBox}>
              Try it free 7 days then $20/mo. thereafter
            </div>
            <div className={styles.userForm}>
              <form onSubmit={handleSubmit(formSubmission)}>
                <input
                  {...register("firstName", {
                    required: "This field is required",
                    minLength: {
                      value: 3,
                      message: "First name needs to be 3 characters or more",
                    },
                    maxLength: {
                      value: 12,
                      message: "First name needs to be 12 characters or less",
                    },
                  })}
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <p className={styles.errorMessage}>
                    {" "}
                    {errors.firstName.message}{" "}
                  </p>
                )}
                <input
                  {...register("lastName", {
                    required: "This field is required",
                    minLength: {
                      value: 3,
                      message: "Last name needs to be 3 characters or more",
                    },
                    maxLength: {
                      value: 12,
                      message: "Last name needs to be 12 characters or less",
                    },
                  })}
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <p className={styles.errorMessage}>
                    {" "}
                    {errors.lastName.message}{" "}
                  </p>
                )}
                <input
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Email Address"
                />
                {errors.email && (
                  <p className={styles.errorMessage}>
                    {" "}
                    {errors.email.message}{" "}
                  </p>
                )}
                <input
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 6,
                      message: "Password needs to be 6 characters or more",
                    },
                    maxLength: {
                      value: 12,
                      message: "First name needs to be 12 characters or less",
                    },
                  })}
                  placeholder="Password"
                />
                {errors.password && (
                  <p className={styles.errorMessage}>
                    {" "}
                    {errors.password.message}{" "}
                  </p>
                )}
                <button type="submit">Claim your free trial </button>
              </form>
              <div className={styles.terms}>
                <p>
                  By clicking the button, you are agreeing to our{" "}
                  <a href="#" target="_blank">
                    Terms and Services
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p className={styles.attribution}>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Okech Swah</a>.
          </p>
        </footer>
      </div>
    </>
  );
}
export default SignUpForm;
