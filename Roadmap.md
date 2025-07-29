## PeakNote Roadmap

**Project:** PeakNote – Automated Meeting Minutes for Microsoft Teams
**Course:** COMP8715 TechLauncher
**Team cadence:** One working day per week (**Tuesdays**)
**Goal:** Deliver a robust, user-friendly Teams integration that automatically produces clear, action-oriented meeting minutes.

------

## Current State Analysis (W1 - July 22, 2025)

**What's Built:**
- ✅ React frontend with UI components and glassmorphism design
- ✅ Meeting form with URL input and template selection
- ✅ Mock meeting minutes generation (hardcoded demo content)
- ✅ Share modal with PDF download and Outlook sharing
- ✅ Responsive Bootstrap design with particles.js background effects
- ✅ Spring Boot backend with comprehensive service architecture
- ✅ Microsoft Graph API integration for Teams data
- ✅ Spring AI with OpenAI integration for transcript processing
- ✅ RabbitMQ messaging and Redis caching infrastructure
- ✅ JPA entities for meeting data, transcripts, and user management
- ✅ Webhook handling for Graph API notifications
- ✅ Background schedulers for sync and subscription renewal

**Current Implementation Status:**
- 🔄 Backend services operational with Graph API integration
- 🔄 AI processing services configured but need frontend integration
- 🔄 Database entities and repositories complete
- 🔄 Message queue and caching infrastructure ready

**Remaining Gaps for W1:**
- ❌ Frontend-backend API integration (currently mock data)
- ❌ Microsoft Teams app manifest and registration
- ❌ Authentication flow between frontend and backend
- ❌ Production deployment configuration

------

## Final Semester Development Plan (9 Weeks)
*Working Tuesdays only, Week 1 (July 22) → Week 9 (September 16)*

### **Week 1 (July 22) - Integration & Teams Setup** ⚡ *CURRENT WEEK*
| Deliverable | Connect frontend to existing backend + Teams app registration |
|-------------|---------------------------------------------------------------|
| **Focus** | • Create REST API endpoints in existing Spring Boot backend<br/>• Replace frontend mock data with real backend calls<br/>• Set up Microsoft Teams app manifest and registration<br/>• Configure authentication flow between React and Spring Boot<br/>• Test end-to-end: meeting URL → Graph API → AI processing → frontend display |
| **Stakeholder Demo** | Real meeting processing through complete tech stack |
| **Your Input** | • Approve Azure app registration and permissions<br/>• Test integrated workflow |

### **Week 2 (July 29) - Teams SDK & Frontend Refinement**
| Deliverable | Teams SDK integration and UI refinement (fonts, layout, background) |
|-------------|------------------------------------------------|
| **Focus** | • Integrate Microsoft Teams SDK into the React frontend<br/>• Allow the app to run inside Microsoft Teams and access basic user context<br/>• Refine frontend design including typography, spacing, color scheme, and background effects<br/>• Align interface elements for consistent component spacing and modular hierarchy |
| **Stakeholder Demo** | App embedded inside Microsoft Teams with updated visual design and improved user guidance |
| **Your Input** | • Test Teams tab integration and context detection<br/>• Review updated fonts, layout, and feedback indicators |

### **Week 3 (August 5) - Data Deployment, Debugging & Toolbar Features**
| Deliverable |  Database deployment, bug testing, and toolbar feature implementation |
|-------------|----------------------------------------------|
| **Focus** | • Finalize and deploy database schema and confirm entity relationships<br/>• Prepare for backend deployment, including environment setup and service packaging<br/>• Conduct bug testing on AI-generated summaries and fix transcript processing issues<br/>• Begin implementation of the toolbar with UI interactions<br/>• Align frontend-backend data mappings for consistent content rendering|
| **Stakeholder Demo** | Working backend deployment, improved data stability, and functional toolbar preview |
| **Your Input** | • Provide test meeting data for debugging<br/>• Review toolbar features and suggest interaction priorities |

### **Week 4 (August 12) - AI Enhancement & Templates**
| Deliverable | Enhanced AI processing with template support |
|-------------|-----------------------------------------------|
| **Focus** | • Enhance existing OpenAI integration with better prompts<br/>• Implement template-based processing (Standard/Client/Scrum/Standup)<br/>• Improve action item extraction using current AI service<br/>• Add meeting summary quality scoring and validation |
| **Stakeholder Demo** | High-quality AI summaries with template-specific formatting |
| **Your Input** | • Approve AI model configuration and costs<br/>• Validate summary quality and templates |

### **Week 5 (August 19) - Enhanced AI Features**
| Deliverable | Production-quality AI processing |
|-------------|----------------------------------|
| **Focus** | • Improve summary accuracy and formatting<br/>• Add decision extraction and categorization<br/>• Implement follow-up action identification<br/>• Add speaker attribution and key quotes |
| **Stakeholder Demo** | High-quality minutes with decisions & actions |
| **Your Input** | • Provide feedback on AI output quality<br/>• Set acceptance criteria for accuracy |

