document.addEventListener('DOMContentLoaded', function () {
    const termsModal = document.getElementById('termsModal');
    const contentWrapper = document.getElementById('contentWrapper');
    const agreeButton = document.getElementById('agreeButton');

    termsModal.style.display = 'block';

    function closeTermsModal() {
        termsModal.style.display = 'none';
        contentWrapper.classList.remove('blur-content');
        contentWrapper.style.pointerEvents = 'auto';
    }

    function acceptTerms() {
        closeTermsModal();
    }

    contentWrapper.classList.add('blur-content');

    agreeButton.addEventListener('click', acceptTerms);
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.social-links').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offset = 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

