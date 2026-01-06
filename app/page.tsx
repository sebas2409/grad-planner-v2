import {Fragment} from "react";
import Link from "next/link";

export default function Home() {
    return (
        <Fragment>
            <h1>Home Page</h1>
            <Link href='/myPlans'>My Plans</Link>
            <Link href='/planDetails'>Plan Details</Link>
        </Fragment>
    );
}
