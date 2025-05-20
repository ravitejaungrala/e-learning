<script>
  document.getElementById('runCode').addEventListener('click', async () => {
    const language = document.getElementById('language').value;
    const code = document.getElementById('codeEditor').value;

    // Replace with your JDoodle credentials
    const clientId = "YOUR_CLIENT_ID";
    const clientSecret = "YOUR_CLIENT_SECRET";

    const response = await fetch("https://api.jdoodle.com/v1/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        script: code,
        language: language,
        versionIndex: "0",
        clientId: clientId,
        clientSecret: clientSecret,
      }),
    });

    const result = await response.json();
    document.getElementById('output').textContent = result.output || "Error executing code";
  });

  // Add navigation functionality
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
      });
      document.querySelector(event.target.getAttribute("href")).style.display = "block";
    });
  });
</script>

document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-image');
    heroImage.style.backgroundImage = "url(C:\Users\91798\Desktop\Edusage\E-Learning-570x255.jpg)";  // Replace with your image path
});




const courses = [
    { name: "Web Development", image: "web img.webp", className: "webdev-image" },
    { name: "Cybersecurity", image: "cyber.jpg" },
    { name: "Python Programming", image: "OIP.jpg" },
    { name: "Andriod Development", image: "android.jpg" },
    { name: "Statistics", image: "statistics.jpg" },
    { name: "SQL Database", image: "sql.jpg" },
];
