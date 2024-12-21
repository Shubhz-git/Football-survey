# Football Position Survey

This project consists of two microservices: **UserUI** and **Analytics**. It allows users to select their favorite football position, stores the response in **Redis**, and displays the analytics of the responses through the **Analytics** service.

## Features

- **UserUI**:
  - Allows the user to select their favorite football position (Striker, Defender, Midfielder, Goalkeeper).
  - Sends the user's response to the **Analytics** service, which stores it in **Redis**.
  
- **Analytics**:
  - Fetches responses from **Redis** and displays the total number of responses and the number of times each position was selected.
  
## Technologies Used

- **Node.js** for both the **UserUI** and **Analytics** microservices.
- **Redis** for storing responses.
- **Docker** for containerization.
- **Bootstrap** for the frontend styling.

## Getting Started

### Prerequisites

To run the project locally, you will need:

- Docker and Docker Compose installed.

### Running the Project with Docker Compose

1. Clone the repository:
   
   ```bash
   git clone https://github.com/your-username/football-survey.git
   cd football-survey
