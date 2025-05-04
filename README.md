# Painel de Dados Nubo - Frontend

This project is a modern frontend setup using **React**, **Vite**, **Tailwind CSS v4**, and **Vitest** for testing.

## 🚀 Features
- **React 19** 
- **Vite** for ultra-fast builds and development
- **Tailwind CSS v4** for styling
- **Vitest** for unit testing
- **GitLab CI/CD Pipeline** with automated testing and build verification

## 🛠 Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://gitlab.com/your-repo.git
   cd your-repo
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Run the development server**
   ```sh
   npm run dev
   ```
4. **Run tests**
   ```sh
   npm run test
   ```
5. **Build for production**
   ```sh
   npm run build
   ```

## 🧪 Testing with Vitest
- Tests are colocated with components (e.g., `Button.test.tsx` in the same folder as `Button.tsx`)
- Global test setup is in `src/test/setup.ts`
- Run tests with coverage:
  ```sh
  npm run test:coverage
  ```

## 🔧 GitLab CI/CD Pipeline
This project includes a **GitLab CI/CD pipeline** and a **GitLab Runner** that:
- Runs unit tests using Vitest
- Ensures new files have corresponding test files (optional check)
- Builds the project

## 📌 Branch Naming Convention
Use the following branch naming conventions:
- **Feature branches:** `feature/<short-description>` (e.g., `feature/add-auth`)
- **Bugfix branches:** `fix/<short-description>` (e.g., `fix/navbar-bug`)
- **Hotfix branches:** `hotfix/<short-description>` (e.g., `hotfix/critical-bug`)

## 📌 Merge Request Naming Convention
When creating a Merge Request (MR), follow this format:
- **Feature MRs:** `[Feature] <short description>` (e.g., `[Feature] Add authentication`)
- **Bugfix MRs:** `[Fix] <short description>` (e.g., `[Fix] Resolve navbar alignment issue`)
- **Hotfix MRs:** `[Hotfix] <short description>` (e.g., `[Hotfix] Patch security vulnerability`)
