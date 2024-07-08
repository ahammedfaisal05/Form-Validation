/**
 * Alert function
 */
const setAlert = (msg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss = "alert" class="btn-close"></button></p>`
} 

/**
 * Email Check
 */
const emailCheck = (email) => {
    let Pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{1,}\.[a-z]{1,4}$/;
    return Pattern.test(email);
}

/**
 * Bangladeshi cellnumber Check
 */
const cellCheck = (cell) => {
    let Pattern = /^(01|8801|\+8801)[0-9]{9}$/;
    return Pattern.test(cell);
}