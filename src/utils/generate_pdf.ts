import { jsPDF } from "jspdf";

interface DecryptedCVData {
  name: string;
  profile: string;
  contact: {
    telegram: string;
    website: string;
    phone: string;
    email: string;
    location: string;
  };
  expertise: string[];
  languages: string[];
  experience: {
    company: string;
    location: string;
    period: string;
    role: string;
    desc: string;
  }[];
  education: {
    school: string;
    major: string;
    period: string;
  }[];
  skills: {
    name: string;
    percentage: number;
  }[];
}

export function generateCV_PDF(data: DecryptedCVData): void {
  // Create PDF with standard A4 size (210 x 297 mm)
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = 210;
  const pageHeight = 297;

  // Define professional color palette
  const tealDark = "#0a4a54"; // Hex for section headers and shapes
  const tealLight = "#14b8a6"; // Bright teal accent
  const textDark = "#1e293b"; // Primary text
  const textMuted = "#64748b"; // Secondary text
  const borderLight = "#e2e8f0"; // Divider borders

  // --- 1. Draw Decorative Header Background Shapes ---
  doc.setFillColor(tealDark);
  // Top Left design curves (circles & shapes)
  doc.ellipse(-10, -10, 45, 45, "F");
  doc.ellipse(15, -15, 25, 25, "F");
  
  // Top Right design curves
  doc.ellipse(215, -5, 30, 30, "F");
  doc.ellipse(190, -15, 15, 15, "F");
  
  // Bottom Left decorative curves
  doc.ellipse(-15, 305, 40, 40, "F");
  doc.ellipse(15, 310, 20, 20, "F");

  // --- 2. Name & Title Section ---
  doc.setTextColor(tealDark);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.text(data.name, pageWidth / 2, 38, { align: "center" });

  // --- 3. Profile Section ---
  // Profile Bar Header
  doc.setFillColor(tealDark);
  doc.rect(47, 54, 116, 7, "F");
  doc.setTextColor("#ffffff");
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("PROFILE", pageWidth / 2, 59, { align: "center" });

  // Profile text
  doc.setTextColor(textDark);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const profileLines = doc.splitTextToSize(data.profile, 156);
  doc.text(profileLines, 27, 68, { align: "justify", maxWidth: 156 });

  // Set up Column coordinates (Left Column: 12-88 mm, Right Column: 96-198 mm)
  const leftColX = 12;
  const rightColX = 96;
  const colWidth = 76;
  const rightColWidth = 102;
  let leftY = 96;
  let rightY = 96;

  // --- 4. Left Column Headers and Blocks ---
  
  // Contact Box
  doc.setFillColor(tealDark);
  doc.rect(leftColX, leftY, colWidth, 7, "F");
  doc.setTextColor("#ffffff");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("CONTACT", leftColX + colWidth / 2, leftY + 5, { align: "center" });
  leftY += 12;

  // Contact items (with small shapes acting as icons)
  const contacts = [
    { label: "Telegram:", val: data.contact.telegram },
    { label: "Website:", val: data.contact.website },
    { label: "Phone:", val: data.contact.phone },
    { label: "Email:", val: data.contact.email },
    { label: "Location:", val: data.contact.location },
  ];

  contacts.forEach((c) => {
    // Draw small teal accent square for icon placeholder
    doc.setFillColor(tealLight);
    doc.rect(leftColX + 1, leftY - 2.2, 2.5, 2.5, "F");
    
    doc.setTextColor(tealDark);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(c.label, leftColX + 5, leftY);

    doc.setTextColor(textDark);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    const splitVal = doc.splitTextToSize(c.val, colWidth - 5);
    doc.text(splitVal, leftColX + 5, leftY + 3.2);
    leftY += 9;
  });

  leftY += 3;

  // Expertise Box
  doc.setFillColor(tealDark);
  doc.rect(leftColX, leftY, colWidth, 7, "F");
  doc.setTextColor("#ffffff");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("EXPERTISE", leftColX + colWidth / 2, leftY + 5, { align: "center" });
  leftY += 12;

  data.expertise.forEach((item) => {
    // Bullet point circle
    doc.setFillColor(tealLight);
    doc.circle(leftColX + 2, leftY - 1, 0.8, "F");

    doc.setTextColor(textDark);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(item, leftColX + 5, leftY);
    leftY += 5.5;
  });

  leftY += 4;

  // Language Box
  doc.setFillColor(tealDark);
  doc.rect(leftColX, leftY, colWidth, 7, "F");
  doc.setTextColor("#ffffff");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("LANGUAGE", leftColX + colWidth / 2, leftY + 5, { align: "center" });
  leftY += 12;

  data.languages.forEach((lang) => {
    // Bullet point circle
    doc.setFillColor(tealLight);
    doc.circle(leftColX + 2, leftY - 1, 0.8, "F");

    doc.setTextColor(textDark);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(lang, leftColX + 5, leftY);
    leftY += 5.5;
  });


  // --- 5. Right Column Headers and Blocks ---
  
  // Work Experience Box
  doc.setFillColor(tealDark);
  doc.rect(rightColX, rightY, rightColWidth, 7, "F");
  doc.setTextColor("#ffffff");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("WORK EXPERIENCE", rightColX + rightColWidth / 2, rightY + 5, { align: "center" });
  rightY += 12;

  data.experience.forEach((job) => {
    doc.setTextColor(tealDark);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text(job.company, rightColX, rightY);
    
    // Period and location on the right side
    doc.setTextColor(textMuted);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(`${job.location}  |  ${job.period}`, rightColX, rightY + 3.5);

    doc.setTextColor(textDark);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    const descLines = doc.splitTextToSize(job.desc, rightColWidth);
    doc.text(descLines, rightColX, rightY + 7);

    rightY += 15.5;
  });

  rightY += 2;

  // Education Box
  doc.setFillColor(tealDark);
  doc.rect(rightColX, rightY, rightColWidth, 7, "F");
  doc.setTextColor("#ffffff");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("EDUCATION", rightColX + rightColWidth / 2, rightY + 5, { align: "center" });
  rightY += 12;

  data.education.forEach((edu) => {
    doc.setTextColor(tealDark);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text(edu.school, rightColX, rightY);

    doc.setTextColor(textMuted);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(edu.period, rightColX, rightY + 3.5);

    doc.setTextColor(textDark);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(edu.major, rightColX, rightY + 7);

    rightY += 11.5;
  });

  rightY += 2;

  // Skills Summary Box (Circle Rings as requested/shown in the original PDF)
  doc.setFillColor(tealDark);
  doc.rect(rightColX, rightY, rightColWidth, 7, "F");
  doc.setTextColor("#ffffff");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("SKILLS SUMMARY", rightColX + rightColWidth / 2, rightY + 5, { align: "center" });
  rightY += 13;

  // Draw 3 interactive visual rings
  const ringSpacing = rightColWidth / 3;
  const startRingX = rightColX + ringSpacing / 2;

  data.skills.forEach((skill, idx) => {
    const ringX = startRingX + idx * ringSpacing;
    const ringY = rightY + 11;
    const radius = 9;

    // Draw background circle
    doc.setDrawColor("#e2e8f0");
    doc.setLineWidth(1.2);
    doc.circle(ringX, ringY, radius, "S");

    // Draw active indicator slice/circle in teal
    doc.setDrawColor(tealDark);
    doc.setLineWidth(1.6);
    doc.circle(ringX, ringY, radius, "S");

    // Inside Percentage Text
    doc.setTextColor(textDark);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(`${skill.percentage}%`, ringX, ringY + 1.2, { align: "center" });

    // Label under the circle
    doc.setTextColor(textDark);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    const labelLines = doc.splitTextToSize(skill.name, ringSpacing - 4);
    doc.text(labelLines, ringX, ringY + 13.5, { align: "center" });
  });

  // Save the generated document
  doc.save("Ahmad_Syafii_CV_Resume.pdf");
}
