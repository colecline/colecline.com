import HeaderComponent from "../components/Header";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head></head>
			<body>
				<HeaderComponent />
				<main>{children}</main>
			</body>
		</html>
	);
}
