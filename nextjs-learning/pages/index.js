import Header from "@/components/Header";
import Person from "@/components/Person";
import { people } from "@/data";

export default function Home() {
    return (
        <>
            <Header />
            <ul>
                {people.map((p) => (
                    <Person key={p.id} person={p} />
                ))}
            </ul>
        </>
    );
}
