// Function to make HTTP requests with authorization header
async function makeRequest(url, data, errorMessage) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${proMn8_HsyC8NZhvG_QrbLMf67dYYcJx3IPh_oyrGSgXz1f4ThPYxoNdVaQSLSe_1Di-pDR68RyEc08nRcP48Szg}`
      },
      body: JSON.stringify(data)
    });

    // Check if response is successful (2xx status code)
    if (!response.ok) {
      throw new Error(`Failed to ${errorMessage}: ${response.statusText}`);
    }

    // Return response data if successful
    return await response.json();
  } catch (error) {
    console.error(`Error ${errorMessage}:`, error);
    throw error;
  }
}

// Function to import survey
async function importSurvey() {
  try {
    const surveyData = {
      name: "Survey Name",
      questions: [
        { type: "MultipleChoice", text: "Question 1?" },
        { type: "TextInput", text: "Question 2?" }
        // Add more questions as needed
      ]
    };

    // Simulating more branching logic
    if (!surveyData.name) {
      throw new Error('Survey must have a name'); // Increase coverage by writing tests to cover this branch
    }

    if (surveyData.questions.length === 0) {
      throw new Error('Survey must have at least one question'); // Increase coverage by writing tests to cover this branch
    }

    // Make request to import survey
    return await makeRequest('/import-survey', surveyData, 'import survey');
  } catch (error) {
    console.error('Error importing survey:', error);
    throw error;
  }
}

// Function to enhance analytics
async function enhanceAnalytics() {
  try {
    const analyticsData = {
      // Provide analytics data to enhance
    };

    // Make request to enhance analytics
    return await makeRequest('/enhance-analytics', analyticsData, 'enhance analytics');
  } catch (error) {
    console.error('Error enhancing analytics:', error);
    throw error;
  }
}

// Event listener for import survey button
document.getElementById('importSurveyBtn').addEventListener('click', importSurvey);

// Event listener for enhance analytics button
document.getElementById('enhanceAnalyticsBtn').addEventListener('click', enhanceAnalytics);

// Export functions for testing
module.exports = {
  makeRequest,
  importSurvey,
  enhanceAnalytics
};
