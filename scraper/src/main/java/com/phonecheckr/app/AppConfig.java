package com.phonecheckr.app;

import java.util.Scanner;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;

import com.phonecheckr.app.util.Hibernate;
import com.phonecheckr.app.scraper.CurrysScraper;

/**
 * Spring Configuration class AppConfig
 *
 * @author Gurdev S. Panue
 */
@Configuration
public class AppConfig {
  /**
   * Creates and sets a session factory object.
   */
  @Bean
  public void createSessionFactory() {
    Hibernate.createSessionFactory();
  }

  /**
   * Starts the web scraper.
   */
  @Bean
  public void startScraping() {
    Scanner scanner = new Scanner(System.in);
    CurrysScraper currysScraper = new CurrysScraper();

    // Start scraper(s)
    currysScraper.start();

    String input = scanner.nextLine();

    // Stop scraping when `stop` is entered into the console
    while (!input.equalsIgnoreCase("stop")) {
      input = scanner.nextLine();
    }

    // Close the session factory
    Hibernate.destroySessionFactory();
  }
}
