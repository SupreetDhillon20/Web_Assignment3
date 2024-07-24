import Movies from "./components/movies"; // Import the Movies component

/**
 * Home component that serves as the main entry point of the application.
 * @returns {JSX.Element} - The rendered home page component.
 */

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Welcome to IMR Company</h1>
        <Movies/>
    </main>
  );
}
