import type { MetaFunction } from "@remix-run/node"
import { P, Page, Quote } from "~/components/page"

export const meta: MetaFunction = () => {
	return [{ title: "Kanon Docs" }, { name: "description", content: "かのんの取扱説明書！" }]
}

const listPrefix = "./"

const warnings: string[] = [
	"フォントに関しての苦情は受け入れろ。",
	"文章力の不足に寛容にさせろ。",
	"偏見たっぷりの内容であることを受け入れさせろ。",
	"本ドキュメントのクオリティ向上のために、逐次フィードバックを強制しろ。",
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
				<span className="">本ドキュメントを読む際にこれらの点を留意すること。</span>
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
