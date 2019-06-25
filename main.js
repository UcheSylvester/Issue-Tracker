function fetchIssues() {
    const issuesList = Document.getElementById('issueList');
    // getting the issues from localStorage
    const issues = JSON.parse(localStorage.getItem('issues')); 

    issuesList.innerHTML = '';

    issues.array.forEach(element => {
        
    });
}