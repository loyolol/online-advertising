document.addEventListener('DOMContentLoaded', function() {
  const imageUrl1Path = 'photo/blue_phone.svg'; // Путь к первому изображению для top-bar
  const imageUrl2Path = 'photo/blue_Email.svg'; // Путь ко второму изображению для top-bar
  const searchIconPath = 'photo/menu_white.svg'; // Путь к изображению иконки поиска

  let originalContactInfoHTML = '';
  let originalMainHeaderRightHTML = '';

  function adjustImages() {
    if (window.innerWidth <= 900) {
        // Top Bar
        const contactInfo = document.querySelector('.top-bar .contact-info');
        if (contactInfo && !contactInfo.hasAttribute('data-adjusted')) {
            // Save the original HTML, if it hasn't been saved yet
            if (originalContactInfoHTML === '') {
                originalContactInfoHTML = contactInfo.innerHTML;
            }

            contactInfo.innerHTML = ''; // Clear existing content

            if (imageUrl1Path !== 'none' && imageUrl1Path !== '') {
                const img1 = document.createElement('img');
                img1.src = imageUrl1Path;
                img1.width = 30; 
                img1.height = 30;
                img1.style.marginBottom = '5px';
                contactInfo.appendChild(img1);
            }

            if (imageUrl2Path !== 'none' && imageUrl2Path !== '') {
                const img2 = document.createElement('img');
                img2.src = imageUrl2Path;
                img2.width = 30; 
                img2.height = 30; 
                contactInfo.appendChild(img2);
            }

            contactInfo.setAttribute('data-adjusted', 'true'); // Prevent re-adjustment
        }

        // Main Header
        const mainHeaderRight = document.querySelector('.main-header-right');
        if (mainHeaderRight && !mainHeaderRight.hasAttribute('data-adjusted')) {
            // Save the original HTML, if it hasn't been saved yet
            if (originalMainHeaderRightHTML === '') {
                originalMainHeaderRightHTML = mainHeaderRight.innerHTML;
            }

            mainHeaderRight.innerHTML = ''; // Clear existing content

            if (searchIconPath !== 'none' && searchIconPath !== '') {
                const imgSearch = document.createElement('img');
                imgSearch.src = searchIconPath;
                imgSearch.width = 30; 
                imgSearch.height = 30; 
                mainHeaderRight.appendChild(imgSearch);
            }

             mainHeaderRight.setAttribute('data-adjusted', 'true'); // Prevent re-adjustment
        }
    } else {
        // Reset to original state if screen width is greater than 900px
        const contactInfo = document.querySelector('.top-bar .contact-info');
        if (contactInfo && contactInfo.hasAttribute('data-adjusted')) {
            contactInfo.innerHTML = originalContactInfoHTML; // Revert to original HTML
            contactInfo.removeAttribute('data-adjusted');
        }

        const mainHeaderRight = document.querySelector('.main-header-right');
        if (mainHeaderRight && mainHeaderRight.hasAttribute('data-adjusted')) {
            mainHeaderRight.innerHTML = originalMainHeaderRightHTML; // Revert to original HTML
            mainHeaderRight.removeAttribute('data-adjusted');
        }
    }
  }

  // Call the function on load and resize
  window.addEventListener('load', adjustImages);
  window.addEventListener('resize', adjustImages);
});