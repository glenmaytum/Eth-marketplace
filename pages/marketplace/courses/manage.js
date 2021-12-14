import { BaseLayout } from "@components/ui/layout";
import { MarketHeader } from "@components/ui/marketplace";
import { OrderCard } from "@components/ui/order";

export default function ManagedCourses() {
	return (
		<>
			<MarketHeader />
			<section className="grid grid-cols-1">
				<OrderCard />
			</section>
		</>
	);
}

ManagedCourses.Layout = BaseLayout;
