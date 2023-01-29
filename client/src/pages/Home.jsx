import { useState, useEffect } from "react";
import { Loader, Card, FormField } from "../components";
const RenderCards = ({ data, title }) => {
	if (data?.length > 0)
		return data.map((post) => <Card key={post._id} {...post} />);
	return (
		<h2 className="mt-5 text-xl uppercase text-[#6449ff] font-bold">{title}</h2>
	);
};
const Home = () => {
	const [loading, setLoading] = useState(false);
	const [allPostss, setAllPosts] = useState(null);
	const [searchText, setSearchText] = useState("");
	return (
		<section className="mx-auto max-w-7xl">
			<div>
				<h1 className="font-extrabold text-[#222328] text-[28px]">
					The Community
				</h1>
				<p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
					Browse thru stunning images generated from the dali AI
				</p>
			</div>
			<div className="mt-16">
				<FormField />
			</div>
			<div className="mt-10">
				{loading ? (
					<div className="flex justify-center items-center">
						<Loader />
					</div>
				) : (
					<div className="">
						{searchText && (
							<h2 className="font-medium text-[#666e75] text-xl mb-3">
								Showing Results for{" "}
								<span className="text-[#222328]">{searchText}</span>
							</h2>
						)}
						<div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
							{searchText ? (
								<RenderCards data={[]} title="No Search Results Found" />
							) : (
								<RenderCards data={[]} title="No posts found" />
							)}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Home;
