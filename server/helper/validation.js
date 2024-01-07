async function validateJob(data) {
    if (!data.companyName || data.companyName.length < 3) {
        return ' company Name must be at least 3 characters long';
    }
    
    if (!data.JobTitle || data.JobTitle.length < 3) {
        return ' Job Title  must be at least 3 characters long';
    }

    if (!data.postingBy || !isValidEmail(data.postingBy)) {
        return 'Invalid  Job Posted by address';
    }
    // if (!data.contactNumber || !data.contactNumber.length === 10) {
    //     return 'Contact Number shold be 10 digit ';
    // }
    // if (!data.createdBy) {
    //     return 'createdBy must be required';
    // }
    if (!data.companyLogo) {
        return 'company Logo must be required';
    }

    if (!data.jobLocation) {
        return 'job Location  must be required';
    }

    if (!data.experienceLevel) {
        return 'experience Level  must be required';
    }
    if (!data.minPrice) {
        return 'min Price   must be required';
    }

    if (!data.maxPrice) {
        return 'max Price   must be required';
    }
    return null; // Validation passed
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}


module.exports = {
    validateJob
}
