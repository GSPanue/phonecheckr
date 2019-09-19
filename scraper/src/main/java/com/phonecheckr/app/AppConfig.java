package com.phonecheckr.app;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;

import com.phonecheckr.app.util.Hibernate;

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
}
