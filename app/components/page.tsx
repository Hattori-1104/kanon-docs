export const Page = ({ children, page }: { children: React.ReactNode; page: number }) => {
	return (
		<div className=" w-[800px] h-[1132px] bg-white relative px-24 py-16 border shadow-md">
			{children}
			<span className="absolute right-8 bottom-6">{page}</span>
		</div>
	)
}
