package pl.sda.nasa;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PropertiesUtil {
    @Getter
    @Value("${server.port}")
    private String serverPort;
}
