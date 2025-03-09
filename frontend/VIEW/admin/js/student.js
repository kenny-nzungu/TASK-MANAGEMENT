// student.js

// View assigned tasks
function viewTasks() {
    console.log('Fetching assigned tasks...');
    const tasks = [
        { title: 'Research Paper', deadline: '2025-03-15' },
        { title: 'Team Presentation', deadline: '2025-03-20' }
    ];
    console.table(tasks);
}

// Submit a task
function submitTask(taskTitle, submissionLink) {
    if (!taskTitle || !submissionLink) {
        showNotification('Please provide task title and submission link.', 'error');
        return;
    }

    console.log(`Submitting task: ${taskTitle}`);
    showNotification('Task submitted successfully!', 'success');
}

// Join a team
function joinTeam(teamName) {
    if (!teamName) {
        showNotification('Please provide a valid team name.', 'error');
        return;
    }

    console.log(`Joining team: ${teamName}`);
    showNotification(`You have joined team ${teamName}!`, 'success');
}

// Provide teamwork feedback
function provideFeedback(teamName, feedback) {
    if (!teamName || !feedback) {
        showNotification('Please provide feedback.', 'error');
        return;
    }

    console.log(`Providing feedback for team ${teamName}: ${feedback}`);
    showNotification('Feedback submitted!', 'success');
}
