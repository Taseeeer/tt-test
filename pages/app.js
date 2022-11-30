import Link from "next/link";
import Login from "./login";

export default function App() {
    return (
      <Link href='/'>
        <Login />
      </Link>
    )
}