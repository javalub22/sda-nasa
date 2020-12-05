package pl.sda.nasa.models;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Car {
    private String model;
    private String color;
    private int year;
}
