
import axios from 'axios';

export function PostData(type, userData) {
  //let BaseURL = 'https://api.thewallscript.com/restful/';
  let BaseURL = 'http://localhost/project/service/api/';

  return new Promise((success, error) =>{

    axios.post(BaseURL+type, JSON.stringify(userData))
    .then(response => {
      success(response.data);
    })
    .catch(function (err) {
      error(err);
    })

    });
}