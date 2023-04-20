import React from "react";
import Link from "next/link";
const Person = ({ person }) => {
    return (
        <li>
            <Link href="/person/[id]" as={`/person/${person.id}`}>
                {person.name}
            </Link>
        </li>
    );
};

export default Person;
