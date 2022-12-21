import ServiceMethod from './service_method';
import ServiceUrl from "./service_url";


function COVID19Info(address) {
  let url = ServiceUrl.COVID19Url + '?city=' + address;
  return ServiceMethod.get(url,{});
}

function weatherInfo(address) {
  let url  = ServiceUrl.weatherUrl + '?msg=' + address + '&type=1'
  return ServiceMethod.get(url, {});
}

export default {
  weatherInfo,
  COVID19Info,
}
