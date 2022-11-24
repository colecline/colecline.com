import {
	ArrowRightCircleIcon,
	NewspaperIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";

export default function AnnouncementComponent() {
	return (
		<div className="hidden bg-black py-2 sm:block">
			<div className="mx-auto flex max-w-6xl justify-between px-4">
				<div className="flex space-x-2">
					<div className="flex h-8 w-8 rounded bg-zinc-900 p-1.5">
						<NewspaperIcon />
					</div>
					<span className="my-auto text-sm">
						How to Build a Resume using Next.js
					</span>
				</div>
				<Link
					href="/blog/123"
					className="my-auto flex space-x-1.5 rounded bg-zinc-900 px-4 py-1 text-sm hover:bg-zinc-800"
				>
					<span>Read</span>
					<ArrowRightCircleIcon className="my-auto h-4 w-4" />
				</Link>
			</div>
		</div>
	);
}
