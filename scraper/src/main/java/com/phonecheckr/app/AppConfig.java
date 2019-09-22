package com.phonecheckr.app;

import java.util.Scanner;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;

import com.phonecheckr.app.util.Hibernate;
import com.phonecheckr.app.scraper.CurrysScraper;
import com.phonecheckr.app.scraper.BuyMobilesScraper;

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
    System.out.println("Enter `stop` to stop scraping.");

    Scanner scanner = new Scanner(System.in);
    CurrysScraper currysScraper = createCurrysScraper();
    BuyMobilesScraper buyMobilesScraper = createBuyMobilesScraper();

    // Start scraper
    currysScraper.start();
    buyMobilesScraper.start();

    String input = scanner.nextLine();

    // Stop scraping when `stop` is entered into the console
    while (!input.equalsIgnoreCase("stop")) {
      input = scanner.nextLine();
    }

    System.out.println("Stopping the scrapers...");

    // Close the session factory
    Hibernate.destroySessionFactory();
  }

  /**
   * Creates the Currys scraper.
   *
   * @return the Currys scraper.
   */
  @Bean
  public CurrysScraper createCurrysScraper() {
    CurrysScraper currysScraper = new CurrysScraper();

    currysScraper.setSupplier("Currys");
    currysScraper.setSearchPage("https://www.currys.co.uk/gbuk/phones-broadband-and-sat-nav/mobile-phones-and-accessories/mobile-phones/362_3412_32041_xx_xx/1_50/brand-asc/xx-criteria.html");
    currysScraper.setProductSelector("article.product");
    currysScraper.setUrlSelector("header.productTitle > a");
    currysScraper.setBrandSelector("header.productTitle > a > span[data-product=brand]");
    currysScraper.setModelSelector("header.productTitle > a > span[data-product=name]");
    currysScraper.setColourSelector("header.productTitle > a > span[data-product=name]");
    currysScraper.setStorageCapacitySelector("header.productTitle > a > span[data-product=name]");
    currysScraper.setImageSelector("div.swiper-slide > a");
    currysScraper.setDescriptionSelector("ul.productDescription > li");
    currysScraper.setPriceSelector("strong.price");
    currysScraper.setNextPageSelector("ul.pagination > li > a[title=next]");

    return currysScraper;
  }

  /**
   * Creates the Buy Mobiles scraper.
   *
   * @return the Buy Mobiles scraper.
   */
  @Bean
  public BuyMobilesScraper createBuyMobilesScraper() {
    BuyMobilesScraper buyMobilesScraper = new BuyMobilesScraper();

    buyMobilesScraper.setSupplier("Buy Mobiles");
    buyMobilesScraper.setSearchPage("https://www.buymobiles.net/sim-free#manu=&maxprice=999&sort=alpha_a_z");
    buyMobilesScraper.setProductSelector("div.handset.clearfix");
    buyMobilesScraper.setUrlSelector("div.handset-info > div.btn > a");
    buyMobilesScraper.setBrandSelector("div.handsetTop-info > div > meta[itemprop=brand]");
    buyMobilesScraper.setModelSelector("div.handsetTop-info > h1");
    buyMobilesScraper.setColourSelector("div.handset-select.only > div > div > p.desktop");
    buyMobilesScraper.setStorageCapacitySelector("div.col-md-3.col-xs-6.spec-section");
    buyMobilesScraper.setImageSelector("div.handset-chosen > a");
    buyMobilesScraper.setDescriptionSelector("div.handsetTop-info > p.description");
    buyMobilesScraper.setPriceSelector("p.sim-free");
    buyMobilesScraper.setNextPageSelector(null);

    return buyMobilesScraper;
  }
}
