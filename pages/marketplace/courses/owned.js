import { BaseLayout } from "@components/ui/layout";
import { MarketHeader } from "@components/ui/marketplace";
import { OrderCard } from "@components/ui/order";

export default function OwnedCourses() {
	return (
		<>
			<MarketHeader />
			<section className="grid grid-cols-1">
				<OrderCard />
			</section>
		</>
	);
}

OwnedCourses.Layout = BaseLayout;
