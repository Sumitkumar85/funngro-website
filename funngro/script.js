// Modal Functions
const projectModal = document.getElementById('projectModal');

function openModal() {
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function submitProject(event) {
    event.preventDefault();
    alert('✅ Project posted successfully! We\'ll match you with talented teens soon.');
    event.target.reset();
    closeModal();
}

// Scroll to Features
function scrollToFeatures() {
    const featuresSection = document.getElementById('features');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === projectModal) {
        closeModal();
    }
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});