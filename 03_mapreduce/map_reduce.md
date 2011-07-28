!SLIDE

# MapReduce #

!SLIDE smaller

# JavaScript #

    @@@ python
    query = client.add(["programming-languages", "python"])
    query.map("""
      function(value) {
        var doc = Riak.mapValuesJson()[0];
        return [doc.flavor];
      }
    """).reduce("Riak.reduceSort")
    query.run()

!SLIDE smaller

# Erlang #

    @@@ python
    query = client.add(["programming-languages", "python"])
    query.map(["riak_kv_mapreduce", "map_object_value"]).run()

!SLIDE smaller

# Using the Built-Ins #

    @@@ python
    query = client.add(["programming-languages", "python"])
    query.map_values_json().reduce_sort().run()

