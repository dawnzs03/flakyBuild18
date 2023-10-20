package cn.tuyucheng.taketoday.objectmapper.dao;

import com.datastax.oss.driver.api.mapper.annotations.Dao;
import com.datastax.oss.driver.api.mapper.annotations.Increment;
import com.datastax.oss.driver.api.mapper.annotations.Select;
import cn.tuyucheng.taketoday.objectmapper.entity.Counter;

@Dao
public interface CounterDao {

    @Increment(entityClass = Counter.class)
    void incrementCounter(String id, long count);

    @Select
    Counter getCounterById(String id);
}
