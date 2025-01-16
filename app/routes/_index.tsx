import type { MetaFunction } from "@remix-run/node"
import { P, Page, Quote } from "~/components/page"

export const meta: MetaFunction = () => {
	return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }]
}

const listPrefix = "./"

const warnings: string[] = [
	"フォントに関して一切苦情を受け付けることにした。",
	"文章力の不足に寛容になること。",
	"偏見たっぷりの内容であることを受けいれること。",
	"本ドキュメントのクオリティ向上のために、逐次フィードバックを行うこと。",
]

const pages: React.ReactNode[] = [
	<>
		<h1 className="text-8xl font-serif px-24 my-32 bg-zinc-950 text-white py-8 font-semibold">
			<p className="mb-[-1rem]">Kanon</p>
			<p>Docs</p>
		</h1>
		<P>
			<div className="flex flex-row py-4">
				<span>※</span>
				<span className="">
					本ドキュメントをお読みになる際に以下の点に
					<br />
					ご注意頂きますようよろしくお願い致します。
				</span>
			</div>
		</P>
		<P>
			<Quote>
				{warnings.map((warning, index) => (
					<p key={index} className="flex flex-row">
						<span className="pr-2 text-zinc-400 ">{listPrefix}</span>
						<span>{warning}</span>
					</p>
				))}
			</Quote>
		</P>
		<p className="absolute text-center bottom-24 right-24 mx-auto justify-center items-baseline flex flex-row border-b border-black">
			<span className="text-xl px-4">Signed by</span>
			<span>
				<img src="/signature.png" className="h-12 px-8 relative bottom-[-0.7rem]" alt="" />
			</span>
		</p>
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
