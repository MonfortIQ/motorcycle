import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = fs.readFileSync(path.join(root, 'service-custom-motorcycle-builds.html'), 'utf8');
const footer = fs.readFileSync(path.join(root, 'scripts', 'footer-template.html'), 'utf8').trim();
const headerStart = source.indexOf('<header class="site-header">');
const mainStart = source.indexOf('<main id="main-content">', headerStart);
const header = source.slice(headerStart, mainStart).replace(/<a class="nav-link active" href="services\.html" aria-current="page">Services<\/a>/g, '<a class="nav-link" href="services.html">Services</a>');

const pages = [
  {
    file: 'privacy-policy.html', title: 'Privacy Policy', summary: 'How Apex & Iron handles information submitted through the website.',
    sections: [
      ['Information you submit', 'When you use a contact or newsletter form, the information you enter is sent to Apex & Iron so the workshop can respond to your request or send the updates you asked to receive. Form submissions are processed through FormSubmit.'],
      ['Website preferences', 'The site saves your selected color theme and text direction in your browser so those display preferences can be remembered on later visits.'],
      ['Questions or requests', 'For questions about a form submission or workshop updates, email builds@apexandiron.com. Include the email address used in your submission so we can identify it.']
    ]
  },
  {
    file: 'terms.html', title: 'Terms', summary: 'Website information and project estimates for Apex & Iron workshop services.',
    sections: [
      ['Website information', 'This website describes workshop services, example projects and general capabilities. Availability, parts and workshop methods can vary by motorcycle and project.'],
      ['Project estimates', 'A website description or starting price is not a final project quote. Scope, timing and pricing are confirmed individually after the motorcycle and requested work have been reviewed.'],
      ['Questions', 'Contact the workshop before relying on website information for a specific build, restoration or repair. We will discuss your motorcycle and provide project details directly.']
    ]
  },
  {
    file: 'accessibility.html', title: 'Accessibility', summary: 'Need help using this site or accessing workshop information? Contact Apex & Iron.',
    sections: [
      ['Report an issue', 'If you have difficulty using a page, form or navigation control, email builds@apexandiron.com and tell us which page and device you were using. We will help you get the information you need.'],
      ['Contact the workshop', 'You can also call +1 (800) 555-APEX / 2739 or use the project enquiry form to reach the workshop.']
    ]
  }
];

for (const page of pages) {
  const description = page.summary.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
  const body = page.sections.map(([heading, text]) => `<section class="footer-info-section"><h2>${heading}</h2><p>${text}</p></section>`).join('\n');
  const html = `<!DOCTYPE html>\n<html lang="en" data-theme="dark" dir="ltr">\n<head>\n  <meta charset="UTF-8">\n  <script>(function(){try{var theme=localStorage.getItem('apex_theme');if(theme==='light'||theme==='dark')document.documentElement.setAttribute('data-theme',theme);var dir=localStorage.getItem('apex_rtl')||localStorage.getItem('direction');if(dir==='rtl'||dir==='ltr')document.documentElement.setAttribute('dir',dir)}catch(e){}})();</script>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>${page.title} | Apex &amp; Iron</title>\n  <meta name="description" content="${description}">\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">\n  <link rel="stylesheet" href="css/style.css">\n</head>\n<body>\n${header}\n<main id="main-content">\n  <section class="page-hero"><div class="container"><nav aria-label="Breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="index.html">Home</a></li><li class="breadcrumb-item active" aria-current="page">${page.title}</li></ol></nav><h1>${page.title}</h1><p class="lead text-muted max-w-700">${page.summary}</p></div></section>\n  <section class="section-padding"><div class="container footer-info-content">${body}<a class="btn-apex" href="contact.html#project-enquiry"><span>Contact the Workshop</span><i class="bi bi-arrow-right" aria-hidden="true"></i></a></div></section>\n</main>\n${footer}\n<button class="scroll-top-btn" type="button" aria-label="Scroll to top"><i class="bi bi-arrow-up"></i></button>\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>\n<script src="js/main.js"></script>\n</body>\n</html>\n`;
  fs.writeFileSync(path.join(root, page.file), html, 'utf8');
}

console.log(`Generated ${pages.length} footer information pages.`);
