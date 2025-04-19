import React from "react";
import Timeline from "../ui/timeline";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experienceItems = [
    {
      title: "Software Engineer",
      subtitle: "IntelliCredence Pvt Ltd",
      date: "July 2024 - Present",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">HRMS Platform Development</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Engineered a comprehensive HRMS CRM platform, streamlining recruitment workflows, candidate tracking, and internal messaging across all branches enhancing operational efficiency by 60%.</li>
              <li>Developed a scalable and interactive interface by integrating Graph QL APIs with React.js, ensuring seamless data flow and responsiveness.</li>
              <li>Optimized backend performance by 40% through the development of high-efficiency services using Node.js, significantly improving API response times.</li>
              <li>Designed CI/CD pipelines, reducing build and deployment time by 50%.</li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">Tech Stack: React.js, Node.js, MongoDB, Azure.</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Offer Letter Automation Module</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Automated payroll processing and offer letter generation in the HRMS module, reducing manual effort by 60%.</li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">Tech Stack: React.js.</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Event Management & Conference Platform</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Designed and developed a comprehensive event management platform, integrating sponsor, venue, speaker, and attendee management enhancing event coordination and efficiency by 35%.</li>
              <li>Implemented a super-admin role for centralized control over multiple admins and introduced a community module to foster user interactions and engagement.</li>
              <li>Introduced a conference entity, enabling seamless organization, management, and collaboration with sponsors while ensuring secure data storage and compliance adherence.</li>
              <li>Established a CI/CD pipeline with Azure App Service, implementing version control and automating deployments to enhance system stability and scalability.</li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">Tech Stack: Next.js, TypeScript, CosmosDB, Azure.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Software Engineer Intern",
      subtitle: "Hero MotoCorp",
      date: "June 2022 - August 2022",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Developed a Web Scraping Application</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Designed and implemented a high-performance web scraping application using Python, leveraging Beautiful Soup, Selenium, and Pandas to automate data extraction and management—streamlining vendor, inventory, and product data processing in Google Sheets by 80%.</li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">Tech Stack: Python (BeautifulSoup, Selenium, Pandas).</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Document Automation System</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Developed a Python-based document automation system, optimizing document handling and reducing manual intervention by 70%, leading to improved efficiency and accuracy.</li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">Tech Stack: Python.</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Research & Implementation of Automation Tools</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Conducted comprehensive research and testing of RPA tools, including UI Path and Automation Anywhere delivering detailed reports and presentations on automation strategies and feasibility – driving data-backend decisions making for implementation.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background/0 pointer-events-none" aria-hidden="true"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary px-3 py-1 glass-card inline-block rounded-full mb-4 flex items-center justify-center gap-2 mx-auto w-fit">
            <Briefcase className="h-4 w-4" />
            Work Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            My Professional Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of applying AI and software development expertise to solve real-world problems.
          </p>
        </div>

        <Timeline items={experienceItems} />
      </div>
    </section>
  );
};

export default Experience;