### **Week 6 (August 26) - MVP Integration** 🎯
| Deliverable | **MVP ACCEPTANCE MILESTONE** |
|-------------|------------------------------|
| **Focus** | • Connect frontend to backend APIs<br/>• Replace mock data with real AI-generated content<br/>• Add error handling and loading states<br/>• Implement basic PDF export functionality |
| **Stakeholder Demo** | **Complete MVP workflow - MILESTONE ACCEPTANCE** |
| **Your Input** | • **MVP acceptance sign-off**<br/>• Set acceptance thresholds for production |

### **Week 7 (September 2) - Cloud Deployment**
| Deliverable | Production deployment |
|-------------|----------------------|
| **Focus** | • Deploy backend to Azure App Service<br/>• Configure Azure Static Web Apps for frontend<br/>• Set up CI/CD pipelines<br/>• Implement monitoring and logging |
| **Stakeholder Demo** | Live production system demonstration |
| **Your Input** | • Approve production deployment<br/>• Confirm monitoring requirements |

### **Week 8 (September 9) - Testing & Optimization**
| Deliverable | Alpha-ready system |
|-------------|-------------------|
| **Focus** | • Conduct thorough testing with real meetings<br/>• Optimize AI prompts and processing speed<br/>• Add analytics and usage tracking<br/>• Prepare alpha test user documentation |
| **Stakeholder Demo** | Performance metrics + alpha test preparation |
| **Your Input** | • Schedule/approve alpha test users<br/>• Review test documentation |

### **Week 9 (September 16) - Alpha Release** 🎯
| Deliverable | **Alpha test satisfaction ≥ 80% "useful/very useful"** |
|-------------|--------------------------------------------------------|
| **Focus** | • Deploy to select alpha users<br/>• Collect feedback and usage data<br/>• Implement feedback collection system<br/>• Create user satisfaction survey |
| **Stakeholder Demo** | **Alpha test results and satisfaction metrics** |
| **Your Input** | • Review alpha test results<br/>• Identify any blockers or change requests |

------

## Final Delivery Phase (Weeks 10-12)
*No coding - Focus on polish, documentation, and showcase preparation*

### **Week 10 (September 23) - Showcase Preparation**
| Focus | Final UI polish and demonstration preparation |
|-------|-----------------------------------------------|
| **Activities** | • Prepare live demonstration scripts<br/>• Create showcase materials and posters<br/>• Finalize documentation |

### **Week 11 (September 30) - Teams Store Submission**
| Focus | Microsoft Teams Store submission |
|-------|----------------------------------|
| **Activities** | • Prepare Teams Store submission package<br/>• Complete security and compliance documentation<br/>• Submit for Microsoft validation |

### **Week 12 (October 7) - Final Showcase**
| Focus | **Final exhibition & delivery** |
|-------|--------------------------------|
| **Activities** | • Final showcase presentation<br/>• Hand-over documentation<br/>• Post-launch maintenance planning |

------

## Technology Stack (Updated W1)

**Frontend:** React + Bootstrap + Teams SDK + Particles.js  
**Backend:** Spring Boot 3.4 + Java 17 + Spring AI  
**Database:** MySQL 8.0 + JPA/Hibernate  
**AI:** Spring AI with OpenAI GPT integration  
**Authentication:** Azure Identity + Microsoft Graph API  
**Infrastructure:** RabbitMQ + Redis + Redisson  
**Hosting:** Azure App Service + Azure Static Web Apps  
**CI/CD:** GitHub Actions

------

## Key Milestones & Success Metrics

| Date | Milestone | Success Criteria |
|------|-----------|------------------|
| **August 26, 2025** | MVP accepted (ready for internal use) | • End-to-end workflow functional<br/>• Real meeting data processing<br/>• Basic AI minute generation |
| **September 16, 2025** | Alpha test satisfaction ≥ 80% "useful/very useful" | • Processing time < 2 minutes per meeting<br/>• 95% uptime during alpha test<br/>• User satisfaction target met |
| **October 7, 2025** | Final exhibition & delivery | • Complete working product<br/>• Teams Store submission ready<br/>• Documentation complete |

------

## Risk Mitigation

| Risk | Mitigation Strategy | Timeline |
|------|-------------------|----------|
| Microsoft Graph API permissions | Start admin approval process Week 1 | Week 1-2 |
| AI processing costs | Implement usage limits and monitoring | Week 4-5 |
| Teams app store approval | Submit early for validation feedback | Week 8-9 |
| Real meeting access for testing | Prepare backup demo meetings | Week 6-7 |