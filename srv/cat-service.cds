using my.bookshop as my from '../db/data-model';

using { northwind as ext  } from './external/northwind';

service CatalogService {
  entity Books as projection on my.Books;

  @readonly entity Products as projection on ext.Products actions {
    action checkPrice(units : Integer) returns {
      Price : Decimal;
      FinalPrice : Decimal;
      Discount : Decimal;
    };
  };
}
