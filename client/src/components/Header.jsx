"use client";

import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function HeaderComponent() {
	return (
		<Disclosure as="nav" className="bg-black sm:bg-zinc-900">
			<div className="mx-auto max-w-6xl px-4 py-5 sm:flex sm:justify-between">
				<div className="flex justify-between">
					{/* Navigation Bar Logo */}
					<a className="text-2xl font-bold">cole cline</a>

					<Disclosure.Button className="sm:hidden">
						<Bars3Icon className="h-6 w-6 ui-open:hidden" />
						<XMarkIcon className="h-6 w-6 ui-not-open:hidden" />
					</Disclosure.Button>
				</div>
				<div className="my-auto mt-4 hidden space-y-4 ui-open:block sm:mt-0 sm:flex sm:space-x-6 sm:space-y-0">
					<Link
						href="/about"
						className="block rounded-md bg-zinc-900 py-2 px-4 text-lg hover:bg-zinc-800"
					>
						About
					</Link>
					<Link
						href="/projects"
						className="block rounded-md bg-zinc-900 py-2 px-4 text-lg hover:bg-zinc-800"
					>
						Projects
					</Link>
					<Link
						href="/blog"
						className="block rounded-md bg-zinc-900 py-2 px-4 text-lg hover:bg-zinc-800"
					>
						Blog
					</Link>
				</div>
			</div>
		</Disclosure>
	);
}
