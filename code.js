var containers;
let page = 0;

// Load function
window.addEventListener('load', function() {
    document.getElementById('full-screen').addEventListener('click', handleAnimation);
    // Get the containers
});

const handleAnimation = () => {
    var hand = document.getElementById('hand');
    hand.style.display = 'none';
    var log = document.getElementById('logo2');
    log.style.display = 'none';
    // The logos animations
    var logo = document.getElementById('logo');
    logo.style.animation = 'ani 4s ';
    var heading = document.getElementById('heading');
    heading.style.animation = 'ani 4s ';
    setTimeout(function() {
        if (page == 0) {
            logo.style.display = 'none';
            heading.style.display = 'none';
            document.body.style.overflow = "auto";
            menu();
            page = 1;
        }
    }, 2750);
};

const menu = () => {
    console.log("Entering menu function...");
    for (let i = 1; i <= 6; i++) {
        const classScreenId = `class-screen-${i}`;
        
        // Show the class screen by setting display to "block"
        document.getElementById(classScreenId).style.visibility = "hidden";
    }

    document.getElementById('lesson-menu').style.visibility = "visible";
    document.getElementById('lesson-menu').style.display = "block";

    // Add event listeners to containers
    const containerIds = ['image-container-1', 'image-container-2', 'image-container-3', 'image-container-4', 'image-container-5', 'image-container-6'];
    // Add click event listener for each container
    for (let i = 0; i < containerIds.length; i++) {
        const container = document.getElementById(containerIds[i]);
        container.addEventListener('click', moveTo);
    }
};

const moveTo = (event) => {
    console.log('MoveTo function called');
    
    // Get the clicked container's ID
    const containerId = event.currentTarget.id;
    let cardNumber = containerId.split('-')[2];
    const classScreenId = "class-screen-" + cardNumber;

    // Show the selected class screen
    console.log('Showing class screen:', classScreenId);
    document.getElementById(classScreenId).style.visibility = "visible";
    
    // Hide all other class screens
    for (let i = 1; i <= 6; i++) {
        const screenId = "class-screen-" + i;
        if (screenId !== classScreenId) {
            document.getElementById(screenId).style.visibility = "hidden";
        }
    }
    
    // Hide the lesson menu
    document.getElementById('lesson-menu').style.display = "none";
    
    // Get the back button number from the card number
    const backButtonNumber = cardNumber;
    console.log('Back button number:', backButtonNumber);

    // Get the back button element
    const backButton = document.getElementById('back_btn_' + backButtonNumber);
    console.log('Back button element:', backButton);

    // Add event listener to the back button if it exists
    if (backButton) {
        backButton.addEventListener('click', menu);
        console.log('Back button event listener added');
    }
};
