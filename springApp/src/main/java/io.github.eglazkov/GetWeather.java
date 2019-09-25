package io.github.eglazkov;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
public class GetWeather {

    @GetMapping(value = "/settings/{lat}&{lon}", produces = "application/json")
    @ResponseBody
    public Object settings( @PathVariable("lat") String lat
            , @PathVariable("lon") String lon) {
        Map<String, Object> response = new HashMap<>();
        GetWeatherReq yandexApi = new GetWeatherReq();
        try{
            return yandexApi.sendGet(lat, lon);
        }
        catch (Exception e){
            response.put("ok", false);
            response.put("ErrorMessage", e.toString());
            return response;
        }

    }

}
