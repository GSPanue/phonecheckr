package com.phonecheckr.app.util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

/**
 * Utility class Hibernate
 *
 * @author Gurdev S. Panue
 */
public class Hibernate {
  private static SessionFactory sessionFactory = null;

  /**
   * Gets the session factory.
   *
   * @return the session factory.
   */
  public static SessionFactory getSessionFactory() {
    return sessionFactory;
  }

  /**
   * Sets the session factory to the specified session factory.
   *
   * @param sessionFactory the new session factory.
   */
  public static void setSessionFactory(SessionFactory sessionFactory) {
    Hibernate.sessionFactory = sessionFactory;
  }

  /**
   * Checks if sessionFactory has been initialised.
   *
   * @return whether sessionFactory has been initialised or not.
   */
  public static boolean hasSessionFactory() {
    return sessionFactory != null;
  }

  /**
   * Gets the current session.
   *
   * @return the current session.
   */
  public static Session getCurrentSession() {
    return getSessionFactory().getCurrentSession();
  }

  /**
   * Destroys the session factory and releases all resources.
   */
  public static void destroySessionFactory() {
    try {
      // Destroy session factory and set sessionFactory to null afterwards
      sessionFactory.close();
      setSessionFactory(null);
    }
    catch (Exception exception) {
      System.out.println("Failed to destroy session factory.");
      exception.printStackTrace();
    }
  }
}