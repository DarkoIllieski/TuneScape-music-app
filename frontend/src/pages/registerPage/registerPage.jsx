import axios from 'axios';

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/register', {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });

    console.log('Registration successful:', response.data);
    // You might want to redirect to a login page or handle success in another way.


  } catch (error) {
    console.error('Error during registration:', error.response.data);
    // Handle registration error, e.g., display an error message to the user.
  }

  setFormData({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
