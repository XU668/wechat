export const serverUrl = "http://sails.penkuoer.com";

export function resetImg(url) {
  if (url) {
    if (url.startsWith("http")) {
      return url;
    }
    return serverUrl + url;
  }
  return "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/194336/18/6350/139954/60b98356E517403a3/415c8254b44d098f.jpg!cr_1053x420_4_0!q70.jpg.dpg";
}
