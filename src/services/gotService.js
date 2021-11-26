export default class GotService {
	constructor() {
		this._apiBase = "http://localhost:3000";
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
}
