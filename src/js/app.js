const SCROLL_THRESHOLD = 50;

window.addEventListener('scroll', () => {
  if (window.scrollY > SCROLL_THRESHOLD) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

function initDialog($dialog, $toggle) {
  const $backdrop = $dialog.querySelector('.dialog-backdrop');

  // Open modal
  $toggle.addEventListener('click', () => {
    $dialog.showModal();
  });

  const close = () => {
    if (!$dialog.classList.contains('closing')) {
      $dialog.classList.add('closing');
    }
  };

  // Start closing animation on backdrop click
  $backdrop.addEventListener('click', () => {
    close();
  });

  // Override default close method with the custom animation
  $dialog.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    }
  });

  // Close modal after the animation ends
  $backdrop.addEventListener('animationend', () => {
    if ($dialog.classList.contains('closing')) {
      $dialog.close();
      $dialog.classList.remove('closing');
    }
  });
}

const $menu = document.querySelector('#menu');
const $menuToggle = document.querySelector('.menu-toggle');

initDialog($menu, $menuToggle);
