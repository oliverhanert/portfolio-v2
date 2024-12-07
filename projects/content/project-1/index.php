<?php
// Get the project data from JSON file
$jsonData = file_get_contents('../../../projects/data/projects.json');
$projects = json_decode($jsonData, true)['projects'];

// Get project ID from URL or folder name
$currentPath = dirname($_SERVER['PHP_SELF']);
$projectId = basename($currentPath);

// Find the current project
$currentProject = null;
foreach ($projects as $project) {
    if ($project['id'] === $projectId) {
        $currentProject = $project;
        break;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/images/od-studios-logo.png" type="image/png">
    <title><?php echo $currentProject ? $currentProject['title'] : 'Project'; ?> - Portfolio</title>
    <link href="../../../css/style.css" rel="stylesheet">
    <link href="../../../css/menu.css" rel="stylesheet">
    <link href="../../../css/project-detail.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.css" rel="stylesheet">
</head>
<body class="project-detail">
    <div id="header"></div>

    <!-- Project Hero -->
    <section class="project-hero">
        <div class="hero-background">
            <img src="images/hero.jpg" alt="Project Title">
        </div>
        <div class="hero-content">
            <div class="hero-header">
                <h1 class="project-title"><?php echo $currentProject['title']; ?></h1>
                <a class="project-external-link" href="https://dtusciencepark.dk/" target="_blank">
                    Se løsning
                    <svg class="link-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
            <div class="hero-footer">
                <div class="project-brief">
                    <p>Sitet er bygget i WordPress og Elementor.</p>
                </div>
                <div class="project-meta">
                    <div class="meta-item">
                        <span class="value">Hjemmeside</span>
                    </div>
                    <div class="meta-item">
                        <span class="value">2023</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Project Content -->
    <main class="project-content">
        <!-- Introduction Section -->
        <section class="content-section text-section" data-aos="fade-up">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <h2>Projektindblik</h2>
                        <p class="manchet">
                            Dette er klart et af de projekter, som jeg er mest stolt af at have lavet. Projektet blev lavet i samarbejde med både interne og eksterne designere og projektledere, og er udarbejdet imens jeg var ansat som webudvikler i KathArt Interactive. Løsningen er lavet i WordPress og Elementor.
                        </p>
                        <p>Med det nye website har DTU Science Park fået et site som er en perfekt balance mellem branding og salg. Æstetikken bringer DTU Science Parks DNA helt ud til brugerne, mens velstrukturerede landingpages genererer leads til både udlejning, vækstprogrammer og events. Sitet er bygget i WordPress og Elementor, mens leadopsamling og automation håndteres af HubSpot.</p>
                        <h3>Om virksomheden</h3>
                        <p>DTU Science Park er Danmarks førende miljø for forskningsbaserede virksomheder, der arbejder med innovation og teknologiudvikling. DTU Science Park tilbyder faciliteter, netværk og rådgivning til mere end 300 virksomheder, der har adgang til DTU’s forsknings- og uddannelsesressourcer. DTU Science Park har to campusser i Hørsholm og Lyngby, samt en række satellitlokationer i hele landet. DTU Science Park har til formål at skabe vækst og værdi for virksomhederne og samfundet gennem samarbejde, videndeling og innovation.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Full Width Image -->
        <section class="content-section image-section full-width" data-aos="fade-up">
            <img src="images/dtu-mockup-1.webp" alt="Project Image">
        </section>

        <!-- Features List -->
        <section class="content-section list-section" data-aos="fade-up">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <h2>Key Features</h2>
                        <ul class="feature-list">
                            <li data-aos="fade-up" data-aos-delay="100">Feature one with detailed explanation</li>
                            <li data-aos="fade-up" data-aos-delay="200">Feature two with detailed explanation</li>
                            <li data-aos="fade-up" data-aos-delay="300">Feature three with detailed explanation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Image Gallery -->
        <section class="content-section image-grid-section" data-aos="fade-up">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="image-grid">
                            <div class="grid-item" data-aos="fade-up">
                                <img src="images/hero.jpg" alt="Project Detail">
                            </div>
                            <div class="grid-item" data-aos="fade-up" data-aos-delay="100">
                                <img src="images/hero.jpg" alt="Project Detail">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <div id="footer"></div>

<!-- These should be in this exact order -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js"></script>
<script type="module" src="../../../js/main.js"></script>
    
</body>
</html>