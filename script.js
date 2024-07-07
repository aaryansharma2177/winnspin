document.getElementById('spin-button').addEventListener('click', function() {
    // Generate a random angle to spin
    const randomAngle = Math.floor(Math.random() * 3600) + 1800; // spins between 5 and 10 times
    
    // Get spin wheel element
    const spinWheel = document.getElementById('spin-wheel');
    
    // Apply the spinning transition
    spinWheel.style.transition = 'transform 4s ease-out';
    spinWheel.style.transform = `rotate(${randomAngle}deg)`;
    
    // After spinning, show the result
    setTimeout(function() {
        document.getElementById('result').classList.remove('hidden');
    }, 4000);
});
