import AnnouncementComponent from "../components/Announcement";
import HeaderComponent from "../components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head></head>
			<body className="bg-zinc-900 text-white">
				<AnnouncementComponent />
				<HeaderComponent />
				<main className="mx-auto max-w-6xl">{children}</main>
			</body>
		</html>
	);
}
