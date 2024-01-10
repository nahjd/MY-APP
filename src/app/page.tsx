import "./globals.css";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <b>
          <h1>This is Home Page</h1>
        </b>
      </div>
    </>
  );
}
