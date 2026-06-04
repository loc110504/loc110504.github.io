---
layout: about
title: about
permalink: /

profile:
  align: right
  image: ava.png
  image_circular: false # keeps the image square

selected_papers: true # includes a list of papers marked as "selected={true}"

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

---

<style>
  .about-intro {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 1.5rem;
  }

  .about-intro-left {
    flex-direction: row-reverse;
  }

  .about-intro .post-header {
    margin-bottom: 0;
  }

  .about-title-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.35rem;
  }

  .about-title-row .post-title {
    margin-bottom: 0;
  }

  .about-last-name {
    color: var(--global-text-color-light);
    font-weight: 700;
  }

  .about-title-row #light-toggle {
    width: 2.25rem;
    height: 2.25rem;
    transform: none;
    border-radius: 999px;
    border: 1px solid var(--global-divider-color);
    background: var(--global-card-bg-color);
    flex: 0 0 auto;
  }

  .about-intro .about-main {
    flex: 1 1 0;
    min-width: 0;
  }

  .about-intro .post-header .desc {
    margin-bottom: 0.7rem;
  }

  .about-intro .about-profile {
    flex: 0 0 24%;
    width: 24%;
    max-width: 24%;
    margin: 0;
  }

  .about-intro .about-profile .more-info {
    text-align: right;
  }

  .about-social {
    text-align: left;
    margin-top: 0.8rem;
    margin-bottom: 1rem;
  }

  .about-social .contact-icons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.1rem;
    font-size: 1.8rem;
  }

  .about-social .contact-icons a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .about-social .contact-icons a i::before {
    transition: color 0.2s ease-in-out;
  }

  .about-social .contact-icons a:hover i::before {
    color: var(--global-theme-color) !important;
  }

  .about-social .contact-icons .fa-file-pdf::before {
    color: #d32f2f;
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
    .about-intro {
      display: block;
      margin-bottom: 1rem;
    }

    .about-intro .about-profile {
      width: 100%;
      max-width: 100%;
      margin-top: 1rem;
    }

    .about-intro .about-profile .more-info {
      text-align: left;
    }

    .about-title-row {
      align-items: flex-start;
      gap: 0.5rem;
    }

    .about-title-row .post-title {
      line-height: 1.15;
    }
  }
</style>

<p>
  🎓 I am currently a B.Sc. student in Data Science at
  <a href="https://en.hcmus.edu.vn/">VNUHCM - University of Science</a>, Vietnam, working with
  <a href="https://scholar.google.com.vn/citations?hl=en&user=UA_83MUAAAAJ&view_op=list_works&sortby=pubdate">Prof. Bac Le</a>. <br>
  🔍 My research focuses on Trustworthy AI, Computer Vision, Medical Image Analysis, and Agentic AI. <br>
  📧 Email: <strong>loc11052004@gmail.com</strong> or <strong>chloc22@clc.fitus.edu.vn</strong>
</p>
