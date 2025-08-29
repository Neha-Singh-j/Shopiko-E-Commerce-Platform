// Add this at the beginning of your common.js
document.addEventListener('DOMContentLoaded', function() {
    // Apply theme to body
    document.body.style.backgroundColor = '#f8f9fa'; // Light background for content
    document.body.style.color = '#2c0b5e'; // Dark purple text for readability
    
    // Optionally add gradient borders to main content
    const mainContent = document.querySelector('main');
    if(mainContent) {
        mainContent.style.borderTop = '3px solid transparent';
        mainContent.style.borderImage = 'linear-gradient(to right, #6a11cb, #fc4a1a)';
        mainContent.style.borderImageSlice = '1';
        mainContent.style.borderRadius = '0 0 8px 8px';
    }
});

// Your existing like button code
let allLikeButton = document.querySelectorAll('.like-btn');

async function likeButton(productId, btn) {
    try {
        let response = await axios({
            method: 'post', 
            url: `/products/${productId}/like`,
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        });
        
        if(btn.children[0].classList.contains('fa-regular')) {
            btn.children[0].classList.remove('fa-regular');
            btn.children[0].classList.add('fa-solid');
            btn.children[0].style.color = '#fc4a1a'; // Orange color for liked state
        } else {
            btn.children[0].classList.remove('fa-solid');
            btn.children[0].classList.add('fa-regular');
            btn.children[0].style.color = '#6a11cb'; // Purple color for unliked state
        }
    }
    catch(e) {
        if(e.response.status === 401) {
            window.location.replace('/login');
            console.log(e.message, 'error hai ye window vaali line ka');
        }
    }
}

for(let btn of allLikeButton) {
    btn.addEventListener('click', () => {
        let productId = btn.getAttribute('product-id');
        likeButton(productId, btn);
    });
}