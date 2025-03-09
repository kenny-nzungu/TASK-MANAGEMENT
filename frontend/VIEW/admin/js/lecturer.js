// lecturer.js

// Create a new project
function createProject(title, description, deadline) {
    if (!title || !description || !deadline) {
        showNotification('Please provide complete project details.', 'error');
        return;
    }

    console.log(`Creating project: ${title}`);
    showNotification('Project created successfully!', 'success');
}

// Assign a task to a student or team
function assignTask(taskTitle, assignedTo, deadline) {
    if (!taskTitle || !assignedTo || !deadline) {
        showNotification('Please provide complete task details.', 'error');
        return;
    }

    console.log(`Assigning task: ${taskTitle} to ${assignedTo}`);
    showNotification('Task assigned successfully!', 'success');
}

// Create a student team
function createTeam(teamName, members) {
    if (!teamName || members.length === 0) {
        showNotification('Please provide a team name and at least one member.', 'error');
        return;
    }

    console.log(`Creating team: ${teamName}`);
    showNotification('Team created successfully!', 'success');
}

// Review team’s performance
function reviewTeamwork(teamName, feedback) {
    if (!teamName || !feedback) {
        showNotification('Please provide feedback for the team.', 'error');
        return;
    }

    console.log(`Reviewing team ${teamName}: ${feedback}`);
    showNotification('Team feedback submitted!', 'success');
}
