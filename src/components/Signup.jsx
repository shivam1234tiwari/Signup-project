import React from "react";

const Signup = () => {
  return (
    <div className="container">
      <div className="form-container">
        <form action="">
          <h2>Signup Form</h2>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div class="mb-3">
            <label for="Email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="email"
            />
          </div>
             <div class="mb-3">
            <label for="password" class="form-label">
                Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="password"
            />
          </div>
        </form>
        <button type="submit" className="btn-submit">
  Signup
</button>

      </div>
    </div>
  );
};

export default Signup;
