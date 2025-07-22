import React, { useState } from 'react';
import './MeetingForm.css';

const MeetingForm = ({ onSubmit }) => {
  const [meetingUrl, setMeetingUrl] = useState('');
  const [template, setTemplate] = useState('standard');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Call backend API
      const response = await fetch('http://localhost:3001/api/meetings/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ meetingUrl, template }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate meeting notes');
      }

      const data = await response.json();
      onSubmit(data);
    } catch (error) {
      console.error('Error generating meeting notes:', error);
      alert('Failed to generate meeting notes. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="card shadow p-4 meeting-form-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <div className="col-md-8">
            <input
              type="url"
              className="form-control"
              id="teams-url"
              placeholder="Enter Teams meeting URL"
              value={meetingUrl}
              onChange={(e) => setMeetingUrl(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              id="template-select"
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
            >
              <option value="standard">Standard meeting</option>
              <option value="client">Client meeting</option>
              <option value="scrum">Scrum meeting</option>
              <option value="standup">Daily standup</option>
            </select>
          </div>
        </div>
        <button 
          type="submit" 
          className={`btn btn-primary ${isProcessing ? 'btn-processing' : ''}`}
          disabled={isProcessing}
        >
          <span style={{ position: 'relative', zIndex: 2 }}>
            {isProcessing ? 'Processing...' : 'Generate Notes'}
          </span>
        </button>
      </form>
    </div>
  );
};

export default MeetingForm;