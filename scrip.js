document.addEventListener("DOMContentLoaded", function() {
    const transparentButtons = document.querySelectorAll(".transparent-button");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-button");
  
    transparentButtons.forEach(function(button, index) {
      button.addEventListener("click", function() {
        modals[index].style.display = "block";
      });
    });
  
    closeButtons.forEach(function(button, index) {
      button.addEventListener("click", function() {
        modals[index].style.display = "none";
      });
    });
  });

document.addEventListener("DOMContentLoaded", function() {
  var animatedImage = document.querySelector(".animated-image");
  if (animatedImage) {
    var observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0 // Ubah nilai threshold sesuai kebutuhan
    };

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animatedImage.classList.add("hide-gif");
        }
      });
    }, observerOptions);

    var books = document.querySelectorAll(".book");
    books.forEach(function(book) {
      observer.observe(book);
    });

    var sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
      observer.observe(section);
    });

    var gallerys = document.querySelectorAll(".gallery");
    gallerys.forEach(function(gallery) {
      observer.observe(gallery);
    });
  }
});

//scrip text
window.onload = function() {
    const text = document.querySelector('.typing-text');
    const message = 'Gallery History';

    function typeAndDelete() {
      text.textContent = ''; // Menghapus teks yang ada
      let index = 0;

      function type() {
        if (index < message.length) {
          text.textContent += message.charAt(index);
          index++;
          setTimeout(type, 150);
        } else {
          setTimeout(deleteText, 1000); // Setelah mengetik selesai, tunggu 1 detik sebelum menghapus teks
        }
      }

      function deleteText() {
        if (index >= 0) {
          text.textContent = message.substring(0, index);
          index--;
          setTimeout(deleteText, 75);
        } else {
          setTimeout(type, 1000); // Setelah menghapus teks selesai, tunggu 1 detik sebelum mulai mengetik lagi
        }
      }

      type(); // Mulai proses pengetikan
    }

    typeAndDelete(); // Memanggil fungsi untuk pertama kali
  };