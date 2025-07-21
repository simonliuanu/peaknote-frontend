import React, { useEffect, useRef } from 'react';
import './MeetingMinutes.css';

const MeetingMinutes = ({ meetingData, onDownload, onShare }) => {
  const minutesRef = useRef(null);

  useEffect(() => {
    if (minutesRef.current) {
      minutesRef.current.classList.add('show');
      minutesRef.current.scrollIntoView({ behavior: 'smooth' });

      // Add paper reveal animation
      const paper = minutesRef.current.querySelector('.a4-paper');
      if (paper) {
        paper.classList.add('paper-reveal');
      }

      // Animate content elements
      setTimeout(() => {
        const paragraphs = minutesRef.current.querySelectorAll('.minutes-content p, .minutes-content h3, .minutes-content ul');
        paragraphs.forEach((p, index) => {
          p.classList.add('chat-bubble');
          p.style.animationDelay = (0.8 + index * 0.1) + 's';
        });
      }, 700);
    }
  }, [meetingData]);

  const handleDownload = () => {
    onDownload();
    alert('Downloading meeting minutes as PDF...');
  };

  const handleShare = () => {
    onShare();
  };

  const getNameFromUrl = (url) => {
    try {
      const urlObj = new URL(url);
      if (urlObj.pathname.includes('/')) {
        const parts = urlObj.pathname.split('/').filter(p => p);
        return parts[parts.length - 1].replace(/-/g, ' ');
      }
      return 'Teams Meeting';
    } catch(e) {
      return 'Teams Meeting';
    }
  };

  const generateContent = () => {
    switch(meetingData.template) {
      case 'client':
        return (
          <>
            <h3>Client Information</h3>
            <p>Client: Acme Corporation<br/>
            Representative: Sarah Johnson<br/>
            Contact: sarah@acmecorp.com</p>
            
            <h3>Meeting Objective</h3>
            <p>To review current project deliverables and gather feedback on the proposed designs.</p>
            
            <h3>Product Presentation</h3>
            <p>The team presented the latest prototype focusing on the user dashboard and reporting features.
            The client was impressed with the intuitive design but had questions about customization options.</p>
            
            <h3>Client Feedback</h3>
            <ul>
              <li>Likes the overall design direction and color scheme</li>
              <li>Wants more customization options for reports</li>
              <li>Concerned about the loading time for data-heavy dashboards</li>
              <li>Requested additional export formats (specifically PDF and Excel)</li>
            </ul>
            
            <h3>Agreed Changes</h3>
            <p>1. Add customizable report templates<br/>
            2. Optimize dashboard loading with progressive data loading<br/>
            3. Implement additional export options<br/>
            4. Adjust notification system based on feedback</p>
            
            <h3>Next Steps</h3>
            <p>Schedule a follow-up demo in two weeks to review the implemented changes.</p>
          </>
        );
      
      case 'scrum':
        return (
          <>
            <h3>Sprint Details</h3>
            <p>Sprint #14<br/>
            Period: May 1 - May 14, 2023<br/>
            Story Points Committed: 34</p>
            
            <h3>Sprint Review</h3>
            <p>Completed 28 out of 34 story points. Two stories moved to the next sprint due to unexpected complexity.</p>
            
            <h3>Completed Stories</h3>
            <ul>
              <li>PROJ-143: Implement user authentication - 8 points</li>
              <li>PROJ-145: Design dashboard layout - 5 points</li>
              <li>PROJ-146: Create data visualization components - 13 points</li>
              <li>PROJ-147: Fix notification bugs - 2 points</li>
            </ul>
            
            <h3>Carried Over Stories</h3>
            <ul>
              <li>PROJ-144: Implement API integration - 5 points (blocked by external dependency)</li>
              <li>PROJ-148: Optimize mobile responsiveness - 3 points</li>
            </ul>
            
            <h3>Sprint Retrospective</h3>
            <p><strong>What went well:</strong><br/>
            - Completed user authentication ahead of schedule<br/>
            - Good collaboration between design and development teams</p>
            
            <p><strong>What could be improved:</strong><br/>
            - Better estimation for API integration tasks<br/>
            - Earlier identification of external dependencies</p>
            
            <h3>Action Items for Next Sprint</h3>
            <ul>
              <li>Create a dependency checklist for stories</li>
              <li>Schedule a tech session for API integration challenges</li>
              <li>Adjust story point estimation for integration tasks</li>
            </ul>
          </>
        );
      
      case 'standup':
        return (
          <>
            <h3>Team Updates</h3>
            
            <p><strong>John (Frontend):</strong><br/>
            <em>Yesterday:</em> Completed the user profile component and fixed navigation bugs<br/>
            <em>Today:</em> Working on form validation and error handling<br/>
            <em>Blockers:</em> None</p>
            
            <p><strong>Jane (Backend):</strong><br/>
            <em>Yesterday:</em> Implemented the user authentication API endpoints<br/>
            <em>Today:</em> Working on data validation and security enhancements<br/>
            <em>Blockers:</em> Waiting for database access from operations</p>
            
            <p><strong>Bob (Design):</strong><br/>
            <em>Yesterday:</em> Finalized the dashboard mockups and shared with the team<br/>
            <em>Today:</em> Working on mobile responsive designs<br/>
            <em>Blockers:</em> Need feedback on the latest mockups</p>
            
            <p><strong>Alice (QA):</strong><br/>
            <em>Yesterday:</em> Created test cases for the authentication flow<br/>
            <em>Today:</em> Testing the profile component and reporting bugs<br/>
            <em>Blockers:</em> Need updated staging environment</p>
            
            <h3>Quick Announcements</h3>
            <ul>
              <li>Remember to update JIRA tickets by end of day</li>
              <li>Deploy to staging scheduled for tomorrow at 2 PM</li>
              <li>Team lunch on Friday to celebrate sprint completion</li>
            </ul>
          </>
        );
      
      default:
        return (
          <>
            <h3>Participants</h3>
            <p>John Doe, Jane Smith, Bob Johnson, Alice Williams</p>
            
            <h3>Agenda</h3>
            <p>1. Project status update<br/>
            2. Budget review<br/>
            3. Timeline adjustments<br/>
            4. Questions and next steps</p>
            
            <h3>Discussion Points</h3>
            <p>The team discussed the current project status, highlighting that most milestones have been met on time. 
            There were concerns about the integration phase which might require additional resources.</p>
            
            <p>Budget review showed that we are currently within the allocated budget, but there might be additional costs 
            associated with the new requirements that came in last week.</p>
            
            <p>Timeline adjustments were proposed for the testing phase to accommodate the integration challenges.</p>
            
            <h3>Action Items</h3>
            <ul>
              <li>John to provide updated resource allocation plan by Friday</li>
              <li>Jane to review the integration strategy and propose alternatives</li>
              <li>Bob to update the project timeline and share with stakeholders</li>
              <li>Alice to coordinate with the client about the new requirements</li>
            </ul>
            
            <h3>Next Meeting</h3>
            <p>Scheduled for next Tuesday at 10:00 AM</p>
          </>
        );
    }
  };

  return (
    <div className="minutes-section" ref={minutesRef}>
      <div className="chat-bubble" style={{ animationDelay: '0.1s' }}>
        <div className="a4-paper">
          <div className="minutes-header">
            <h2>Meeting Summary: {getNameFromUrl(meetingData.meetingUrl)}</h2>
            <p>Date: {new Date().toLocaleDateString()}</p>
            <p>Template: <span>{meetingData.template.charAt(0).toUpperCase() + meetingData.template.slice(1)}</span></p>
          </div>
          <div className="minutes-content">
            {generateContent()}
          </div>
        </div>
      </div>
      
      <div className="action-buttons chat-bubble" style={{ animationDelay: '0.3s' }}>
        <div className="tab-buttons">
          <button className="tab-button" onClick={handleDownload}>
            <span><i className="fas fa-download"></i> Download</span>
          </button>
          <button className="tab-button" onClick={handleShare}>
            <span><i className="fas fa-share-alt"></i> Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingMinutes;