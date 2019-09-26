package com.phonecheckr.app.util;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * Test class HibernateTest
 *
 * @author Gurdev S. Panue
 */
@DisplayName("Hibernate Utility Test")
public class HibernateTest {
  @BeforeEach
  void setUp() {
    Hibernate.setSessionFactory(null);
  }

  @Test
  @DisplayName("Test createSessionFactory()")
  void testCreateSessionFactory() {
    assertNull(Hibernate.getSessionFactory());

    Hibernate.createSessionFactory();

    // Assert sessionFactory is not null after createSessionFactory is called
    assertNotNull(Hibernate.getSessionFactory());
  }

  @Test
  @DisplayName("Test hasSessionFactory()")
  void testHasSessionFactory() {
    // Assert false is returned when sessionFactory is null
    assertNull(Hibernate.getSessionFactory());
    assertFalse(Hibernate.hasSessionFactory());

    // Assert true is returned when sessionFactory is not null
    Hibernate.createSessionFactory();
    assertTrue(Hibernate.hasSessionFactory());
  }
}
