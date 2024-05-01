document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('word-input');
    const meaningList = document.getElementById('meaning-list');

    inputField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const word = inputField.value.trim();
            if (word !== '') {
                fetchMeanings(word);
            }
        }
    });

    function fetchMeanings(word) {
        // Make API request to fetch meanings
        // Example using fetch API
        fetch(`https://api.dictionary.com/api/v3/references/learners/json/${word}`)
            .then(response => response.json())
            .then(data => {
                // Process data and display meanings
                displayMeanings(data);
            })
            .catch(error => console.error('Error fetching meanings:', error));
    }

    function displayMeanings(data) {
        // Clear previous meanings
        meaningList.innerHTML = '';

        // Display meanings
        data.forEach(meaning => {
            const meaningItem = document.createElement('li');
            meaningItem.textContent = meaning.definition;
            meaningList.appendChild(meaningItem);
        });
    }
});
