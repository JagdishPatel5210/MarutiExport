
const sections = ['home', 'about','Shapes','Quality', 'Process','Contect'];
// alert("ok")
document.querySelectorAll('section').forEach((section, i) => {
  section.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY > 0 && i < sections.length - 1) {
      document.getElementById(sections[i + 1]).scrollIntoView({ behavior: 'smooth' });
    } else if (e.deltaY < 0 && i > 0) {
      document.getElementById(sections[i - 1]).scrollIntoView({ behavior: 'smooth' });
    }
  });
});