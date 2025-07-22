## PeakNote Roadmap

**Project:** PeakNote – Automated Meeting Minutes for Microsoft Teams
**Course:** COMP8715 TechLauncher
**Team cadence:** One working day per week (**Tuesdays**)
**Goal:** Deliver a robust, user-friendly Teams integration that automatically produces clear, action-oriented meeting minutes.

------

## Current State Analysis (July 2025)

**What's Built (Demo/Mockup only):**
- ✅ React frontend with UI components and animations
- ✅ Meeting form with URL input and template selection
- ✅ Mock meeting minutes generation (hardcoded content)
- ✅ Share modal and success animations
- ✅ Responsive design with particles.js background

**Critical Gaps (Nothing Real):**
- ❌ No Microsoft Teams integration or SDK
- ❌ No manifest.json or Teams app registration
- ❌ No backend services or APIs
- ❌ No transcript retrieval from meetings
- ❌ No AI processing for generating actual minutes
- ❌ No real data storage or processing
- ❌ No authentication or security
- ❌ No deployment infrastructure

------

## Final Semester Development Plan (9 Weeks)
*Working Tuesdays only, Week 1 (July 22) → Week 9 (September 16)*

### **Week 1 (July 22) - Foundation Setup**
| Deliverable | Project foundation and Teams app registration |
|-------------|-----------------------------------------------|
| **Focus** | • Set up Microsoft Teams app manifest and registration<br/>• Create Azure app registration for authentication<br/>• Set up basic backend structure (Node.js/Express)<br/>• Configure development environment |
| **Stakeholder Demo** | Teams app sideloading + authentication flow |
| **Your Input** | • Approve Azure subscription and permissions<br/>• Confirm security and privacy requirements |

### **Week 2 (July 29) - Teams Integration**
| Deliverable | Working Teams tab integration |
|-------------|-------------------------------|
| **Focus** | • Implement Microsoft Teams SDK integration<br/>• Add Teams SSO authentication<br/>• Create Teams context detection<br/>• Test app loading within Teams |
| **Stakeholder Demo** | App running inside Teams with user authentication |
| **Your Input** | • Test Teams integration in your environment<br/>• Approve authentication flow |

### **Week 3 (August 5) - Meeting Data Access**
| Deliverable | Meeting transcript access |
|-------------|---------------------------|
| **Focus** | • Implement Microsoft Graph API integration<br/>• Build meeting transcript retrieval service<br/>• Add meeting metadata extraction (participants, date, etc.)<br/>• Create secure data storage (Azure Cosmos DB/SQL) |
| **Stakeholder Demo** | Real meeting data retrieval and storage |
| **Your Input** | • Confirm data retention policy<br/>• Approve Graph API permissions |

### **Week 4 (August 12) - AI Processing Core**
| Deliverable | First AI-generated summary |
|-------------|----------------------------|
| **Focus** | • Integrate Azure OpenAI or OpenAI API<br/>• Build meeting summary generation service<br/>• Implement template-based processing (Standard/Client/Scrum/Standup)<br/>• Create basic action item extraction |
| **Stakeholder Demo** | End-to-end: meeting → AI processing → basic minutes |
| **Your Input** | • Rank preferred AI model<br/>• Approve tone/style of generated minutes |

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

## Technology Stack

**Frontend:** React + TypeScript + Bootstrap + Teams SDK
**Backend:** Node.js + Express + TypeScript
**Database:** Azure Cosmos DB
**AI:** Azure OpenAI (GPT-4)
**Authentication:** Microsoft Identity Platform
**Hosting:** Azure Static Web Apps + Azure App Service
**CI/CD:** GitHub Actions + Azure DevOps

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