// src/components/ContactForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register, handleSubmit } = useForm();
  
    const onSubmit = async (data) => {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      alert(result.message);
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', backgroundColor: 'rgb(246,246,246)', padding:"50px 0", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '400px', padding: "20px", textAlign: 'center', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <label>
            Name:
            <input {...register('name')} style={{ width: '90%', padding: '8px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>
          <label>
            Email:
            <input {...register('email')} style={{ width: '90%', padding: '8px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </label>
          <label>
            Message:
            <textarea {...register('message')} style={{ width: '90%', padding: '8px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '80px', fontSize: '16px' }} />
          </label>
          <button type="submit" style={{ backgroundColor: '#3b2e36', color: '#fff', padding: '10px 20px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
    );
  };

  export default ContactForm;