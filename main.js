function fetchIssues() {
    const issuesList = Document.getElementById('issueList');
    // getting the issues from localStorage
    const issues = JSON.parse(localStorage.getItem('issues')); 

    issuesList.innerHTML += '';  // clearing the list of issues on load

    issues.forEach(issue => {
        const id = issue.id,
              description = issue.description,
              severity = issue.severity,
              assignedTo = issue.assignedTo,
              status = issue.status;

        issuesList.innerHTML = `
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