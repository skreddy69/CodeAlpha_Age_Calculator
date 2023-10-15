function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter valid values for day, month, and year.");
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript

    if (birthDate > today) {
        alert("Please enter a date of birth in the past.");
        return;
    }

    const age = today.getFullYear() - birthDate.getFullYear();

    // Adjust age if the birthday hasn't occurred yet this year
    if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is: ${age} years.`;
}