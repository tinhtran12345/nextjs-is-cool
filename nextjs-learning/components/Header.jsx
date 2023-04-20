import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full flex items-center justify-center bg-blue-500">
            <nav className="w-[80%] h-[50px] font-bold flex items-center">
                <ul className="flex items-center gap-10">
                    <li className="hover:text-white cursor-pointer">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-white cursor-pointer">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="hover:text-white cursor-pointer">
                        <Link href="/post/first">First Post</Link>
                    </li>
                    <li className="hover:text-white cursor-pointer">
                        <Link href="/post/second">Second Post</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
