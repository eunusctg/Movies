GGFlix Web App with Built-in Ad Blocker
This is a simple web app designed to provide an ad-free viewing experience for GGFlix. It loads the https://ggflix.ru� website inside an iframe, and includes a built-in ad blocker to block common advertisements and popups while keeping the site responsive.
Features
Strict Ad Blocking: Blocks all common advertisements such as banners, popups, and embedded ad iframes.
Responsive Design: Fully responsive layout to ensure smooth viewing across all devices (desktop, tablet, and mobile).
Iframe-Based: The GGFlix website is loaded inside an iframe, which allows for isolation of the original site while ensuring seamless integration with the ad blocker.
Real-time Ad Removal: Ads are dynamically removed as they load, ensuring a clean and uninterrupted experience.
Table of Contents
Getting Started
Installation
Usage
Deployment
License
Acknowledgements
Getting Started
Follow these instructions to set up the project locally or deploy it to Netlify.
Prerequisites
Git: To clone the repository.
Node.js (optional): If you plan to build the project locally with a custom build tool.
Netlify Account: If you want to deploy the app to Netlify.
Installation
Clone the repository:
Bash
Copy code
git clone https://github.com/your-username/ggflix-web-app.git
cd ggflix-web-app
Install dependencies (Optional):
If you're using a build tool or package manager like npm, run:
Bash
Copy code
npm install
Otherwise, you can just use the plain HTML, CSS, and JS files without any dependencies.
Usage
Open the project folder and open the index.html file in your browser to see the web app in action.
View GGFlix with Ads Blocked: The app will load GGFlix inside an iframe and block any advertisements from appearing on the page.
Key Files
index.html: Main HTML structure for the web app.
assets/css/styles.css: Basic CSS for responsiveness and layout.
js/ad-blocker.js: JavaScript code that strictly removes ads and popups from the GGFlix website.
Deployment
You can easily deploy this app to Netlify. Follow these steps:
Push the project to GitHub (if not done already).
Go to Netlify�.
Create a new site by connecting your GitHub repository.
Choose the branch (usually main) to deploy.
Click Deploy site.
Once the deployment is complete, you’ll be given a URL where the web app will be live.
License
This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgements
The ad-blocking script is based on common techniques to remove unwanted ads using JavaScript.
The GGFlix website is a streaming platform, and this web app provides a way to browse it without interruptions.
