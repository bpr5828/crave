# Crave

**Crave** (formerly FlavorGenie) is a fast, specialized, and highly personalized recipe ordering platform powered by AI. It guides users through a discovery process to understand their cravings and nutritional needs, then generates tailored meal options using Large Language Models (LLMs).

## Features

- **AI-Powered Discovery**: Conversational interface to determine your perfect meal.
- **Personalized Suggestions**: Recipes generated based on cuisine, diet, and macro goals.
- **Smart Customization**: Adjust recipes to your liking (e.g., "Make it spicy").
- **Seamless Ordering**: Integrated shopping cart and checkout flow.
- **Premium Design**: Modern, appetizing UI built with a custom design system.
- **Responsive App Shell**: A unified, mobile-first layout with a fixed header/footer and optimized scrolling.

## Tech Stack

- **Frontend**: React (Next.js 14 App Router)
- **Styling**: Vanilla CSS (Global variables & Modules)
- **Backend**: Next.js API Routes (Serverless Functions)
- **AI**: Integration with LLMs (Mocked for MVP)
- **Payment**: Square Payment Gateway (Mocked for MVP)
- **deploy**: Vercel / AWS Lambda compatible

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd crave
   ```

3. **Run Locally**
   The easiest way to start the app is using the helper script:
   ```bash
   ./run_local.sh
   ```
   Or manually:
   ```bash
   npm install
   npm run dev
   ```

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to start your flavor journey.

## Project Structure

- `/app`: Next.js App Router pages and API routes.
- `/app/components`: Reusable UI components (ChatInterface, RecipeCard, etc).
- `/app/context`: Global state management.
- `/styles`: Global CSS and design system variables.

## Deployment

The project is configured for **Serverless Containers** (Docker) to ensure consistency across all cloud providers.

### Prerequisites
- Docker installed and running.
- Cloud CLI tools (`aws`, `az`, `gcloud`) installed and authenticated.

### 1. AWS App Runner
Deploy to AWS using a fully managed container service.
```bash
./deploy/aws.sh
```

### 2. Azure Container Apps
Deploy to Azure's serverless container platform.
```bash
./deploy/azure.sh
```

### 3. Google Cloud Run
Deploy to Google's fully managed serverless platform.
```bash
./deploy/gcp.sh
```

## License

This project is licensed under the MIT License.
