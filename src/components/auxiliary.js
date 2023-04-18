export function getCity(lat, lng, setItem) {
  let xhr = new XMLHttpRequest();
  let key = "pk.463c606657acae1bc8f276a073302727"; //https://es.locationiq.com/ //sign in with Google Sabri
  // Paste your LocationIQ token below.
  xhr.open(
    "GET",
    "https://us1.locationiq.com/v1/reverse.php?key=" +
      key +
      "&lat=" +
      lat +
      "&lon=" +
      lng +
      "&format=json",
    true
  );

  xhr.send();
  xhr.onreadystatechange = processRequest;
  xhr.addEventListener("readystatechange", processRequest, false);

  function processRequest(e) {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      const _address = response.address;
      const city =
        _address?.city ||
        _address?.village ||
        _address?.town ||
        _address?.county;

      var ret =
        city + ", " + response.address.state + ", " + response.address.country;
      setItem(ret);
      return;
    }
  }
}

export const getAddress = async (lat, lng) => {
  const response = await fetch(
    `http://nominatim.openstreetmap.org/reverse?format=json&lon=${lng}&lat=${lat}`
  );
  const data = await response.json();
  if (data) return data.address;
};

export const getDateString = (date) => {
  return `${new Date(1000 * date.seconds).getDate()}/${
    new Date(1000 * date.seconds).getMonth() + 1
  }/${new Date(1000 * date.seconds).getFullYear()}`;
};

export const initialDate = new Date("2022-08-10");

export const getDateFormat = (date) => {
  const dateArray = date.split("-");
  const _year = dateArray[0];
  const _month = parseInt(dateArray[1], 10) - 1;
  const _date = dateArray[2];
  const _entryDate = new Date(_year, _month, _date);
  return _entryDate;
};
