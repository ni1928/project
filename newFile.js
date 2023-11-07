/* <script>
  const imageIcons = document.querySelectorAll('.arrow');
  const cardContainers = document.querySelectorAll('.card-container');

        imageIcons.forEach((icon, index) => {icon.addEventListener('click', () => {
    // Hide all card containers
    cardContainers.forEach(container => {
      container.style.transform = 'translateX(100%)'; // Slide them out to the right
    });

    // Show the clicked card container
    cardContainers[index].style.transform = 'translateX(0)'; // Slide in the selected card container
  })};
        });
</script>; */
