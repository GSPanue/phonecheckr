package com.phonecheckr.app.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

/**
 * Test class UrlTest
 *
 * @author Gurdev S. Panue
 */
@DisplayName("Url Model Test")
public class UrlTest {
  private Url url;

  @BeforeEach
  public void setUp() {
    url = new Url();
  }

  @Test
  @DisplayName("Test getId()")
  void testGetId() {
    final int EXPECTED = 1;
    url.setId(EXPECTED);
    assertEquals(EXPECTED, url.getId());
  }

  @Test
  @DisplayName("Test setId()")
  void testSetId() {
    final int EXPECTED1 = 0;
    assertEquals(EXPECTED1, url.getId());

    final int EXPECTED2 = 1;
    url.setId(EXPECTED2);
    assertEquals(EXPECTED2, url.getId());
  }

  @Test
  @DisplayName("Test getUrl()")
  void testGetUrl() {
    final String EXPECTED = "www.example.com";
    url.setUrl(EXPECTED);
    assertEquals(EXPECTED, url.getUrl());
  }

  @Test
  @DisplayName("Test setUrl()")
  void testSetUrl() {
    assertNull(url.getUrl());

    final String EXPECTED = "www.example.com";
    url.setUrl(EXPECTED);
    assertEquals(EXPECTED, url.getUrl());
  }

  @Test
  @DisplayName("Test toString()")
  void testToString() {
    final int ID = 1;
    final String URL = "www.example.com";

    final String EXPECTED = "URL {\n"
        + "\tid: " + ID + ",\n"
        + "\turl: " + URL + "\n"
        + "}";

    url.setId(ID);
    url.setUrl(URL);

    assertEquals(EXPECTED, url.toString());
  }
}
