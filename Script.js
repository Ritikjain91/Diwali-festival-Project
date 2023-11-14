function redirectToDiwaliHistoryPage() {
    // Redirect to another page
    window.location.href = 'diwali-history-page.html';

    
}

function mySecondMethod() {
    // This is the second method you want to execute.
    alert('Executing the Diwali-history-page method!');
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myButton').addEventListener('click', redirectToDiwaliHistoryPage);
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myButton').addEventListener('click',mySecondMethod)
});
   


function DiwaliTheory() {
    window.location.href = 'diwali-Theory-page.html';
    
}

document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById('DifferentTheory').addEventListener('click', DiwaliTheory)
    
});

function LordRamaTheory() {
    window.location.href = 'diwali-LordRama-page.html';
    
}

document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById('showRam').addEventListener('click', LordRamaTheory)
    
});
function CelebrationTheory() {
    window.location.href = 'Celebration-page.html';
    
}

document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById('Celebration').addEventListener('click', CelebrationTheory)
    
});


function togglePolicy() {
    var policyContent = document.getElementById("policyContent");
    policyContent.style.display = (policyContent.style.display === "none") ? "block" : "none";
  }