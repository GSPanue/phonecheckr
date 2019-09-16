package com.phonecheckr.app;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * Main class App
 *
 * @author Gurdev S. Panue
 */
public class App {
  public static void main(String[] args) {
    // Load configuration class
    ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
  }
}
