import React from "react";

const printResume = (selectedResume) => {
  if (!selectedResume) {
    alert("No resume data available to print.");
    return;
  }

  const printContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume - ${selectedResume.name}</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          html, body {
            width: 100%;
            height: 100%;
            margin: 0 !important;
            padding: 0 !important;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: none;
          }

          @page {
            size: A4;
            margin: 0;
          }

          .print-container {
            display: flex;
            width: 210mm;
            height: 297mm;
            margin: 0 auto;
          }

          .print-left {
            width: 34.2%;
            padding: 25px 20px;
            background-color: #248b6d !important;
            color: #fff;
          }

          .print-right {
            width: 65.8%;
            padding: 25px 30px;
            background-color: #f1d454 !important;
            color: #000;
          }

          .print-image-container {
            text-align: center;
            height: 150px;
            width: 150px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto 20px auto;
            box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
            background: #fff;
          }

          .print-image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
          }

          .print-section {
            background: rgba(255,255,255,0.1);
            padding: 15px;
            margin: 15px 0;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }

          .print-section h5, .print-section h6 {
            margin-bottom: 8px;
            text-transform: uppercase;
            border-bottom: 2px solid rgba(255,255,255,0.3);
            padding-bottom: 5px;
          }

          .print-right .print-section h5, .print-right .print-section h6 {
            border-bottom-color: rgba(0,0,0,0.2);
          }

          .print-name {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 8px;
            color: #2c3e50;
          }

          .print-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 25px;
            color: #34495e;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          li {
            margin-bottom: 8px;
            padding-left: 15px;
            position: relative;
          }

          li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #f1d454;
            font-weight: bold;
          }

          .print-right li:before {
            color: #248b6d;
          }

          p {
            margin: 8px 0;
            text-align: justify;
            line-height: 1.5;
          }

          a {
            color: #f1d454;
            text-decoration: none;
            display: block;
            margin: 3px 0;
          }

          .experience-item, .project-item {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(0,0,0,0.1);
          }

          .experience-item:last-child, .project-item:last-child {
            border-bottom: none;
          }

          .experience-item h6, .project-item h6 {
            margin-bottom: 5px;
            border: none;
            padding: 0;
          }

          .date-range {
            font-style: italic;
            color: #7f8c8d;
            font-size: 0.9em;
            margin-bottom: 8px;
          }

          @media print {
            body {
              width: 210mm;
              height: 297mm;
            }
            
            .print-container {
              box-shadow: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="print-container">
          <div class="print-left">
            <div class="print-image-container">
              <img src="${
                selectedResume.photo ||
                "https://www.freeiconspng.com/uploads/profile-icon-28.png"
              }" alt="${selectedResume.name}" />
            </div>
            
            <div class="print-section">
              <h6>Contact</h6>
              <p><strong>Email:</strong><br>${
                selectedResume.email || "Not provided"
              }</p>
              <p><strong>Phone:</strong><br>${
                selectedResume.phone || "Not provided"
              }</p>
            </div>
            
            <div class="print-section">
              <h6>Address</h6>
              <p>${
                selectedResume.location && selectedResume.location.city
                  ? `${selectedResume.location.city}, ${selectedResume.location.state}, ${selectedResume.location.country}`
                  : "Location not available"
              }</p>
            </div>
            
            <div class="print-section">
              <h6>Languages</h6>
              <ul>
                ${
                  (selectedResume.languages || [])
                    .map((lang) => `<li>${lang}</li>`)
                    .join("") || "<li>No languages listed</li>"
                }
              </ul>
            </div>
            
            <div class="print-section">
              <h6>Skills</h6>
              <ul>
                ${
                  (selectedResume.skills || [])
                    .map((skill) => `<li>${skill}</li>`)
                    .join("") || "<li>No skills listed</li>"
                }
              </ul>
            </div>
            
            <div class="print-section">
              <h6>Links</h6>
              ${
                selectedResume.linkedin
                  ? `<a href="${selectedResume.linkedin}">LinkedIn</a>`
                  : ""
              }
              ${
                selectedResume.github
                  ? `<a href="${selectedResume.github}">GitHub</a>`
                  : ""
              }
              ${
                selectedResume.website
                  ? `<a href="${selectedResume.website}">Website</a>`
                  : ""
              }
              ${
                !selectedResume.linkedin &&
                !selectedResume.github &&
                !selectedResume.website
                  ? "<p>No links provided</p>"
                  : ""
              }
            </div>
          </div>
          
          <div class="print-right">
            <h1 class="print-name">${selectedResume.name || "Not provided"}</h1>
            <h6 class="print-title">${
              selectedResume.title || "Not provided"
            }</h6>
            
            <div class="print-section">
              <h5>Summary</h5>
              <p>${selectedResume.summary || "No summary provided"}</p>
            </div>
            
            <div class="print-section">
              <h5>Experience</h5>
              ${
                (selectedResume.experience || [])
                  .map(
                    (exp) => `
                    <div class="experience-item">
                      <h6>${exp.job_title || "Not specified"} - ${
                      exp.company || "Not specified"
                    }</h6>
                      <p class="date-range">
                        ${exp.start_date || "Not specified"} to ${
                      exp.end_date || "Present"
                    }
                      </p>
                      <p>${exp.description || "No description provided"}</p>
                    </div>
                  `
                  )
                  .join("") || "<p>No experience listed</p>"
              }
            </div>
            
            <div class="print-section">
              <h5>Projects</h5>
              ${
                (selectedResume.projects || [])
                  .map(
                    (proj) => `
                    <div class="project-item">
                      <h6>${proj.name || "Unnamed Project"}</h6>
                      <p>${proj.description || "No description provided"}</p>
                    </div>
                  `
                  )
                  .join("") || "<p>No projects listed</p>"
              }
            </div>
          </div>
        </div>
        
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() {
              window.close();
            }, 1000);
          }
        </script>
      </body>
    </html>
  `;

  const newTab = window.open("", "_blank");
  if (newTab) {
    newTab.document.open();
    newTab.document.write(printContent);
    newTab.document.close();
  } else {
    alert("Popup blocked! Please allow popups for this website.");
  }
};

export default printResume;
