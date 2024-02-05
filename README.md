## Your First App

This app displays the sample surveysparrow full_page_app placeholder

### Files and Folders
    .
    ├── README.md                 A file for your future self and developer friends to learn about app
    ├── app                       A folder to place all assets required for frontend components
    │   ├── index.html            A landing page for the user to use the app
    │   ├── scripts               JavaScript to place files frontend components business logic
    │   │   └── app.js
    │   └── styles                A folder to place all the styles for app
    │       ├── images
    │       │   └── icon.svg
    │       └── style.css
    ├── config                    A folder to place all the configuration files
    │   └── iparams.json
    └── manifest.json             A JSON file holding meta data for app to run on platform

# Survey Importer

Survey Importer is a frontend-only web application designed to allow users to import surveys into SurveySparrow without the need for a backend server. It provides a simple interface for users to input survey details and trigger the import process. Additionally, it includes an "Enhancer" feature that analyzes the survey structure and suggests improvements based on SurveySparrow's features.

## Features

- Input survey title and questions
- Import survey data into SurveySparrow
- Enhance survey structure with suggestions

## Usage

1. Clone or download this repository to your local machine.

2. Open `index.html` in your web browser.

3. Fill in the survey title and questions in the provided form fields.

4. Click the "Import Survey" button to trigger the import process.

5. Upon successful import, you will receive a confirmation message.

6. Optionally, review the suggestions provided by the "Enhancer" feature to improve the survey structure further.

## Enhancer Feature

The "Enhancer" feature analyzes the survey structure and suggests improvements based on SurveySparrow's features such as conversational surveys, NPS scoring, etc. It provides recommendations to enhance the survey experience and increase user engagement.

## Dependencies

- No external dependencies are required. The application runs entirely on the client-side using HTML, CSS, and JavaScript.

## Notes

- This application is intended for demonstration purposes and may not cover all use cases or error scenarios.
- Certain advanced features like analyzing survey structures or migrating data might require a backend server for a more robust implementation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
