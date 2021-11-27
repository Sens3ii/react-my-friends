export default class GotService {
	constructor() {
		this._apiBase = "https://my-json-server.typicode.com/Sens3ii/react-my-friends";
	}

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}
		return await res.json();
	};

	getAllFriends = async () => {
		const res = await this.getResource(`/friends/`);
		return res;
	};

	getFriend = async (name) => {
		const res = await this.getResource(`/friends/${name}`);
		return res;
	};

	getProfile = async () => {
		const res = await this.getResource(`/profile/`);
		return res;
	};

	getToken = async () => {
		const res = await this.getResource(`/token/`);
		return res;
	};

	postToken = async (token, url = "/token/") => {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ token }),
		};
		const res = await fetch(`${this._apiBase}${url}`, requestOptions);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}
		return await res.json();
	};
}
