// Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.btn-search');
    if (searchBtn) searchBtn.addEventListener('click', handleSearch);
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

function handleSearch(e) {
    e.preventDefault();
    const gender = document.getElementById('gender')?.value;
    const ageFrom = document.getElementById('age-from')?.value;
    const ageTo = document.getElementById('age-to')?.value;
    
    if (!gender || !ageFrom || !ageTo) {
        alert('Please fill all search fields');
        return;
    }
    
    alert(`Searching for ${gender} aged ${ageFrom}-${ageTo}...`);
}
