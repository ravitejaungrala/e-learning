<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LearnHub - Online Learning Platform</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

      

        /* Hero Section */
        .hero {
            background: #2C7D89;
            color: white;
            padding: 4rem 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .hero-content {
            max-width: 500px;
        }
        .hero-content h1, .hero-content h2 {
            position: relative;
            opacity: 0;
            transform: scale(0.8) translateY(100px);
            animation: textAnimation 6s infinite;
        }

        .hero-content h1 {
            animation-delay: 0s;
        }

        .hero-content h2 {
            animation-delay: 3s;
        }
        .hero-image {
            width: 40%;
            height: 300px;
            background: #fff;
            border-radius: 10px;
        }
        .hero-image img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }

        /* Course Categories */
        .categories {
            padding: 2rem 5%;
        }

        .category-tabs {
            display: flex;
            gap: 1rem;
            margin: 1rem 0;
            overflow-x: auto;
        }

        .category-tab {
    padding: 0.5rem 1rem;
    background: #f0f0f0;
    border-radius: 20px;
    cursor: pointer;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.category-tab:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
}
.category .content::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #2C7D89, #b0b9ba, #91aeb2 , #74acb4 , #c2e9fb); /* Gradient for lighting */
    z-index: -1; /* Behind the content */
    opacity: 0; /* Initially hidden */
    transition: opacity 0.3s ease-in-out; /* Smooth appearance */
    animation: lighting-effect 1.5s infinite alternate; /* Add lighting animation */
    border-radius: 10px;
}
.category .content:hover::after {
    opacity: 1; /* Show lighting effect on hover */
}

@keyframes lighting-effect {
    0% {
        filter: brightness(1);
        box-shadow: 0 0 10px whitesmoke;
    }
    50% {
        filter: brightness(1.2);
        box-shadow: 0 0 20px white, 0 0 30px #699da5, 0 0 40px #baf0f0;
    }
    100% {
        filter: brightness(1.4);
        box-shadow: 0 0 30px whitesmoke;
    }
}



        /* Course Grid */
        .course-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 2rem;
            padding: 2rem 0;
        }

        .course-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            
        }

        .course-image {
            width: 100%;
            height: 150px;
            background: #f0f0f0;
        }

        .course-info {
            padding: 1rem;
        }

        .course-rating {
            color: #f4c150;
        }

        .course-price {
            font-weight: bold;
            color: #333;
        }

        .premium-badge {
            background: #5624d0;
            color: white;
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-size: 0.8rem;
        }

        /* General Styles */
        .container-xxl {
            display: flex;
            flex-direction: column;
            justify-content: center; /* Center vertically */
            align-items: center; /* Center horizontally */
            text-align: center;
            height: 70vh; /* Full viewport height */
            background-color: #fff;
            padding: 0;
            margin: 0;

        }


.section-title {
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    color: #2C7D89;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
}


h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: black;
    margin-bottom: 2rem;
}

/* Grid System */
.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
}

/* Category Card */
.content {
    background: #fff;
    border-radius: 10px;
    text-align: center;
    padding: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    border: 1px solid #f0f0f0;
}

.content:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Highlight AWS on Hover */
.content:hover:nth-child(2) {
    background: #fb873f;
    color: white;
}

.content img {
    width: 90px;
    height: 80px;
    margin-bottom: 2rem;
}

.content h5 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 0;
}

.content a {
    text-decoration: none;
    color: #333;
}

.content:hover a {
    color: white;
}


/* Footer General Styles */
.footer {
    background-color:#2C7D89; /* Deep dark blue */
    color: #ffffff; /* White text */
    padding: 50px 0;
    font-size: 14px;
}

/* Quick Links Section */
.footer h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
}

.footer a.text-light {
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer a.text-light:hover {
    color: #fb873f; /* Orange highlight */
}

/* Contact Section */
.footer .fa {
    color: #fb873f; /* Orange icons */
    margin-right: 10px;
}

.footer p {
    margin-bottom: 10px;
}

/* Social Media Icons */
.footer .btn-social {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    transition: all 0.3s ease;
}

.footer .btn-social i {
    font-size: 18px;
}

.footer .btn-social:hover {
    background-color: #fb873f; /* Orange hover background */
    color: #ffffff;
    border-color: #fb873f;
}

/* Newsletter Section */
.footer .form-control {
    border-radius: 30px;
    padding-left: 15px;
}

.footer .btn-primary {
    background-color: #fb873f;
    border: none;
    border-radius: 30px;
    transition: background-color 0.3s ease;
}

.footer .btn-primary:hover {
    background-color: #e76a2c; /* Slightly darker orange */
}

.footer .btn-primary a {
    color: #fff;
    text-decoration: none;
}

/* Copyright Section */
.footer .copyright {
    margin-top: 30px;
    border-top: 1px solid #444;
    padding-top: 20px;
    text-align: center;
    font-size: 12px;
}

.footer .copyright a {
    color: #fb873f;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer .copyright a:hover {
    color: #e76a2c;
}


/* Desktop View */
@media (min-width: 992px) {
    .category h1.section-title {
        font-size: 2rem;
    }

    .category h1.mb-5 {
        font-size: 2.5rem;
    }

    .category .row {
        display: flex;
        justify-content: center;
        gap: 2rem;
    }

    .category .content {
        width: 180px;
    }
}

/* Mobile View */
@media (max-width: 991px) {
    .category h1.section-title {
        font-size: 1.5rem;
    }

    .category h1.mb-5 {
        font-size: 2rem;
    }

    .category .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }

    .category .content {
        width: 150px;
        padding: 0.8rem;
    }

    .category img {
        width: 60px;
        height: 60px;
    }

    .category h5 a {
        font-size: 0.9rem;
    }
}

