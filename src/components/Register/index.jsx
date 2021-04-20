import React from "react";
import { useMutation } from "react-query";
import axios from "../../utils/axios";
import { Link, NavLink } from "react-router-dom";

const courses = [
  { name: "Networking Essentials", value: "Networking Essentials" },
  {
    name: "CCNA1v7: Introduction to Networking (ITN)",
    value: "CCNA1v7: Introduction to Networking (ITN)",
  },
  {
    name: "CCNA2v7: Switching, Routing, and Wireless Essentials (SRWE)",
    value: "CCNA2v7: Switching, Routing, and Wireless Essentials (SRWE)",
  },
  {
    name: "CCNA3v7: Enterprise Networking, Security and Automation (ENSA)",
    value: "CCNA3v7: Enterprise Networking, Security and Automation (ENSA)",
  },
  {
    name: "CCNP Enterprise: Advanced Routing (ENARSI)",
    value: "CCNP Enterprise: Advanced Routing (ENARSI)",
  },
  {
    name: "CCNP Enterprise: Core Networking (ENCOR)",
    value: "CCNP Enterprise: Core Networking (ENCOR)",
  },
  {
    name: "PCAP: Programming Essentials in Python",
    value: "PCAP: Programming Essentials in Python",
  },
  {
    name: "CLA: Programming Essential in C",
    value: "CLA: Programming Essential in C",
  },
  {
    name: "CLP: Advanced Programming in C",
    value: "CLP: Advanced Programming in C",
  },
  {
    name: "CPA: Programming Essentials C++",
    value: "CPA: Programming Essentials C++",
  },
  {
    name: "Introduction to Internet of Things (IoT)",
    value: "Introduction to Internet of Things (IoT)",
  },
  {
    name: "IoT Fundamentals: Connecting Things",
    value: "IoT Fundamentals: Connecting Things",
  },
  {
    name: "Introduction to Cybersecurity",
    value: "Introduction to Cybersecurity",
  },
  {
    name: "Cybersecurity Essentials",
    value: "Cybersecurity Essentials",
  },
  {
    name: "Entrepreneurship",
    value: "Entrepreneurship",
  },
];

export default function Register() {
  const [lastName, setLastName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState(false)

  const mutateRegistration = useMutation(
    (user) => axios.post("/create", user),
    {
      onSuccess: () => {
        setSuccess(true);
      },
      onError: (e) => {
        setErrMsg(e.response.data.error)
        setError(true);
      },
    }
  );

  const register = (e) => {
    setError(false)
    e.preventDefault();
    const user = {
      lastName,
      surname,
      email,
      phoneNumber,
      course,
    };

    console.log(mutateRegistration.isLoading);
    mutateRegistration.mutate(user)
  };
  return (
    <div className="container">
      <header style={{ margin: " 2rem 0 2rem 0" }}>
        <h2>Register</h2>
      </header>
      {error ? (
        <div class="alert alert-danger" role="alert">
          {errMsg}
        </div>
      ) : null}
      {success ? (
        <div class="alert alert-success" role="alert">
          Registered Successful, Thank you for choosing Multifacet Technologies. <Link to="/">Back to Home Page</Link> 
        </div>
      ) : (
        <form onSubmit={register}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Last Name
            </label>
            <input
              required
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="John"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">
              Surname
            </label>
            <input
              required
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type="text"
              class="form-control"
              id="exampleFormControlInput2"
              placeholder="Torvald"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput3" class="form-label">
              Phone Number
            </label>
            <input
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="number"
              class="form-control"
              id="exampleFormControlInput3"
              placeholder="0813438****"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput4" class="form-label">
              Courses
            </label>
            <select
              required
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              id="exampleFormControlInput4"
              class="form-select"
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              {courses.map((course, index) => (
                <option key={index} value={course.value}>
                  {course.name}
                </option>
              ))}
              {/* <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option> */}
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput5" class="form-label">
              Email address
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              class="form-control"
              id="exampleFormControlInput5"
              placeholder="john@gmail.com"
            />
          </div>
          <div className="" style={{ float: "right" }}>
            <button
              disabled={mutateRegistration.isLoading}
              type="submit"
              class="btn btn-primary"
            >
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
