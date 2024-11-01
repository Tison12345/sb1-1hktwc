# ConsumeWise App

## Setup Instructions

1. Install VS Code Extensions:
   - NativeScript Extension for VS Code
   - TypeScript and JavaScript Language Features
   - Tailwind CSS IntelliSense

2. Install NativeScript CLI globally:
   ```bash
   npm install -g nativescript
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   ns run
   ```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── screens/        # Application screens
├── types/         # TypeScript interfaces
├── data/          # Mock data
└── app.ts         # Entry point
```

## Development

- Use `ns run android` for Android development
- Use `ns run ios` for iOS development (requires macOS)
- Use `ns preview` for quick preview