/* Extra Small Screens */
@media (max-width: 576px) {
    .category h1.section-title {
        font-size: 1.2rem;
    }

    .category h1.mb-5 {
        font-size: 1.5rem;
    }

    .category .row {
        gap: 0.8rem;
    }

    .category .content {
        width: 140px;
    }

    .category img {
        width: 50px;
        height: 50px;
    }

    .category h5 a {
        font-size: 0.8rem;
    }
}


        /* Footer */
        .footer {
            background-color: #0b0e2e;
            color: #ffffff;
            padding: 20px;
            font-size: 14px;
            text-align: center;
        }

        .footer a.text-light {
            text-decoration: none;
            color: #fb873f;
        }

        .footer a.text-light:hover {
            color: #e76a2c;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
            .hero {
                flex-direction: column;
                text-align: center;
            }

            .hero-content {
                max-width: 100%;
            }

            .row .content {
                flex: 1 1 calc(100% - 1rem);
                max-width: calc(100% - 1rem);
            }

           
            .hero-image{
                width: 100%;
                height: 100%;
            }
        }

        @media (max-width: 576px) {
            .hero-content h1 {
                font-size: 1.8rem;
            }

            .hero-content h2 {
                font-size: 1.2rem;
            }

            .nav-links a {
                font-size: 0.9rem;
            }

            .content img {
                width: 70px;
                height: 60px;
            }
        }

        @keyframes textAnimation {
            0% {
                opacity: 0;
                transform: scale(0.8) translateY(100px);
            }
            20% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
            50% {
                opacity: 1;
                transform: scale(1.2) translateY(-10px);
            }
            70% {
                opacity: 0;
                transform: scale(1) translateY(-50px);
            }
            100% {
                opacity: 0;
                transform: scale(0.8) translateY(-100px);
            }
        }
