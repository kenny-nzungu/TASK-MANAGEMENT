// admin.js

// Add a new lecturer
function addLecturer(name, email) {
    if (!name || !email) {
        showNotification('Please provide name and email for the lecturer.', 'error');
        return;
    }

    console.log(`Adding lecturer: ${name} (${email})`);
    showNotification('Lecturer added successfully!', 'success');
}

// Add a new student
function addStudent(name, email) {
    if (!name || !email) {
        showNotification('Please provide name and email for the student.', 'error');
        return;
    }

    console.log(`Adding student: ${name} (${email})`);
    showNotification('Student added successfully!', 'success');
}

// Update system settings
function updateSystemSettings(settings) {
    console.log('Updating system settings:', settings);
    showNotification('System settings updated!', 'success');
}

// View all users
function viewAllUsers() {
    console.log('Fetching list of all users...');
    // Mock-up data
    const users = [
        { name: 'John Doe', role: 'Lecturer' },
        { name: 'Jane Smith', role: 'Student' }
    ];
    console.table(users);
}
