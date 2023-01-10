const inputField = document.getElementById("input-field");
const generateButton = document.getElementById("generate-button");
const outputField = document.getElementById("output-field");

// Add an event listener to the button to handle button presses
generateButton.addEventListener("click", function() {
  // Get the text from the input field
  const inputText = inputField.value;

  // check if the input field is empty
  if (!inputText) {
    alert("Please enter something to generate script.");
    return;
  }
  // make API call
  generateScript(inputText);
});

async function generateScript(input) {
    // replace the API_KEY placeholder with your own API key
    const apiKey = "YOUR_API_KEY";
    // make the request
    try {
        const response = await fetch(https://api.openai.com/v1/engines/davinci/completions, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Bearer ${apiKey}
            },
            body: JSON.stringify({
                prompt: input,
                temperature: 0.5,
                max_tokens: 1000,
            }),
        });
        const json = await response.json();
        // update the output field with the generated script
        outputField.value = json.choices[0].text;
    } catch (error) {
        console.log(error);
        alert('Failed to generate script');
    }
}
