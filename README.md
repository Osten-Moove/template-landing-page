# Project: template-landing-page

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![GitHub open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)


This is a [Next.js](https://nextjs.org/) project, aiming to provide a seamless development experience for modern web applications.

## 🚀 Getting Started

Firstly, make sure you have Node.js and npm/yarn installed on your machine. Then, follow the steps below to set up the project locally.

### 📥 Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Osten-Moove/template-landing-page.git
cd sign-lp
npm install
# or
yarn install
```

### 🖥️ Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 📂 Environment Variables

Before starting, you need to set up your environment variables. Copy the `.env.example` file to a new file named `.env.local` and fill in the variables:

- `AWS_ACCESS_KEY_ID`: Your AWS Access Key ID. [More info](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys)
- `AWS_SECRET_ACCESS_KEY`: Your AWS Secret Access Key. [More info](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys)
- `AWS_SES_REGION`: The AWS SES region. [Supported regions](https://docs.aws.amazon.com/general/latest/gr/ses.html)
- `AWS_SES_EMAIL_SENDER_IDENTITY`: The sender email identity for AWS SES. [More info](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization-identity-owner-tasks.html)
- `NEXT_PUBLIC_KEY_CAPTCHA`: Your Google reCAPTCHA v2 site key. [More info](https://developers.google.com/recaptcha/docs/display)
- `NEXT_PUBLIC_IMAGE_URL`: Public image URL.
- `NEXT_PUBLIC_NAME`: Public name.
- `NEXT_PUBLIC_MESSAGE`: Public message.
- `NEXT_PUBLIC_PHONE`: Public phone number.
- `NEXT_PUBLIC_PERFILLINKEDIN_URL`: Public LinkedIn profile URL.

Please make sure to replace the placeholders with your actual values.

### 📚 Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [AWS SES Documentation](https://docs.aws.amazon.com/ses/latest/dg/Welcome.html) - Learn about using Amazon Simple Email Service.
- [Google reCAPTCHA](https://developers.google.com/recaptcha) - Protect your website from spam and abuse while letting real people pass through with ease.

### 📦 Scripts

- `npm run build`: Builds the application for production usage.
- `npm run start`: Runs a Node.js server that serves the application in production.
- `npm run lint`: Runs the linter to catch issues in your code.

### 🚀 Deployment

Follow the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for detailed instructions on how to deploy your Next.js application.

## 🛠️ Dependencies

This project is built with a range of technologies and libraries. Some of the key dependencies include:

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/): A React framework that enables functionality such as server-side rendering and generating static websites.
- [AWS SDK](https://aws.amazon.com/sdk-for-javascript/): The AWS SDK for JavaScript enables you to directly access AWS services from your JavaScript code running in the browser.
- [Nodemailer](https://nodemailer.com/about/): A module for Node.js to send emails.
- [react-google-recaptcha](https://www.npmjs.com/package/react-google-recaptcha): A React wrapper for Google reCAPTCHA.

## 🖊️ Code Style

This project follows a clean code philosophy, making it easier to read, understand, and contribute to. Ensure that you follow the established patterns and maintain consistency throughout the codebase.

## 🤝 Contributors

- [📊 Graphs](https://github.com/Osten-Moove/xskill-business-lp/graphs/contributors)

- [@kauanleite](https://github.com/Kauan-Leite)
