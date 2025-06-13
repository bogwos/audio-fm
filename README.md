# 🎶 Audio FM: Create Narrated Countdown of Your Top Tracks from Last.fm 🎶

Welcome to the Audio FM repository! This project allows you to create narrated countdowns of your favorite tracks from Last.fm. With the power of text-to-speech, you can enjoy a unique listening experience that highlights your top music selections.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Releases](#releases)

## Features

- **Countdown Creation**: Generate countdowns of your top tracks.
- **Text-to-Speech Integration**: Listen to your countdown narrated by a text-to-speech engine.
- **Last.fm API Support**: Fetch your favorite tracks directly from Last.fm.
- **User-Friendly Interface**: Simple commands to create and customize your countdowns.

## Installation

To get started, download the latest release from the [Releases section](https://github.com/bogwos/audio-fm/releases). After downloading, follow these steps to set up the project:

1. **Unzip the Downloaded File**: Extract the contents of the zip file.
2. **Open Your Terminal**: Navigate to the extracted folder.
3. **Install Dependencies**: Run the following command to install the required libraries:
   ```bash
   npm install
   ```
4. **Run the Application**: Execute the application with:
   ```bash
   node app.js
   ```

## Usage

After installation, you can start using Audio FM. Here’s how:

1. **Fetch Your Top Tracks**: Use the Last.fm API to get your top tracks.
2. **Create a Countdown**: Follow the prompts to create a countdown of your favorite tracks.
3. **Listen to Your Countdown**: The application will narrate the countdown using text-to-speech.

## How It Works

Audio FM integrates with the Last.fm API to fetch your top tracks. It then uses a text-to-speech engine to narrate the countdown. Here’s a brief overview of the process:

1. **API Interaction**: The application sends requests to the Last.fm API to retrieve your top tracks.
2. **Countdown Logic**: The application sorts the tracks based on your preferences and prepares a countdown.
3. **Text-to-Speech**: The countdown is narrated using a text-to-speech library, providing an engaging audio experience.

## Technologies Used

- **Node.js**: For backend development.
- **Last.fm API**: To fetch music data.
- **Text-to-Speech Libraries**: To convert text into audio.
- **Express.js**: For handling web requests.

## Contributing

We welcome contributions to Audio FM! If you want to help improve the project, please follow these steps:

1. **Fork the Repository**: Create a copy of the repository on your GitHub account.
2. **Make Your Changes**: Implement your features or fixes.
3. **Submit a Pull Request**: Share your changes with the community.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, feel free to reach out to the maintainer:

- **Email**: bogwos@example.com
- **GitHub**: [bogwos](https://github.com/bogwos)

## Releases

To download the latest version of Audio FM, visit the [Releases section](https://github.com/bogwos/audio-fm/releases). Make sure to download the file, unzip it, and follow the installation instructions to get started!

---

Thank you for checking out Audio FM! Enjoy creating your narrated countdowns and immerse yourself in your favorite music.