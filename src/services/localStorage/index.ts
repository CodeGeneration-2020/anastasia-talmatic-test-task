export class LocalStorageService {
	getData(key: string) {
		return localStorage.getItem(key) || +[];
	}
	setData(key: string, value: string) {
		localStorage.setItem(key, value);
	}
}

export const localStorageService = new LocalStorageService();
