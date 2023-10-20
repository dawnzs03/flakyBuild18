package cn.tuyucheng.taketoday.spring.data.cosmosdb.service;

import cn.tuyucheng.taketoday.spring.data.cosmosdb.entity.Product;
import cn.tuyucheng.taketoday.spring.data.cosmosdb.repository.ProductRepository;
import com.azure.data.cosmos.PartitionKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class ProductService {

    private ProductRepository repository;

    @Autowired
    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> findProductByName(String productName) {
        return repository.findByProductName(productName);
    }

    public Optional<Product> findById(String productId, String category) {
        return repository.findById(productId, new PartitionKey(category));
    }

    public void saveProduct(Product product) {
        repository.save(product);
    }

    public void delete(String productId, String category) {
        repository.deleteById(productId, new PartitionKey(category));
    }
}