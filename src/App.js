import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`ชื่อผู้ใช้: ${formData.username}\nอีเมล: ${formData.email}`);
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1>สมัครสมาชิก</h1>
        <p>ภูตะวัน แสงมณีรัตนะชัย 6404528</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>ชื่อผู้ใช้:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="กรอกชื่อผู้ใช้"
              required
            />
          </div>
          <div className="input-group">
            <label>อีเมล:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="กรอกอีเมล"
              required
            />
          </div>
          <div className="input-group">
            <label>รหัสผ่าน:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="กรอกรหัสผ่าน"
              required
            />
          </div>
          <button type="submit" className="submit-btn">ลงทะเบียน</button>
        </form>
      </div>
    </div>
  );
}

export default App;
