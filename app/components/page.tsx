export const Page = ({ children, page }: { children: React.ReactNode; page: number }) => {
	return (
		<div className="w-[800px] h-[1132px] bg-white relative border shadow-md">
			{children}
			<span className="absolute right-8 bottom-6">{page}</span>
		</div>
	)
}

export const P = ({ children }: { children: React.ReactNode }) => {
	return <p className="px-24 py-1 text-xl leading-8">{children}</p>
}

export const Quote = ({ children }: { children: React.ReactNode }) => {
	return <div className="bg-zinc-100 flex flex-col gap-2 p-8 border-l-4">{children}</div>
}
