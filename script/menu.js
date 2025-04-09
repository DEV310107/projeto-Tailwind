const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');

menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full');
});

sidebar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      sidebar.classList.add('-translate-x-full');
    }
  });
});
