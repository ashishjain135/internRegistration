document.getElementById('internForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const qualification = document.getElementById('qualification').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    
    if (name && email && qualification && phone && dob) {
        alert(`Registration Successful!\nName: ${name}\nEmail: ${email}\nQualification: ${qualification}\nPhone: ${phone}\nDOB: ${dob}`);
    } else {
        alert('Please fill all fields correctly.');
    }
});
