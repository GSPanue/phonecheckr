package com.phonecheckr.app.dao;

import org.hibernate.Session;
import org.hibernate.query.Query;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.phonecheckr.app.util.Hibernate;
import com.phonecheckr.app.model.Product;

/**
 * Dao class ProductDao
 *
 * @author Gurdev S. Panue
 */
public class ProductDao extends BaseDao<Product, String> {
  /**
   * Finds a product.
   *
   * @param product the product.
   *
   * @return the product.
   */
  @Override
  public Product find(Product product) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Product> criteriaQuery = criteriaBuilder.createQuery(Product.class);
        Root<Product> root = criteriaQuery.from(Product.class);

        Predicate[] predicates = new Predicate[]{
            criteriaBuilder.equal(root.get("urlId"), product.getUrlId()),
            criteriaBuilder.equal(root.get("pageId"), product.getPageId()),
            criteriaBuilder.equal(root.get("brandId"), product.getBrandId()),
            criteriaBuilder.equal(root.get("modelId"), product.getModelId()),
            criteriaBuilder.equal(root.get("supplierId"), product.getSupplierId()),
            criteriaBuilder.equal(root.get("image"), product.getImage()),
            criteriaBuilder.equal(root.get("description"), product.getDescription()),
            criteriaBuilder.equal(root.get("price"), product.getPrice())
        };

        criteriaQuery.select(root).where(predicates);

        Query<Product> query = session.createQuery(criteriaQuery);
        Product result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        session.getTransaction().rollback();

        System.out.println("Unable to find product.");
        exception.printStackTrace();
      }
    }

    return product;
  }

  /**
   * Finds a product by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return the product.
   */
  @Override
  public Product find(String key, String value) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Product> criteriaQuery = criteriaBuilder.createQuery(Product.class);
        Root<Product> root = criteriaQuery.from(Product.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get(key), value));

        Query<Product> query = session.createQuery(criteriaQuery);
        Product result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        session.getTransaction().rollback();

        System.out.println("Unable to find product.");
        exception.printStackTrace();
      }
    }

    return null;
  }
}