.move-up {
            opacity: 0;
            transform: translateY(50px); /* Start from below */
            animation: moveUp 1s forwards ease-in-out;
        }

        .move-up-delay {
            animation-delay: 0.7s;
        }
        @keyframes moveUp {
            0% {
                opacity: 0;
                transform: translateY(50px); /* Start from below */
            }
            100% {
                opacity: 1;
                transform: translateY(0); /* End at normal position */
            }
        }

       @keyframes textAnimation {
            0% {
                opacity: 0;
                transform: scale(0.8) translateY(100px);
            }
            20% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
            50% {
                opacity: 1;
                transform: scale(1.2) translateY(-10px); /* Small overshoot */
            }
            70% {
                opacity: 0;
                transform: scale(1) translateY(-50px);
            }
            100% {
                opacity: 0;
                transform: scale(0.8) translateY(-100px);
            }
        }

        header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(94, 200, 235);
      color: #fff;
      padding: 10px 20px;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .header-left img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .logo {
      font-size: 1.5rem;
    }

    .menu-icon {
      font-size: 1.8rem;
      cursor: pointer;
      display: block;
    }

    .mobile-nav {
      display: none;
      flex-direction: column;
      background-color: blue;
      position: absolute;
      top: 50px;
      right: 20px;
      width: auto;
      z-index: 10;
      padding: 5px 0;
      border-radius: 10px;
      box-shadow: 0 4px 6px orange(0, 0, 0, 0.2);
    }

    .mobile-nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    .mobile-nav ul li {
      margin: 0;
    }

    .mobile-nav ul li a {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      font-size: 1rem;
      color: #fff;
      text-decoration: none;
      background-color: rgb(166, 166, 222);
      border-radius: 5px;
      text-align: left;
      transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .mobile-nav ul li a:hover {
      background-color: #f39c12;
      transform: translateY(-2px);
    }

    .mobile-nav ul li a svg {
      margin-right: 10px;
      width: 20px;
      height: 20px;
      fill: #fff;
    }

    .desktop-nav {
      display: none;
    }

    @media (min-width: 768px) {
      .menu-icon, .mobile-nav {
        display: none;
      }

      .desktop-nav {
        display: flex;
        gap: 20px;
      }

      .desktop-nav a {
        display: flex;
        align-items: center;
        color: #fff;
        text-decoration: none;
        font-size: 1rem;
        padding: 10px 15px;
        transition: background-color 0.3s ease, color 0.3s ease;
      }

      .desktop-nav a:hover {
        background-color: rgb(172, 172, 227);
        color: blue;
        border-radius: 5px;
      }

      .desktop-nav a svg {
        margin-right: 8px;
        width: 20px;
        height: 20px;
        fill: #fff;
      }
    }

    </style>
</head>
<body>
    <header>
        <div class="header-left">
          <!-- <img src="https://via.placeholder.com/40" alt="Header Icon" /> -->
          <div class="logo">Learn Hub</div>
        </div>
        <div class="menu-icon" onclick="toggleMobileMenu()">☰</div>
        <nav class="mobile-nav">
          <ul>
            <li><a href="#home"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>Home</a></li>
            <li><a href="Explore.html"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 17.93V13h4.64A8 8 0 0113 19.93zM11 19.93A8 8 0 016.36 13H11zm6.64-11H13V4.07A8 8 0 0117.64 8.93zM11 4.07V9H6.36A8 8 0 0111 4.07z"/></svg>Explore</a></li>
            <li><a href="learning.html"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 2H2v2h20zm0 4H2v2h20zm0 4H2v8h6v2h8v-2h6zM9 18v-4h6v4z"/></svg>Courses</a></li>
            <li><a href="#profile"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12a5 5 0 10-5-5 5 5 0 005 5zm0 2c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z"/></svg>Profile</a></li>
          </ul>
        </nav>
        <nav class="desktop-nav">
          <a href="#home"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>Home</a>
          <a href="Explore.html"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 17.93V13h4.64A8 8 0 0113 19.93zM11 19.93A8 8 0 016.36 13H11zm6.64-11H13V4.07A8 8 0 0117.64 8.93zM11 4.07V9H6.36A8 8 0 0111 4.07z"/></svg>Explore</a>
          <a href="learning.html"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 2H2v2h20zm0 4H2v2h20zm0 4H2v8h6v2h8v-2h6zM9 18v-4h6v4z"/></svg>Courses</a>
          <a href="#profile"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12a5 5 0 10-5-5 5 5 0 005 5zm0 2c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z"/></svg>Profile</a>
        </nav>
      </header>
    
    <section class="hero">
        <div class="hero-content">
            <h1>Learn the skills you need for your future</h1>
            <h2>Unlock a world of knowledge with expert-led courses</h2>
        </div>
        <div class="hero-image">
            <img src="E-Learning-570x255.jpg" alt="E-Learning" style="width: 100%; height: 100%; border-radius: 10px;">
        </div>
    </section>
    
        
    <!-- Categories Start -->
<div class="container-xxl py-4 category">
    <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.3s">
            <h1 class="section-title bg-white text-center px-1 move-up">Categories</h1>
                <h1 class="mb-5 move-up move-up-delay" style="color: #2C7D89;">Popular Courses to Explore</h1>
        </div>
        <div class="row g-2 m-2">
        
            <div class="col-lg-3 col-md-6 text-center">
                <div class="content shadow p-3 mb-2 wow fadeInUp" data-wow-delay="0.3s">
                    <img src="img/cat17.jpg" class="img-fluid" alt="categories">
                    <h5 class="my-2">
                        <a href="Courses/Data-Science.html" style="text-decoration: none; color: inherit;">Data Science</a>
                    </h5>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
                <div class="content shadow p-3 mb-2 wow fadeInUp" data-wow-delay="0.3s">
                    <img src="img/cat16.jpg" class="img-fluid" alt="categories">
                    <h5 class="my-2">
                        <a href="Courses/Artificial-Intelligence.html" style="text-decoration: none; color: inherit;">Artificial Intelligence</a>
                    </h5>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
                <div class="content shadow p-3 mb-2 wow fadeInUp" data-wow-delay="0.3s">
                    <img src="img/cat19.jpg" class="img-fluid" alt="categories">
                    <h5 class="my-2">
                        <a href="Courses/Machine-Learning.html" style="text-decoration: none; color: inherit;">Machine Learning</a>
                    </h5>
                </div>
            </div>
          
         
            <div class="col-lg-3 col-md-6 text-center">
                <div class="content shadow p-3 mb-2 wow fadeInUp" data-wow-delay="0.3s">
                    <img src="img/cat13.jpg" class="img-fluid" alt="categories">
                    <h5 class="my-2">
                        <a href="Courses/Cybersecurity.html" style="text-decoration: none; color: inherit;">Cyber security</a>
                    </h5>
                </div>

        </div>
    </div>
</div>
<!-- Categories End -->

<div class="container">
        <div class="copyright">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    
                </div>
            </div>
        </div>
    </div>
</div>

    <!-- Footer -->
    <div class="footer">
        <p style="text-align: center; color: white; ">&copy; 2025 <a href="index.html" class="text-light">LearnHub</a>. All rights reserved.</p>
    </div>

    <script>  
     function toggleMobileMenu() {
      const mobileNav = document.querySelector('.mobile-nav');
      mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
    }

    // Close mobile menu when switching to desktop mode
    window.addEventListener('resize', () => {
      const mobileNav = document.querySelector('.mobile-nav');
      if (window.innerWidth >= 768) {
        mobileNav.style.display = 'none';
      }
    }); 
    
<!-- Footer End -->

    </script>
</body>
</html>

