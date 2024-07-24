import Movies from "./components/movies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Welcome to IMR Company</h1>
        <Movies/>
    </main>
  );
}
