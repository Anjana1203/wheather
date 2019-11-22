import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherapp';
  server_url = "https://weatherbit-v1-mashape.p.rapidapi.com/current";
  querystring = {"lang":"en","lon":"77.59369","lat":"12.97194"}
  headers = { 'x-rapidapi-host': "weatherbit-v1-mashape.p.rapidapi.com",
    'x-rapidapi-key': "11ee96b4d4msh30e7542995c9a8fp18878ajsned36f71ada28" }
  constructor(private httpClient: HttpClient) { }

  country = [
    {id: 1, name: "India", places: [
                                      {place: "Kerala", temparature:"5"},
                                      {place: "Tamilnad", temparature:"15"},
                                      {place: "Andra", temparature:"25"},
                                      {place: "Rajasthan", temparature:"35"},
                                      {place: "Mumbai", temparature:"30"},
                                      {place: "Delhi", temparature:"30"},
                                      {place: "Bangalore", temparature:"23"},
                                      {place: "Karnataka", temparature:"20"},
                                      {place: "Pune", temparature:"0"},
                                      {place: "Pune", temparature:"0"},
                                      {place: "Hiderabad", temparature:"45"},
                                      {place: "Kerala", temparature:"5"},
                                      {place: "Rajasthan", temparature:"35"},
                                      {place: "Mumbai", temparature:"30"},
                                      {place: "Delhi", temparature:"30"},
                                      {place: "Bangalore", temparature:"23"},
                                      {place: "Karnataka", temparature:"20"},
                                      {place: "Pune", temparature:"0"},
                                      {place: "Pune", temparature:"0"},
                                      {place: "Hiderabad", temparature:"45"},
                                      {place: "Kerala", temparature:"5"},
                                      {place: "Tamilnad", temparature:"15"},
                                      {place: "Andra", temparature:"25"},
                                      {place: "Rajasthan", temparature:"35"},
                                      {place: "Mumbai", temparature:"30"},
                                      {place: "Hiderabad", temparature:"45"}
                                      ]},
    {id: 2, name: "Pakistan",places: [
                                      {place: "Mumbai", temparature:"30"},
                                      {place: "Delhi", temparature:"30"},
                                      {place: "Bangalore", temparature:"23"},
                                      {place: "Karnataka", temparature:"20"},
                                      {place: "Pune", temparature:"0"},
                                      {place: "Pune", temparature:"0"},
                                      {place: "Hiderabad", temparature:"45"},
                                      {place: "Kerala", temparature:"5"},
                                      {place: "Rajasthan", temparature:"35"},
                                      {place: "Mumbai", temparature:"30"},
                                      {place: "Delhi", temparature:"30"},
                                      {place: "Defgh", temparature:"15"}
                                      ]},
    {id: 3, name: "China",places: [
                                      {place: "Kerala", temparature:"5"},
                                      {place: "Tamilnad", temparature:"15"},
                                      {place: "Andra", temparature:"25"},
                                      {place: "Rajasthan", temparature:"35"},
                                      {place: "Mumbai", temparature:"30"},
                                      {place: "Delhi", temparature:"30"},
                                      {place: "Bangalore", temparature:"23"},
                                      {place: "Karnataka", temparature:"20"},
                                      {place: "Pune", temparature:"0"},
                                      {place: "Pune", temparature:"0"},
                                      {place: "Hiderabad", temparature:"45"},
                                      {place: "Kerala", temparature:"5"},
                                      {place: "Rajasthan", temparature:"35"},
                                      {place: "Mumbai", temparature:"30"},
                                      {place: "Delhi", temparature:"30"},
                                      {place: "Bangalore", temparature:"23"},
                                      {place: "Karnataka", temparature:"20"},
                                      {place: "Pune", temparature:"0"},
                                      {place: "Pune", temparature:"0"},
                                      {place: "Hiderabad", temparature:"45"},
                                      {place: "Kerala", temparature:"5"},
                                      {place: "Tamilnad", temparature:"15"},
                                      {place: "Andra", temparature:"25"},
                                      {place: "Rajasthan", temparature:"35"},
                                      {place: "Hahahaafqaew e", temparature:"25"},
                                      {place: "Hiderabad", temparature:"45"},
                                      {place: "Kerala", temparature:"5"},
                                      {place: "Tamilnad", temparature:"15"},
                                      {place: "Andra", temparature:"25"},
                                      {place: "Rajasthan", temparature:"35"},
                                      {place: "Defgh", temparature:"15"}
                                      ]},
    {id: 4, name: "Brazil",places: [
                                      {place: "Hiderabad", temparature:"45"},
                                      {place: "Kerala", temparature:"5"},
                                      {place: "Rajasthan", temparature:"35"},
                                      {place: "Mumbai", temparature:"30"},
                                      {place: "Delhi", temparature:"30"},
                                      {place: "Bangalore", temparature:"23"},
                                      {place: "Karnataka", temparature:"20"},
                                      {place: "Pune", temparature:"0"},
                                      {place: "Pune", temparature:"0"},
                                      {place: "Hiderabad", temparature:"45"},
                                      {place: "Kerala", temparature:"5"},
                                      {place: "Tamilnad", temparature:"15"},
                                      {place: "Defgh", temparature:"15"}
                                      ]},
    {id: 5, name: "Sri lanka",places: [
                                      {place: "Rajasthan", temparature:"35"},
                                      {place: "Mumbai", temparature:"30"},
                                      {place: "Delhi", temparature:"30"},
                                      {place: "Bangalore", temparature:"23"},
                                      {place: "Karnataka", temparature:"20"},
                                      {place: "Pune", temparature:"0"},
                                      {place: "Defgh", temparature:"15"}
                                      ]},


  ];

  // a033598ce748416c93b1cd84778ab79f
  showPlaces(countryNo){
    this.countryNumber = countryNo;

    this.httpClient.get<[]>(this.server_url,{"lang":"en","lon":"77.59369","lat":"12.97194"},{ 'x-rapidapi-host': "weatherbit-v1-mashape.p.rapidapi.com",
      'x-rapidapi-key': "11ee96b4d4msh30e7542995c9a8fp18878ajsned36f71ada28" }).subscribe(
      (res) => {
        this.ourData = res
        console.log("res", res);
      },
    (err) => {
      console.log("err", err);
    });

    // _________
    url = "https://weatherbit-v1-mashape.p.rapidapi.com/current"
    querystring = {"lang":"en","lon":"77.59369","lat":"12.97194"}
    headers = { 'x-rapidapi-host': "weatherbit-v1-mashape.p.rapidapi.com",
      'x-rapidapi-key': "11ee96b4d4msh30e7542995c9a8fp18878ajsned36f71ada28" }
      response = requests.request("GET", url, headers=headers, params=querystring)
    print(response.text)
    // _________

  }

}
