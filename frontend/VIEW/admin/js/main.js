// main.js

// Global navigation function
function navigateTo(page) {
    window.location.href = page;
}

// User authentication (simple mock-up)
function login(userType, email, password) {
    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    console.log(`Logging in as ${userType}...`);
    // Mock-up: Redirect based on user type
    switch (userType) {
        case 'admin':
            navigateTo('admin-dashboard.html');
            break;
        case 'lecturer':
            navigateTo('lecturer-dashboard.html');
            break;
        case 'student':
            navigateTo('student-dashboard.html');
            break;
        default:
            alert('Invalid user type');
    }
}

// Logout function
function logout() {
    console.log('Logging out...');
    navigateTo('login.html');
}

// Utility: Show notification
function showNotification(message, type = 'info') {
    alert(`${type.toUpperCase()}: ${message}`);
}
