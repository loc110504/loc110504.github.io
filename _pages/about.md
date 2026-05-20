---
layout: about
title: about
permalink: /
subtitle: B.Sc Student at <a href=https://en.hcmus.edu.vn/>VNUHCM - University of Science</a>

profile:
  align: right
  image: ava.png
  image_circular: false # keeps the image square
  more_info: >
    <p>loc11052004@gmail.com</p>
    <p>Ho Chi Minh, Vietnam</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

---

<style>
  .about-quick-links {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.6rem;
    margin: 0.6rem 0 1rem;
  }

  .about-quick-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    padding: 0.4rem 0.55rem;
    border: 1px solid #d0d7de;
    border-radius: 0;
    font-size: 0.82rem;
    font-weight: 600;
    color: inherit;
    text-decoration: none;
    background: #f6f8fa;
    transition: all 0.2s ease;
  }

  .about-quick-link i {
    font-size: 0.95rem;
  }

  .about-quick-link.resume-link i {
    color: #d32f2f;
  }

  .about-quick-link.scholar-link i {
    color: #4285f4;
  }

  .about-quick-link.github-link i {
    color: #181717;
  }

  .about-quick-link:hover {
    text-decoration: none;
    border-color: #8b949e;
    background: #eef2f7;
  }

  @media (min-width: 576px) {
    .post .profile {
      width: 24%;
    }
  }

  .post .profile img {
    border-radius: 0 !important;
  }

  @media (max-width: 575px) {
    .about-quick-links {
      grid-template-columns: 1fr;
    }
  }
</style>


<div class="about-quick-links">
  <a class="about-quick-link resume-link" href="/drive/resume.pdf" target="_blank" rel="noopener noreferrer">
    <i class="fa-solid fa-file-arrow-down"></i>
    <span>Download Resume</span>
  </a>
  <a class="about-quick-link scholar-link" href="https://scholar.google.com/citations?user=szHDzgkAAAAJ" target="_blank" rel="noopener noreferrer">
    <i class="ai ai-google-scholar"></i>
    <span>Google Scholar</span>
  </a>
  <a class="about-quick-link github-link" href="https://github.com/loc110504" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-github"></i>
    <span>Github &amp; Code</span>
  </a>
</div>

<p>
  I am currently a <strong>B.Sc. student</strong> in Data Science at
  <strong>VNUHCM - University of Science</strong>, Vietnam, working with
  <strong>Prof. Bac Le</strong>.
</p>

<p>
  My research interests lie in developing <strong>trustworthy AI-powered medical solutions</strong>, with a focus on <strong>data-efficient medical image analysis</strong> and <strong>explainable multi-agent reasoning</strong>. I have experience in <strong>weakly/semi-supervised medical image segmentation</strong>, <strong>robust classification under domain shift and class imbalance</strong>, and <strong>LLM-based clinical reasoning</strong>. Moving forward, I aim to explore <strong>foundation models</strong> and <strong>human-in-the-loop AI systems</strong> to better support clinicians in real-world diagnosis, interpretation, and decision-making.
</p>