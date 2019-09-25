package io.github.eglazkov;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class GetWeatherReq {

    private final String USER_AGENT = "Mozilla/5.0";

    public static void main(String[] args) throws Exception {

        GetWeatherReq http = new GetWeatherReq();

        System.out.println("Testing 1 - Send Http GET request");
        //return http.getTT();

    }

    // HTTP GET request
    public String sendGet(String lat, String lon) throws Exception {

        String url = "https://api.weather.yandex.ru/v1/forecast?lat=" + lat + "&lon=" + lon + "&lang=ru_RU&limit=7&hours=false&extra=false";

        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        // optional default is GET
        con.setRequestMethod("GET");

        //add request header
        String apiToken = "bbdc0f99-3dba-4a9f-99ed-d0a462fe39c0";
        con.setRequestProperty("User-Agent", USER_AGENT);
        con.setRequestProperty("X-Yandex-API-Key", apiToken);

        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'GET' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        //print result
        return response.toString();

    }

}