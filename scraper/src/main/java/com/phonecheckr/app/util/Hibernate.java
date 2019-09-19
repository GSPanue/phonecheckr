package com.phonecheckr.app.util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

/**
 * Utility class Hibernate
 *
 * @author Gurdev S. Panue
 */
public class Hibernate {
  private static SessionFactory sessionFactory;

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
   * Creates a session factory.
   */
  public static void createSessionFactory() {
    final boolean HAS_NO_SESSION_FACTORY = !hasSessionFactory();

    if (HAS_NO_SESSION_FACTORY) {
      try {
        final Configuration configuration = new Configuration();

        // Build and set session factory
        setSessionFactory(configuration.configure().buildSessionFactory());
      }
      catch (Exception exception) {
        System.out.println("Session factory could not be created.");
        exception.printStackTrace();
      }
    }
  }

  /**
   * Checks if sessionFactory has been initialised.
   *
   * @return whether sessionFactory has been initialised or not.
   */
  public static boolean hasSessionFactory() {
    return getSessionFactory() != null;
  }

  /**
   * Creates a new session.
   *
   * @return the session.
   */
  public static Session createSession() {
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