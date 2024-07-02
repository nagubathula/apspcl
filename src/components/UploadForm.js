"use client"

import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [type, setType] = useState('');
  const [reportname, setReportname] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('type', type);
    formData.append('reportname', reportname);
    formData.append('title', title);
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/api/reports', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="">Select Type</option>
          <option value="Report">Report</option>
          <option value="Return">Return</option>
        </select>
      </div>
      <div>
        <label>Report Name:</label>
        <input
          type="text"
          value={reportname}
          onChange={(e) => setReportname(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>File:</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
