package pl.sda.nasa.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.sda.nasa.models.Car;

@RestController
public class CarController {

    @GetMapping("/car")
    Car handleCar() {
        return  new Car("fiat", "red", 1999);
    }

}
