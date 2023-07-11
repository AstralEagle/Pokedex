const key = 'd1b09c6720cc0f5e9aa070bd3868ba8a';

class FetchAPI {
  static async fetchAPI(url, needKey = false) {
    try {
      return fetch(
        `https://api.openweathermap.org/${url}${needKey && `&appid=${key}`}`,
      );
    } catch (e) {
      return new Error(e.message);
    }
  }
  static async getInfoCity(cityName) {
    try {
      return await (
        await this.fetchAPI(`data/2.5/weather?q=${cityName}`, true)
      ).json();
    } catch (e) {
      throw new Error(e.message);
    }
  }
  static async getWheaterIcon(id) {
    return await (await this.fetchAPI(`/img/wn/${id}@2x.png`)).json();
  }
}

export default FetchAPI;
