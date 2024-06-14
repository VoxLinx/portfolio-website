import React from 'react';

const Contact = () => (
  <div>
    <h2>Contact Me</h2>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
    <p>Links to social media profiles (LinkedIn, GitHub, etc.).</p>
  </div>
);

export default Contact;
