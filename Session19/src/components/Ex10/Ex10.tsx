import { useState } from "react";
import LargeList from "./LargeList";

export default function Ex10() {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<div>
			<h2>EX10</h2>
			<LargeList selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
		</div>
	);
}
