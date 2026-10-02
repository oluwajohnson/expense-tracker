document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("expense_date");

    if (dateInput && !dateInput.value) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        dateInput.value = `${year}-${month}-${day}`;
    }

    const deleteForms = document.querySelectorAll(
        ".delete-button"
    );

    deleteForms.forEach(button => {
        button.closest("form").addEventListener("submit", (event) => {
            const confirmed = window.confirm(
                "Are you sure you want to delete this expense?"
            );

            if (!confirmed) {
                event.preventDefault();
            }
        });
    });
});