import type { MetaFunction } from "@remix-run/node"
import { Page } from "~/components/page"

export const meta: MetaFunction = () => {
	return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }]
}

const pages: React.ReactNode[] = [
	<>
		<h1>test</h1>
	</>,
]

export default function Index() {
	return (
		<>
			{pages.map((page, index) => (
				<Page key={index} page={index + 1}>
					{page}
				</Page>
			))}
		</>
	)
}
