!SLIDE

# Riak Search #

!SLIDE bullets incremental

* Full Text Search
* Scalable, Fault-Tolerant

!SLIDE

# Enable Search for a Bucket #

    @@@ python
    bucket = client.bucket("programming-languages")
    if not bucket.search_enabled():
      bucket.enable_index()

!SLIDE

    @@@ python
    client.search("programming-languages", "type:scripting")

!SLIDE

* Search Through Riak MapReduce
* Returns Link Objects

!SLIDE

    @@@ python
    results = client.search("programming-languages", "type:scripting")
    for doc in results:
      language = doc.get()

      print language.get_data()

!SLIDE

# Search and MapReduce #

    @@@ python
    query = client.search("programming-languages", "type:scripting")
    query.reduce_sort().reduce_limit(5).run()

!SLIDE

# Using the Solr Interface #

!SLIDE bullets incremental

* Direct Indexing/Querying
* Allows Sorting
* Pagination Using `start` and `rows`

!SLIDE small

# Index Documents #

    @@@ python
    client.solr().add("superheroes",
                      {"id": "hulk",
                       "name": "Hulk",
                       "skill": "Hulksmash!"})
