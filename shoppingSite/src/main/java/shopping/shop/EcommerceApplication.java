package shopping.shop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EcommerceApplication
{

    public static void main(String[] args) {
        System.setProperty("server.PORT", "8081");
        SpringApplication.run(EcommerceApplication.class, args);
    }

}
