import { useEffect } from "react";
import useSWR from "swr";

const adminAddresses = {
	"0xfbe1520b754892b873e40383dd302bcd3b86f999f9dcdf518323b08b3935fa9b": true,
};

export const handler = (web3, provider) => () => {
	const { data, mutate, ...rest } = useSWR(
		() => (web3 ? "web3/accounts" : null),
		async () => {
			const accounts = await web3.eth.getAccounts();
			return accounts[0];
		}
	);

	useEffect(() => {
		provider &&
			provider.on("accountsChanged", (accounts) =>
				mutate(accounts[0] ?? null)
			);
	}, [provider]);

	return {
		account: {
			data,
			isAdmin:
				(data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
			mutate,
			...rest,
		},
	};
};
