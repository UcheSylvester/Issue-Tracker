console.log('working...')

const form = document.getElementById('issueInputForm')
const issuesList = document.getElementById('issuesList');

function fetchIssues() {
    console.log('fetching issues from localStoage')
    let issues = JSON.parse(localStorage.getItem('issues'));  // getting the issues from localStorage

    issuesList.innerHTML = '';  // clearing the list of issues on load
    
    issues.forEach(issue => {
        const id = issue.id,
              description = issue.description,
              severity = issue.severity,
              assignedTo = issue.assignedTo,
              status = issue.status;

        // Displaying issues
        issuesList.innerHTML += `
        <div class="well">
            <h6> Issue ID: ${id} </h6>
            <p><span class="label label-info"> ${status}</span></p>

            <h3>${description}</h3>
            <p>
                <span class="glyphicon glyphhicon-time"></span>${severity}
                <span class="glyphicon glyphhicon-time"></span>${assignedTo} 
            </p>

            <a href="#" class="btn btn-warning" onclick="setStatusClosed(/${id}/)">Close</a>
            <a href="#" class="btn btn-danger" onclick="deleteIssue(/${id}/)">Delete</a>

        </div>`
    })
}


function saveIssue(e) {
    e.preventDefault()

    console.log('saving issues')  
    let issueId = chance.guid(),
        issueDescription = document.getElementById('issueDescInput').value,
        issueSeverity = document.getElementById('issueSeverityInput').value,
        issueAssignedTo = document.getElementById('issueAssignedToInput').value,
        issueStatus = 'open';

    const issue = {
        id: issueId,
        description: issueDescription,
        severity: issueSeverity,
        assignedTo: issueAssignedTo,
        status: issueStatus
    }

    // checking is localStorage exist in browser window
    if(window.localStorage) {
        let issues = [];

        if(localStorage.getItem('issues') == 'undefined') {

            issues.push(issue);
            localStorage.setItem('issues', JSON.stringify(issues));
            console.log(issues)
        }
        else {
            let issues = JSON.parse(localStorage.getItem('issues'));
            issues.push(issue);
            localStorage.setItem('issues', JSON.stringify(issues))
        }
    } else {
        console.warn('localStorage does not exist')

    }




    // if(localStorage.getItem('issues') === 'null') {
    //     let issues = [];
    //     issues.push(issue)
    //     localStorage.setItem('issues', JSON.stringify(issues))
    // } 
    // else {
    //     let issues = JSON.parse(localStorage.getItem('issues'));
    //     issues.push(issue);
    //     localStorage.setItem('issues', JSON.stringify(issues))
    // }

    form.reset();

    fetchIssues();
    
}

form.addEventListener('submit', saveIssue)

// onload="fetchIssues()"