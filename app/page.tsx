import {Fragment} from "react";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

export default function Home() {
    return (
        <Fragment>
            <div className="min-h-screen w-full bg-gray-50 font-sans text-slate-800 flex flex-col">
                <main className="flex-1 w-full">
                    <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
                        <div className="flex gap-2 ">
                            <Link href='/myPlans' className={buttonVariants({variant: 'default'})}>My Plans</Link>
                            <Link href='/planDetails' className={buttonVariants({variant: 'default'})}>Plan
                                Details</Link>
                        </div>
                    </div>

                </main>

            </div>

        </Fragment>
    );
}
