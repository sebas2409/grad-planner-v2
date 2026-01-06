"use client";

import {
    ChevronDown,
    MoreVertical,
    Plus,
} from "lucide-react";
import {Button} from "@/components/ui/button";
import Header from "@/components/header/Header";

export default function MyPlansPage() {
    return (
        <div className="min-h-screen w-full bg-gray-50 font-sans text-slate-800 flex flex-col">

            <Header/>

            <main className="flex-1 w-full">

                <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <h1 className="text-3xl font-bold text-gray-900">My Plans</h1>
                        <div className="flex gap-3">
                            <Button variant="outline"
                                    className="bg-white text-gray-700 hover:bg-gray-50 shadow-sm border-gray-300">
                                Compare Plans
                            </Button>
                            <Button variant="outline"
                                    className="bg-white text-gray-700 hover:bg-gray-50 shadow-sm border-gray-300">
                                All Plan Histories
                            </Button>
                        </div>
                    </div>

                    <div className="relative rounded-lg border border-gray-200 bg-white shadow-sm">
                        <div
                            className="absolute -top-px left-0 z-10 rounded-br-md rounded-tl-md bg-[#00C558] px-4 py-1.5 text-sm font-semibold text-white shadow-sm">
                            Declared Plan
                        </div>

                        <div className="p-6 pt-10">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-2">
                                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                                        <ChevronDown className="h-6 w-6"/>
                                    </button>
                                    <h2 className="text-2xl font-bold text-gray-700">test</h2>
                                </div>

                                <div className="flex items-center gap-4">
                  <span className="hidden text-sm text-gray-500 sm:inline-block">
                    Plan Status : <span className="text-red-500">In-Progress</span>
                  </span>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <MoreVertical className="h-5 w-5"/>
                                    </button>
                                </div>
                            </div>

                            <div className="ml-8 mt-6 space-y-6">
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                        Degree
                                    </h3>
                                    <p className="mt-1 text-sm font-medium text-gray-400">
                                        BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING - UG25
                                    </p>
                                    <a href="#" className="mt-1 block text-xs text-blue-500 hover:underline">
                                        Change Major
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                        Certificate
                                    </h3>
                                    <p className="mt-1 text-sm font-medium text-gray-400">
                                        C180 FULL STACK WEB DEVELOPMENT - UG25
                                    </p>
                                    <a href="#" className="mt-1 block text-xs text-blue-500 hover:underline">
                                        Change Certificate
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 border-t border-gray-100 p-4">
                            <div className="flex justify-end gap-3">
                                <Button
                                    variant="outline"
                                    className="h-9 border-gray-300 text-xs font-semibold uppercase tracking-wide text-gray-600 hover:bg-gray-50"
                                >
                                    Duplicate
                                </Button>
                                <Button
                                    className="h-9 bg-[#00C558] text-xs font-bold uppercase tracking-wide text-white hover:bg-[#00a84b]"
                                >
                                    View Plan
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Tarjeta 2: Alternate Plan */}
                    <div className="relative rounded-lg border border-gray-200 bg-white shadow-sm">
                        <div
                            className="absolute -top-[1px] left-0 z-10 rounded-br-md rounded-tl-md bg-gray-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm">
                            Alternate Plan
                        </div>

                        <div className="p-4 pt-8">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-2">
                                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                                        <ChevronDown className="h-6 w-6 -rotate-90"/>
                                    </button>
                                    <h2 className="text-lg font-bold text-gray-700">Plan 1</h2>
                                </div>

                                <div className="flex items-center justify-between gap-4 sm:justify-end">
                  <span className="text-sm text-gray-500">
                    Plan Status: <span className="text-red-500">Recommended Plan Applied</span>
                  </span>
                                    <Button
                                        className="h-8 bg-gray-600 text-xs font-semibold text-white hover:bg-gray-700"
                                    >
                                        View Plan
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Botón Create Alternate Plan */}
                    <button
                        className="group flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-[#007da5] py-4 text-[#007da5] transition-all hover:bg-blue-50 hover:border-[#006080] hover:text-[#006080]">
                        <Plus className="h-5 w-5 stroke-[3]"/>
                        <span className="text-lg font-bold">Create Alternate Plan</span>
                    </button>

                </div>
            </main>
        </div>
    );
}