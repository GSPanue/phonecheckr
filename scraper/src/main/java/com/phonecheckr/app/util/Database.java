package com.phonecheckr.app.util;

import com.phonecheckr.app.model.Product;
import com.phonecheckr.app.model.URL;
import com.phonecheckr.app.model.Page;
import com.phonecheckr.app.model.Brand;
import com.phonecheckr.app.model.Model;
import com.phonecheckr.app.model.Supplier;
import com.phonecheckr.app.model.Colour;
import com.phonecheckr.app.model.StorageCapacity;

import org.hibernate.Session;
import org.hibernate.query.Query;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class Database {
  /**
   * Creates a new session.
   *
   * @return the session.
   */
  private static Session createSession() {
    try {
      // Create session
      Session session = Hibernate.getCurrentSession();

      return session;
    }
    catch (Exception exception) {
      System.out.println("Unable to create session.");
      exception.printStackTrace();
    }

    return null;
  }

  /**
   * Finds a product.
   *
   * @param p the product.
   *
   * @return the product.
   */
  public static Product findProduct(Product p) {
    Session session = createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Product> criteriaQuery = criteriaBuilder.createQuery(Product.class);
        Root<Product> root = criteriaQuery.from(Product.class);

        Predicate[] predicates = new Predicate[8];
        predicates[0] = criteriaBuilder.equal(root.get("urlId"), p.getUrlId());
        predicates[1] = criteriaBuilder.equal(root.get("pageId"), p.getPageId());
        predicates[2] = criteriaBuilder.equal(root.get("brandId"), p.getBrandId());
        predicates[3] = criteriaBuilder.equal(root.get("modelId"), p.getModelId());
        predicates[4] = criteriaBuilder.equal(root.get("supplierId"), p.getSupplierId());
        predicates[5] = criteriaBuilder.equal(root.get("image"), p.getImage());
        predicates[6] = criteriaBuilder.equal(root.get("description"), p.getDescription());
        predicates[7] = criteriaBuilder.equal(root.get("price"), p.getPrice());

        criteriaQuery.select(root).where(predicates);

        Query<Product> query = session.createQuery(criteriaQuery);
        Product result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        System.out.println("Unable to find product.");
        exception.printStackTrace();
      }
    }

    return null;
  }

  /**
   * Finds a url by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return the url.
   */
  public static URL findUrl(String key, String value) {
    Session session = createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<URL> criteriaQuery = criteriaBuilder.createQuery(URL.class);
        Root<URL> root = criteriaQuery.from(URL.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get(key), value));

        Query<URL> query = session.createQuery(criteriaQuery);
        URL result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        System.out.println("Unable to find url.");
        exception.printStackTrace();
      }
    }

    return null;
  }

  /**
   * Finds a page by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return the page.
   */
  public static Page findPage(String key, String value) {
    Session session = createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Page> criteriaQuery = criteriaBuilder.createQuery(Page.class);
        Root<Page> root = criteriaQuery.from(Page.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get(key), value));

        Query<Page> query = session.createQuery(criteriaQuery);
        Page result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        System.out.println("Unable to find page.");
        exception.printStackTrace();
      }
    }

    return null;
  }

  /**
   * Finds a brand by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return the brand.
   */
  public static Brand findBrand(String key, String value) {
    Session session = createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Brand> criteriaQuery = criteriaBuilder.createQuery(Brand.class);
        Root<Brand> root = criteriaQuery.from(Brand.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get(key), value));

        Query<Brand> query = session.createQuery(criteriaQuery);
        Brand result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        System.out.println("Unable to find brand.");
        exception.printStackTrace();
      }
    }

    return null;
  }

  /**
   * Finds a model by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return the model.
   */
  public static Model findModel(String key, String value) {
    Session session = createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Model> criteriaQuery = criteriaBuilder.createQuery(Model.class);
        Root<Model> root = criteriaQuery.from(Model.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get(key), value));

        Query<Model> query = session.createQuery(criteriaQuery);
        Model result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        System.out.println("Unable to find model.");
        exception.printStackTrace();
      }
    }

    return null;
  }

  /**
   * Finds a supplier by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return the supplier.
   */
  public static Supplier findSupplier(String key, String value) {
    Session session = createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Supplier> criteriaQuery = criteriaBuilder.createQuery(Supplier.class);
        Root<Supplier> root = criteriaQuery.from(Supplier.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get(key), value));

        Query<Supplier> query = session.createQuery(criteriaQuery);
        Supplier result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        System.out.println("Unable to find supplier.");
        exception.printStackTrace();
      }
    }

    return null;
  }

  /**
   * Finds a colour by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return the colour.
   */
  public static Colour findColour(String key, String value) {
    Session session = createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Colour> criteriaQuery = criteriaBuilder.createQuery(Colour.class);
        Root<Colour> root = criteriaQuery.from(Colour.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get(key), value));

        Query<Colour> query = session.createQuery(criteriaQuery);
        Colour result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        System.out.println("Unable to find colour.");
        exception.printStackTrace();
      }
    }

    return null;
  }

  /**
   * Finds a storage capacity by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return the storage capacity.
   */
  public static StorageCapacity findStorageCapacity(String key, String value) {
    Session session = createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<StorageCapacity> criteriaQuery = criteriaBuilder.createQuery(StorageCapacity.class);
        Root<StorageCapacity> root = criteriaQuery.from(StorageCapacity.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get(key), value));

        Query<StorageCapacity> query = session.createQuery(criteriaQuery);
        StorageCapacity result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        System.out.println("Unable to find storage capacity.");
        exception.printStackTrace();
      }
    }

    return null;
  }
}
