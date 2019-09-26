package com.phonecheckr.app.dao;

import org.hibernate.Session;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import com.phonecheckr.app.util.Hibernate;
import com.phonecheckr.app.model.Product;

/**
 * Test class ProductDaoTest
 *
 * @author Gurdev S. Panue
 */
@DisplayName("Product Dao Test")
public class ProductDaoTest {
  private Product product = new Product();
  private ProductDao productDao = new ProductDao();

  @BeforeEach
  void setUp() {
    Hibernate.createSessionFactory();

    product.setUrlId(1);
    product.setPageId(1);
    product.setBrandId(1);
    product.setModelId(1);
    product.setSupplierId(1);
    product.setImage("image");
    product.setDescription("description");
    product.setPrice(1);

    Session session = Hibernate.createSession();

    try {
      session.beginTransaction();
      session.save(product);
      session.getTransaction().commit();
    }
    catch (Exception exception) {
      session.getTransaction().rollback();

      System.out.println("Could not save product");
      exception.printStackTrace();
    }
  }

  @AfterEach
  void cleanUp() {
    Session session = Hibernate.createSession();

    try {
      session.beginTransaction();
      session.delete(product);
      session.getTransaction().commit();
    }
    catch (Exception exception) {
      session.getTransaction().rollback();

      System.out.println("Could not delete product");
      exception.printStackTrace();
    }
  }

  @Test
  @DisplayName("Test find(Product product)")
  void testFindA() {
    Product result = productDao.find(product);

    // Assert product was found
    assertNotEquals(0, product.getId());
    assertNotEquals(0, result.getId());
    assertEquals(product.getId(), result.getId());
  }

  @Test
  @DisplayName("Test find(String key, String value)")
  void testFindB() {
    Product result = productDao.find("id", Integer.toString(product.getId()));

    // Assert product was found
    assertNotEquals(0, product.getId());
    assertNotEquals(0, result.getId());
    assertEquals(product.getId(), result.getId());

    // Assert product was not found
    result = productDao.find("id", Integer.toString(product.getId() - 1));
    assertNull(result);
  }

  @Test
  @DisplayName("Test findOrSave(Product product)")
  void testFindOrSave() {
    Product result = productDao.findOrSave(product);

    // Assert product was found or saved
    assertNotEquals(0, product.getId());
    assertNotEquals(0, result.getId());
    assertEquals(product.getId(), result.getId());
  }
}
